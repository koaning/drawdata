from pathlib import Path


BUNDLE = Path("drawdata/static/bar_widget.js").read_text(encoding="utf-8")


def test_bar_widget_seeds_from_model_data():
    # render() must read the model's existing data into the collections
    # (so constructor-provided data survives the first render)
    assert "seedFromModel" in BUNDLE
    assert 'model.get("data")' in BUNDLE


def test_bar_widget_listens_for_python_side_updates():
    # ScatterWidget already has change: handlers; BarWidget needs them too,
    # otherwise Python-side updates only apply on a re-render
    assert 'model.on("change:data"' in BUNDLE
    assert 'model.on("change:n_bins"' in BUNDLE
    assert 'model.on("change:y_min"' in BUNDLE
    assert 'model.on("change:y_max"' in BUNDLE


def test_bar_widget_change_data_handler_ignores_own_echo():
    # updateDataOut() calls model.set("data", ...), which fires change:data
    # synchronously; without a guard the handler would loop
    assert "syncingDataOut" in BUNDLE


def test_bar_widget_scopes_button_queries_to_its_container():
    # document.querySelector('button.control') throws when the view isn't
    # attached to the document yet, and cross-contaminates multiple
    # BarWidgets on a page; queries must go through the widget's container
    assert 'document.querySelector(\'button.control\')' not in BUNDLE
    assert 'document.querySelectorAll(\'button.control\')' not in BUNDLE
    assert 'document.querySelector("button.control")' not in BUNDLE
    assert 'document.querySelectorAll("button.control")' not in BUNDLE
    assert 'container.querySelector("button.control")' in BUNDLE
    assert 'container.querySelectorAll("button.control")' in BUNDLE
