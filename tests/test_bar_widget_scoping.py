import re
from pathlib import Path

ROOT = Path(__file__).parent.parent
CSS = (ROOT / "drawdata/static/bar_widget.css").read_text(encoding="utf-8")
SOURCE = (ROOT / "js/bar_widget.js").read_text(encoding="utf-8")
BUNDLE = (ROOT / "drawdata/static/bar_widget.js").read_text(encoding="utf-8")


def _selectors(css):
    css = re.sub(r"/\*.*?\*/", "", css, flags=re.DOTALL)
    for block in re.findall(r"([^{}]+)\{", css):
        for selector in block.split(","):
            yield selector.strip()


def test_bar_widget_css_selectors_are_all_scoped():
    # Generic selectors like .container or label leak into other notebook
    # outputs (#26), so every rule must target a dd-bar-* element
    selectors = list(_selectors(CSS))
    assert selectors
    for selector in selectors:
        assert selector.startswith((".dd-bar-", "button.dd-bar-")), selector


def test_bar_widget_root_element_gets_scoping_class():
    assert 'container.setAttribute("class", "dd-bar-container")' in BUNDLE


def test_bar_widget_buttons_use_scoped_classes():
    assert 'btn.setAttribute("class", "dd-bar-control")' in BUNDLE
    assert 'clear_btn.setAttribute("class", "dd-bar-reset")' in BUNDLE
    assert 'button.classList.add("dd-bar-active")' in BUNDLE
    assert "document.querySelector" not in SOURCE
