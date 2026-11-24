from pathlib import Path

from drawdata import ScatterWidget


def test_eraser_is_off_by_default():
    assert ScatterWidget().eraser is False


def test_eraser_can_be_enabled():
    assert ScatterWidget(eraser=True).eraser is True


def test_bundle_contains_eraser():
    # Guards against forgetting to rebuild the bundle after editing js/
    js = Path("drawdata/static/scatter_widget.js").read_text(encoding="utf-8")

    assert '"aria-label", "Eraser"' in js
    assert 'model.get("eraser")' in js
