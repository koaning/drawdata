"""Browser regression: pip install pytest-playwright jupyterlab; playwright install chromium."""

import json
import os
from pathlib import Path
import socket
import subprocess
import sys
import time
from urllib.request import urlopen

import pytest

pytest.importorskip("jupyterlab")
pytest.importorskip("pytest_playwright")

from jupyter_client import BlockingKernelClient


@pytest.fixture
def notebook_server(tmp_path):
    """Serve a real notebook with a kernel from this test's Python environment."""
    kernel = tmp_path / "data/kernels/drawdata-regression"
    kernel.mkdir(parents=True)
    (kernel / "kernel.json").write_text(json.dumps({
        "argv": [sys.executable, "-m", "ipykernel_launcher", "-f", "{connection_file}"],
        "display_name": "Drawdata regression",
        "language": "python",
    }))
    with socket.socket() as sock:
        sock.bind(("127.0.0.1", 0))
        port = sock.getsockname()[1]
    url = f"http://127.0.0.1:{port}"
    env = dict(os.environ, JUPYTER_DATA_DIR=str(tmp_path / "data"),
               JUPYTER_CONFIG_DIR=str(tmp_path / "config"),
               JUPYTER_RUNTIME_DIR=str(tmp_path / "runtime"),
               IPYTHONDIR=str(tmp_path / "ipython"))
    with (tmp_path / "server.log").open("w") as log:
        server = subprocess.Popen([
            sys.executable, "-m", "jupyterlab", "--no-browser", "--ip=127.0.0.1",
            f"--port={port}", "--ServerApp.port_retries=0",
            f"--ServerApp.root_dir={tmp_path}", "--IdentityProvider.token=drawdata-test",
        ], env=env, stdout=log, stderr=subprocess.STDOUT)
        try:
            for _ in range(100):
                try:
                    with urlopen(url + "/api/status?token=drawdata-test", timeout=1):
                        break
                except OSError:
                    assert server.poll() is None, (tmp_path / "server.log").read_text()
                    time.sleep(0.2)
            else:
                pytest.fail("JupyterLab did not start")
            yield url
        finally:
            server.terminate()
            try:
                server.wait(timeout=10)
            except subprocess.TimeoutExpired:
                server.kill()
                server.wait()


@pytest.mark.parametrize("mode", ["empty", "initial", "updated"])
def test_first_drag_syncs_to_python(page, tmp_path, notebook_server, mode):
    initial_data = [] if mode == "empty" else [
        {"x": 50, "y": 80, "color": "#1f77b4", "label": "a", "batch": 0},
    ]
    output = tmp_path / "data.json"
    source = Path(__file__).resolve().parents[1]
    code = f"""import sys, json
from pathlib import Path
sys.path.insert(0, {str(source)!r})
from drawdata import ScatterWidget
from IPython.display import display
widget = ScatterWidget(data={initial_data if mode == 'initial' else []!r})
def record(change):
    Path({str(output)!r}).write_text(json.dumps(widget.data))
record(None)
widget.observe(record, names='data')
display(widget)
"""
    notebook = {
        "cells": [{"id": "drawing", "cell_type": "code", "execution_count": None,
                   "metadata": {}, "outputs": [], "source": code}],
        "metadata": {"kernelspec": {"display_name": "Drawdata regression",
                                     "language": "python", "name": "drawdata-regression"}},
        "nbformat": 4, "nbformat_minor": 5,
    }
    if mode == "updated":
        notebook["cells"].append({
            "id": "update", "cell_type": "code", "execution_count": None,
            "metadata": {}, "outputs": [], "source": f"widget.data = {initial_data!r}",
        })
    (tmp_path / "repro.ipynb").write_text(json.dumps(notebook))
    page.goto(notebook_server + "/lab/tree/repro.ipynb?token=drawdata-test")
    cell = page.locator(".jp-Notebook .jp-CodeCell .cm-content").first
    cell.wait_for()
    for _ in range(100):
        connections = list((tmp_path / "runtime").glob("kernel-*.json"))
        if connections:
            break
        page.wait_for_timeout(50)
    assert connections
    client = BlockingKernelClient(connection_file=str(connections[0]))
    client.load_connection_file()
    client.start_channels()
    try:
        client.wait_for_ready(timeout=20)
    finally:
        client.stop_channels()
    cell.click()
    page.keyboard.press("Shift+Enter")
    svg = page.locator("svg.dd-scatter-svg").first
    svg.wait_for(timeout=60000)
    if mode == "updated":
        from playwright.sync_api import expect

        page.locator(".jp-Notebook .jp-CodeCell .cm-content").nth(1).click()
        page.keyboard.press("Shift+Enter")
        expect(svg.locator("circle.drawn")).to_have_count(1)
    svg.scroll_into_view_if_needed()
    box = svg.bounding_box()
    page.mouse.move(box["x"] + 130, box["y"] + 130)
    page.mouse.down()
    page.mouse.move(box["x"] + 230, box["y"] + 160, steps=8)
    page.mouse.up()
    drawn = svg.locator("circle.drawn").count()
    assert drawn > len(initial_data)
    for _ in range(100):
        try:
            data = json.loads(output.read_text())
        except json.JSONDecodeError:
            page.wait_for_timeout(50)
            continue
        if len(data) == drawn:
            break
        page.wait_for_timeout(50)
    assert len(data) == drawn
    assert data[:len(initial_data)] == initial_data
    assert all(point["label"] == "a" for point in data)
