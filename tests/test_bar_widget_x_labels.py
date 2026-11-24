from pathlib import Path

import pytest

from drawdata import BarWidget

HALF_HOURS = [f"{h:02d}:{m:02d}" for h in range(24) for m in (0, 30)]


def test_n_bins_follows_x_labels():
    widget = BarWidget(x_labels=HALF_HOURS)
    assert widget.n_bins == 48
    assert widget.x_labels == HALF_HOURS


def test_matching_n_bins_is_fine():
    assert BarWidget(x_labels=HALF_HOURS, n_bins=48).n_bins == 48


def test_mismatched_n_bins_raises():
    with pytest.raises(ValueError, match="n_bins"):
        BarWidget(x_labels=HALF_HOURS, n_bins=24)


def test_labels_accept_any_iterable_and_become_strings():
    widget = BarWidget(x_labels=range(1, 13))
    assert widget.x_labels == [str(i) for i in range(1, 13)]
    assert widget.n_bins == 12


def test_setting_labels_later_updates_n_bins():
    widget = BarWidget(n_bins=24)
    widget.x_labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    assert widget.n_bins == 7


def test_without_labels_nothing_changes():
    widget = BarWidget(n_bins=24)
    assert widget.x_labels == []
    assert widget.n_bins == 24


def test_tooltip_is_off_by_default():
    assert BarWidget().tooltip is False
    assert BarWidget(tooltip=True).tooltip is True


def test_bundle_uses_labels():
    bundle = Path("drawdata/static/bar_widget.js").read_text(encoding="utf-8")
    assert 'model.get("x_labels")' in bundle
    assert 'model.on("change:x_labels"' in bundle
    assert 'model.get("tooltip")' in bundle
