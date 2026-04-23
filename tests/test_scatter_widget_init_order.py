from pathlib import Path


def test_scatter_widget_does_not_use_circle_brush_before_initialization():
    js = Path("drawdata/static/scatter_widget.js").read_text(encoding="utf-8")

    assert "let circle_brush;" in js
    assert "if (circle_brush)" in js
