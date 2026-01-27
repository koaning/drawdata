# /// script
# requires-python = ">=3.14"
# dependencies = [
#     "marimo>=0.19.6",
# ]
# ///


import marimo

__generated_with = "0.13.3"
app = marimo.App(width="medium")


@app.cell
def _():
    import marimo as mo
    from drawdata import ScatterWidget
    return ScatterWidget, mo


@app.cell(hide_code=True)
def _(mo):
    mo.md(
        r"""
        # Drawing a `ScatterChart`

        This notebook contains a demo of the `ScatterWidget` inside of the [drawdata](https://github.com/koaning/drawdata) library.
        """
    )
    return


@app.cell(hide_code=True)
def _(ScatterWidget, mo):
    widget = mo.ui.anywidget(ScatterWidget(height=400))
    widget
    return (widget,)


@app.cell(hide_code=True)
def _(widget):
    import altair as alt


    base = alt.Chart(widget.data_as_pandas)
    base_bar = base.mark_bar(opacity=0.3, binSpacing=0)
    color_domain = widget.data_as_pandas["color"].unique()

    xscale = alt.Scale(domain=(0, 800))
    yscale = alt.Scale(domain=(0, 500))
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

    top_hist & (points | right_hist)
    return


@app.cell
def _():
    return


if __name__ == "__main__":
    app.run()
