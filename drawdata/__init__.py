from pathlib import Path

import anywidget
import traitlets

# Must stay in sync with `allColors` / `allClassNames` in js/scatter_widget.js
SCATTER_COLORS = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728"]
SCATTER_LABELS = ["a", "b", "c", "d"]


def _to_records(data):
    """
    Turn whatever we got into a list of dicts, without importing any
    dataframe library: polars and pandas dataframes, pyarrow tables, or
    any iterable of dicts.
    """
    if data is None:
        return []
    # polars first: its `to_dict()` returns columns, not rows
    if hasattr(data, "to_dicts"):
        return data.to_dicts()
    # pyarrow.Table
    if hasattr(data, "to_pylist"):
        return data.to_pylist()
    # pandas
    if hasattr(data, "to_dict") and hasattr(data, "columns"):
        return data.to_dict("records")
    if isinstance(data, dict):
        raise ValueError(
            "data should be a dataframe or a list of dicts, not a single dict"
        )
    return list(data)


def _export_pandas(records):
    import pandas as pd

    return pd.DataFrame(records)


def _export_polars(records):
    import polars as pl

    return pl.DataFrame(records)


def _export_pyarrow(records):
    import pyarrow as pa

    return pa.Table.from_pylist(records)


# Keyed by the top-level module of the input's type, e.g. "pandas" for
# pandas.core.frame.DataFrame. The imports only happen when exporting.
_EXPORTERS = {
    "pandas": _export_pandas,
    "polars": _export_polars,
    "pyarrow": _export_pyarrow,
}


def _missing(value):
    """None, or a NaN that pandas/polars use for missing values."""
    return value is None or (isinstance(value, float) and value != value)


def _normalize_points(data, n_classes=4):
    """
    Normalize user-provided scatter points into the format the widget uses:
    `{"x", "y", "color", "label", "batch"}`. Only `x` and `y` are required;
    `label` and `color` are inferred from each other and default to class "a".
    """
    colors = SCATTER_COLORS[:n_classes]
    labels = SCATTER_LABELS[:n_classes]
    points = []
    for i, row in enumerate(_to_records(data)):
        if not isinstance(row, dict):
            raise ValueError(f"Point {i} must be a dict, got {type(row).__name__}")
        if _missing(row.get("x")) or _missing(row.get("y")):
            raise ValueError(f"Point {i} needs both an 'x' and a 'y' value")
        label = None if _missing(row.get("label")) else row.get("label")
        color = None if _missing(row.get("color")) else row.get("color")
        if label is not None:
            label = str(label)
            if label not in labels:
                raise ValueError(
                    f"Point {i} has label {label!r}, expected one of {labels}"
                )
            if color is None:
                color = colors[labels.index(label)]
        if color is not None:
            color = str(color)
            if color not in colors:
                raise ValueError(
                    f"Point {i} has color {color!r}, expected one of {colors}"
                )
            if label is None:
                label = labels[colors.index(color)]
        if label is None:
            label, color = labels[0], colors[0]
        batch = None if _missing(row.get("batch")) else row.get("batch")
        points.append(
            {
                "x": float(row["x"]),
                "y": float(row["y"]),
                "color": color,
                "label": label,
                "batch": 0 if batch is None else int(batch),
            }
        )
    return points


