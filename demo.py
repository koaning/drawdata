# /// script
# requires-python = ">=3.12"
# dependencies = [
#     "altair==5.5.0",
#     "anywidget==0.9.18",
#     "marimo",
#     "pandas==2.2.3",
# ]
# ///

import marimo

__generated_with = "0.18.0"
app = marimo.App(width="medium")


@app.cell
def _():
    import marimo as mo
    import pandas as pd
    from drawdata import ScatterWidget
    return ScatterWidget, mo


@app.cell(hide_code=True)
def _(mo):
    mo.md(r"""
    # Drawing a `ScatterChart`

    This notebook contains a demo of the `ScatterWidget` inside of the [drawdata](https://github.com/koaning/drawdata) library. You should see that as you draw data, that the chart below updates.
    """)
    return


@app.cell(hide_code=True)
def _(ScatterWidget, mo):
    widget = mo.ui.anywidget(ScatterWidget(height=350))
    widget
    return (widget,)


@app.cell(hide_code=True)
def _(mo, widget):
    import altair as alt

    out = mo.md("Draw some data to see the effect here.")

    if widget.value["data"]:
        base = alt.Chart(widget.data_as_pandas)
        base_bar = base.mark_bar(opacity=0.3, binSpacing=0)
        color_domain = widget.data_as_pandas["color"].unique()

        xscale = alt.Scale(domain=(0, widget.value["width"]))
        yscale = alt.Scale(domain=(0, widget.value["height"]))
        colscale = alt.Scale(domain=color_domain, range=color_domain)

        points = base.mark_circle().encode(
            alt.X("x").scale(xscale),
            alt.Y("y").scale(yscale),
            color="color",
        )

        top_hist = (
            base_bar
            .encode(
                alt.X("x:Q")
                    # when using bins, the axis scale is set through
                    # the bin extent, so we do not specify the scale here
                    # (which would be ignored anyway)
                    .bin(maxbins=30, extent=xscale.domain).stack(None).title(""),
                alt.Y("count()").stack(None).title(""),
                alt.Color("color:N", scale=colscale),
            )
            .properties(height=60)
        )

        right_hist = (
            base_bar
            .encode(
                alt.Y("y:Q")
                    .bin(maxbins=30, extent=yscale.domain)
                    .stack(None)
                    .title(""),
                alt.X("count()").stack(None).title(""),
                alt.Color("color:N"),
            )
            .properties(width=60)
        )

        out = top_hist & (points | right_hist)

    out
    return


@app.cell
def _():
    return


if __name__ == "__main__":
    app.run()
