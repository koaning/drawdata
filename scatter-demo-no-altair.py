# /// script
# requires-python = ">=3.11"
# dependencies = [
#     "marimo",
#     "drawdata>=0.5.2",
#     "pandas",
# ]
# ///

import marimo

__generated_with = "0.23.14"
app = marimo.App(width="medium")


@app.cell
def _():
    import marimo as mo

    from drawdata import ScatterWidget

    return ScatterWidget, mo


@app.cell(hide_code=True)
def _(mo):
    mo.md(r"""
    # Drawing a `ScatterChart` (no altair)

    Minimal repro notebook for debugging a molab WASM issue: same as
    `scatter-demo.py` but without the `altair` dependency or chart cell.
    """)
    return


@app.cell(hide_code=True)
def _(ScatterWidget, mo):
    widget = mo.ui.anywidget(ScatterWidget(height=400))
    widget
    return (widget,)


if __name__ == "__main__":
    app.run()
