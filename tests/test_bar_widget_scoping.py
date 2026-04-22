from pathlib import Path
import re


def test_bar_widget_css_is_scoped_to_widget_container():
    css = Path("drawdata/static/bar_widget.css").read_text(encoding="utf-8")

    # Ensure we expose a widget-specific root class for all styling.
    assert ".dd-bar-container {" in css

    leaked_global_selectors = [
        r"^\.container\s*\{",
        r"^\.controls\s*\{",
        r"^\.active\s*\{",
        r"^label\s*\{",
        r"^input\[type=\"number\"\]\s*\{",
    ]

    for pattern in leaked_global_selectors:
        assert re.search(pattern, css, flags=re.MULTILINE) is None


def test_bar_widget_button_selection_is_container_scoped():
    js = Path("drawdata/static/bar_widget.js").read_text(encoding="utf-8")

    assert 'container.querySelectorAll("button.dd-bar-control")' in js
    assert 'container.querySelector("button.dd-bar-control")' in js
    assert 'document.querySelectorAll("button.control")' not in js
    assert 'document.querySelector("button.control")' not in js


def test_scatter_widget_does_not_use_circle_brush_before_initialization():
    js = Path("drawdata/static/scatter_widget.js").read_text(encoding="utf-8")

    assert "let circle_brush;" in js
    assert "if (circle_brush)" in js
