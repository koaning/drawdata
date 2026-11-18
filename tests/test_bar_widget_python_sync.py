from pathlib import Path

import pytest


SOURCE = Path("js/bar_widget.js").read_text(encoding="utf-8")
BUNDLE = Path("drawdata/static/bar_widget.js").read_text(encoding="utf-8")


def widget_module(javascript):
    marker = "// js/bar_widget.js"
    return javascript[javascript.index(marker) :] if marker in javascript else javascript


@pytest.fixture(params=[SOURCE, BUNDLE], ids=["source", "bundle"])
def javascript(request):
    return widget_module(request.param)


def test_bar_widget_seeds_and_normalizes_model_data(javascript):
    assert "function seedFromModel()" in javascript
    assert 'model.get("data")' in javascript
    assert "function clampValue(value)" in javascript
    assert "function normalizeCollections()" in javascript


def test_bar_widget_registers_every_synced_trait(javascript):
    handlers = {
        "data": "onDataChange",
        "n_bins": "onBinsChange",
        "y_min": "onMinChange",
        "y_max": "onMaxChange",
        "width": "updateDimensions",
        "height": "updateDimensions",
        "collection_names": "onCollectionNamesChange",
    }
    assert "const modelHandlers" in javascript
    for trait, handler in handlers.items():
        assert f"{trait}: {handler}" in javascript
    assert "model.on(`change:${trait}`, handler)" in javascript


def test_bar_widget_unregisters_model_handlers_on_cleanup(javascript):
    assert "return () =>" in javascript
    assert "model.off(`change:${trait}`, handler)" in javascript
    assert "d3.select(container).remove()" in javascript


def test_bar_widget_updates_dimensions_without_forcing_a_data_sync(javascript):
    assert "function updateDimensions()" in javascript
    assert 'width = model.get("width")' in javascript
    assert 'height = model.get("height")' in javascript
    assert "x.range([0, width])" in javascript
    assert "y.range([height, 0])" in javascript
    assert "updateChart()" in javascript


def test_bar_widget_rebuilds_dynamic_collections(javascript):
    assert "function syncCollectionsFromNames()" in javascript
    assert "function renderControls()" in javascript
    assert "function updateCollectionGroups()" in javascript
    assert '.data(Object.keys(collections), (name) => name)' in javascript
    assert '.attr("data-collection", (name) => name)' in javascript


def test_bar_widget_fully_updates_grid_lines(javascript):
    assert 'grid.selectAll("line.horizontal-grid")' in javascript
    assert '.data(y.ticks(10), (value) => value)' in javascript
    assert '.join("line")' in javascript
    assert '.attr("y1", (value) => y(value))' in javascript
    assert '.attr("y2", (value) => y(value))' in javascript


def test_bar_widget_only_writes_changed_data_and_resets_echo_guard(javascript):
    assert "function modelDataMatches(nextData)" in javascript
    assert "if (modelDataMatches(data))" in javascript
    assert "syncingDataOut = true" in javascript
    assert "try {" in javascript
    assert "finally {" in javascript
    assert "syncingDataOut = false" in javascript


def test_bar_widget_scopes_button_queries_to_its_container(javascript):
    assert "document.querySelector" not in javascript
    assert 'container.querySelectorAll("button.control")' in javascript