class ScatterWidget(anywidget.AnyWidget):
    """
    A scatter drawing widget that automatically can update a pandas/polars dataframe
    as your draw data.

    Pass `data` (a list of dicts or a pandas/polars dataframe with `x` and `y`
    columns, and optionally `label` or `color`) to start from an existing
    dataset. The reset button restores this starting data.
    """

    _esm = Path(__file__).parent / "static" / "scatter_widget.js"
    _css = Path(__file__).parent / "static" / "scatter_widget.css"
    data = traitlets.List([]).tag(sync=True)
    initial_data = traitlets.List([]).tag(sync=True)
    brushsize = traitlets.Int(40).tag(sync=True)
    width = traitlets.Int(800).tag(sync=True)
    height = traitlets.Int(400).tag(sync=True)
    n_classes = traitlets.Int(4).tag(sync=True)
    eraser = traitlets.Bool(False).tag(sync=True)

    def __init__(self, data=None, **kwargs):
        n_classes = kwargs.get("n_classes", 4)
        if not 1 <= n_classes <= 4:
            raise ValueError("n_classes must be between 1 and 4")
        points = _normalize_points(data, n_classes)
        kwargs.setdefault("initial_data", points)
        super().__init__(data=points, **kwargs)
        # Remember which library the input came from, so that
        # `data_as_input_type` can hand the data back in the same format.
        library = type(data).__module__.split(".")[0]
        self._input_library = library if library in _EXPORTERS else None

    @property
    def data_as_input_type(self):
        """
        The drawn data in the same format as the `data` you passed in: a pandas
        or polars dataframe, or a pyarrow table. Without a dataframe input this
        is the plain list of dicts, like `.data`.
        """
        if self._input_library is None:
            return list(self.data)
        return _EXPORTERS[self._input_library](self.data)

    @property
    def data_as_pandas(self):
        return _export_pandas(self.data)

    @property
    def data_as_polars(self):
        return _export_polars(self.data)

    @property
    def data_as_X_y(self):
        import numpy as np

        colors = [_["color"] for _ in self.data]

        # Assume that we're dealing with regression in this case
        if np.unique(colors).shape[0] == 1:
            X = np.array([[_["x"]] for _ in self.data])
            y = np.array([_["y"] for _ in self.data])
            return X, y

        X = np.array([[_["x"], _["y"]] for _ in self.data])
        return X, colors


class BarWidget(anywidget.AnyWidget):
    """
    A bar drawing widget that automatically can update a pandas/polars dataframe
    as your draw data.
    """

    _esm = Path(__file__).parent / "static" / "bar_widget.js"
    _css = Path(__file__).parent / "static" / "bar_widget.css"
    data = traitlets.List([]).tag(sync=True)
    y_min = traitlets.Float(0.0).tag(sync=True)
    y_max = traitlets.Float(1.0).tag(sync=True)
    n_bins = traitlets.Int(24).tag(sync=True)
    width = traitlets.Int(800).tag(sync=True)
    height = traitlets.Int(550).tag(sync=True)
    collection_names = traitlets.List(["collection1", "collection2"]).tag(sync=True)
    # Optional label per bin for the x-axis, e.g. ["00:00", "00:30", ...].
    # When given, n_bins follows len(x_labels).
    x_labels = traitlets.List([]).tag(sync=True)
    # Show a small "label · value" box above the bin under the cursor
    tooltip = traitlets.Bool(False).tag(sync=True)

    def __init__(self, x_labels=None, **kwargs):
        if x_labels is not None:
            # Accept any iterable (tuple, numpy array, pandas/polars series)
            x_labels = [str(label) for label in x_labels]
            if "n_bins" in kwargs and kwargs["n_bins"] != len(x_labels):
                raise ValueError(
                    f"n_bins ({kwargs['n_bins']}) must match len(x_labels) ({len(x_labels)}); "
                    "you can leave out n_bins when passing x_labels"
                )
            if x_labels:
                kwargs["n_bins"] = len(x_labels)
            kwargs["x_labels"] = x_labels
        super().__init__(**kwargs)

    @traitlets.validate("x_labels")
    def _validate_x_labels(self, proposal):
        return [str(label) for label in proposal["value"]]

    @traitlets.observe("x_labels")
    def _sync_n_bins_to_labels(self, change):
        if change["new"] and len(change["new"]) != self.n_bins:
            self.n_bins = len(change["new"])

    @property
    def data_as_pandas(self):
        import pandas as pd

        return pd.DataFrame(self.data)

    @property
    def data_as_polars(self):
        import polars as pl

        return pl.DataFrame(self.data)
