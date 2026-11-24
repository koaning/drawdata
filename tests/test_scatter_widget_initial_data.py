from pathlib import Path

import pandas as pd
import polars as pl
import pyarrow as pa
import pytest

from drawdata import ScatterWidget, _normalize_points


def to_records(columns):
    n = len(next(iter(columns.values())))
    return [{k: v[i] for k, v in columns.items()} for i in range(n)]


# Every way a user may hand us data, built from the same dict of columns.
BACKENDS = {
    "records": to_records,
    "pandas": pd.DataFrame,
    "polars": pl.DataFrame,
    "pyarrow": pa.table,
}
OUTPUT_TYPES = {"records": list, "pandas": pd.DataFrame, "polars": pl.DataFrame, "pyarrow": pa.Table}


@pytest.fixture(params=BACKENDS)
def backend(request):
    return request.param


def point(x, y, label="a", color="#1f77b4", batch=0):
    return {"x": float(x), "y": float(y), "color": color, "label": label, "batch": batch}


@pytest.mark.parametrize(
    "columns, expected",
    [
        pytest.param(
            {"x": [1, 2], "y": [3, 4]},
            [point(1, 3), point(2, 4)],
            id="xy-only-defaults-to-class-a",
        ),
        pytest.param(
            {"x": [1, 2], "y": [3, 4], "label": ["b", None]},
            [point(1, 3, "b", "#ff7f0e"), point(2, 4)],
            id="label-infers-color",
        ),
        pytest.param(
            {"x": [1, 2], "y": [3, 4], "color": ["#2ca02c", None]},
            [point(1, 3, "c", "#2ca02c"), point(2, 4)],
            id="color-infers-label",
        ),
        pytest.param(
            {"x": [1.5], "y": [2.5], "label": ["d"], "batch": [3]},
            [point(1.5, 2.5, "d", "#d62728", 3)],
            id="batch-is-kept",
        ),
    ],
)
def test_normalize(backend, columns, expected):
    assert _normalize_points(BACKENDS[backend](columns)) == expected


@pytest.mark.parametrize(
    "columns, n_classes",
    [
        pytest.param({"x": [1]}, 4, id="missing-y"),
        pytest.param({"x": [1], "y": [None]}, 4, id="null-y"),
        pytest.param({"x": [1], "y": [2], "label": ["c"]}, 2, id="label-outside-n-classes"),
        pytest.param({"x": [1], "y": [2], "color": ["red"]}, 4, id="unknown-color"),
    ],
)
def test_normalize_raises(backend, columns, n_classes):
    with pytest.raises(ValueError):
        _normalize_points(BACKENDS[backend](columns), n_classes=n_classes)


def test_single_dict_raises():
    with pytest.raises(ValueError):
        _normalize_points({"x": [1], "y": [2]})


def test_widget_starts_from_data(backend):
    widget = ScatterWidget(data=BACKENDS[backend]({"x": [1, 2], "y": [3, 4], "label": ["a", "b"]}))
    assert widget.data == [point(1, 3), point(2, 4, "b", "#ff7f0e")]
    assert widget.initial_data == widget.data


def test_data_as_input_type_roundtrips(backend):
    widget = ScatterWidget(data=BACKENDS[backend]({"x": [1, 2], "y": [3, 4], "label": ["a", "b"]}))
    exported = widget.data_as_input_type
    assert isinstance(exported, OUTPUT_TYPES[backend])
    assert ScatterWidget(data=exported).data == widget.data


def test_data_as_input_type_without_data_is_a_list():
    assert ScatterWidget().data_as_input_type == []


@pytest.mark.parametrize("prop", ["data_as_pandas", "data_as_polars"])
def test_dataframe_exports_roundtrip(prop):
    widget = ScatterWidget(data=[{"x": 1, "y": 2, "label": "b"}])
    assert ScatterWidget(data=getattr(widget, prop)).data == widget.data


def test_n_classes_still_validated():
    with pytest.raises(ValueError):
        ScatterWidget(n_classes=5)


def test_reset_restores_initial_data_in_bundle():
    js = Path("drawdata/static/scatter_widget.js").read_text(encoding="utf-8")
    assert 'model.get("initial_data")' in js
