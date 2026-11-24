# /// script
# requires-python = ">=3.11"
# dependencies = [
#     "marimo",
#     "drawdata>=0.5.3",
#     "pandas",
#     "altair",
# ]
# ///

import marimo

__generated_with = "0.25.2"
app = marimo.App(width="medium")


@app.cell
def _():
    import marimo as mo

    from drawdata import BarWidget, ScatterWidget

    return BarWidget, ScatterWidget, mo


@app.cell(hide_code=True)
def _(mo):
    mo.md(r"""
    # Drawing a `ScatterChart`

    This notebook contains a demo of the `ScatterWidget` inside of the [drawdata](https://github.com/koaning/drawdata) library. The eraser in the toolbar removes points under the brush, and undo brings them back.
    """)
    return


@app.cell(hide_code=True)
def _(ScatterWidget, mo):
    widget = mo.ui.anywidget(ScatterWidget(height=400, eraser=True))
    widget
    return (widget,)


@app.cell(hide_code=True)
def _():
    import altair as alt

    return (alt,)


@app.cell(hide_code=True)
def _(alt, mo, widget):
    mo.stop(not widget.value["data"], mo.md("Draw some data to see the effect here."))

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

    top_hist = base_bar.encode(
        alt.X("x:Q")
        # when using bins, the axis scale is set through
        # the bin extent, so we do not specify the scale here
        # (which would be ignored anyway)
        .bin(maxbins=30, extent=xscale.domain)
        .stack(None)
        .title(""),
        alt.Y("count()").stack(None).title(""),
        alt.Color("color:N", scale=colscale),
    ).properties(height=60)

    right_hist = base_bar.encode(
        alt.Y("y:Q").bin(maxbins=30, extent=yscale.domain).stack(None).title(""),
        alt.X("count()").stack(None).title(""),
        alt.Color("color:N"),
    ).properties(width=60)

    top_hist & (points | right_hist)
    return


@app.cell(hide_code=True)
def _(mo):
    mo.md(r"""
    # Drawing a `BarChart`

    The `BarWidget` lets you draw a value per bin for one or more collections. Pick a collection with the buttons and drag over the chart to draw it. Here every bin is half an hour of a day, so think of an energy usage profile next to the expected sunshine. The `x_labels` give each bin its label on the x-axis.
    """)
    return


@app.cell(hide_code=True)
def _(BarWidget, mo):
    half_hours = [f"{h:02d}:{m:02d}" for h in range(24) for m in (0, 30)]

    bar_widget = mo.ui.anywidget(
        BarWidget(
            collection_names=["usage", "sunshine"],
            x_labels=half_hours,
            y_max=10,
            height=350,
        )
    )
    bar_widget
    return bar_widget, half_hours


@app.cell(hide_code=True)
def _(alt, bar_widget, half_hours, mo):
    bar_df = bar_widget.data_as_pandas
    mo.stop(
        bar_df.empty or bar_df["value"].abs().sum() == 0,
        mo.md("Draw some bars to see the effect here."),
    )

    bar_colors = bar_df.drop_duplicates("collection")
    bar_colscale = alt.Scale(
        domain=list(bar_colors["collection"]),
        range=list(bar_colors["color"]),
    )

    bar_chart = (
        alt.Chart(bar_df)
        .mark_line(interpolate="step", strokeWidth=2)
        .encode(
            alt.X("label:O")
            .sort(half_hours)
            .axis(values=half_hours[::4], labelAngle=0)
            .title("time of day"),
            alt.Y("value:Q").scale(domain=(0, bar_widget.value["y_max"])),
            alt.Color("collection:N", scale=bar_colscale),
        )
        .properties(width="container", height=200)
    )

    totals = bar_df.groupby("collection", sort=False)["value"].sum()
    mo.vstack(
        [
            mo.hstack(
                [mo.stat(value=f"{v:.1f}", label=f"total {k}") for k, v in totals.items()],
                justify="start",
            ),
            bar_chart,
        ]
    )
    return (bar_df,)


@app.cell(hide_code=True)
def _(mo):
    mo.md(r"""
    ## Adding a battery

    Say the sunshine bars are what your solar panels produce and the usage bars are what your house uses. Any surplus sunshine charges a battery, and when you use more than the sun gives, the battery gets drained before you need power from the grid. Below we assume three days like the one you drew: the battery starts empty on day 1 and carries whatever is left over the night into the next day. Drag the slider to see how much a bigger battery helps.
    """)
    return


@app.cell(hide_code=True)
def _(mo):
    capacity = mo.ui.slider(0, 40, step=1, value=10, label="battery capacity", show_value=True)
    capacity
    return (capacity,)


@app.cell(hide_code=True)
def _(alt, bar_df, capacity, half_hours, mo):
    import pandas as pd

    def simulate(usage, sunshine, capacity):
        # Walk through the slots in order: surplus sunshine charges the
        # battery, a shortage drains it first and only then the grid
        level = 0.0
        rows = []
        for used, produced in zip(usage, sunshine):
            surplus = produced - used
            if surplus >= 0:
                level += min(surplus, capacity - level)
                from_grid = 0.0
            else:
                drained = min(-surplus, level)
                level -= drained
                from_grid = -surplus - drained
            rows.append({"battery level": level, "from grid": from_grid})
        return pd.DataFrame(rows)

    days = 3
    slot_hours = 24 / len(half_hours)
    wide = bar_df.pivot(index="bin", columns="collection", values="value").sort_index()
    sim = simulate(
        list(wide["usage"]) * days, list(wide["sunshine"]) * days, capacity.value
    )
    sim["hours"] = [i * slot_hours for i in range(len(sim))]

    grid_without = (wide["usage"] - wide["sunshine"]).clip(lower=0).sum() * days
    grid_with = sim["from grid"].sum()
    saved = 1 - grid_with / grid_without if grid_without > 0 else 0.0

    # Repeat the last slot at the very end, so the step lines cover the full
    # last half hour and the axis runs to the end of day 3
    plot_df = pd.concat([sim, sim.tail(1).assign(hours=days * 24)]).melt(
        id_vars="hours", var_name="series", value_name="energy"
    )

    lines = (
        alt.Chart(plot_df)
        .mark_line(interpolate="step-after", strokeWidth=2)
        .encode(
            alt.X("hours:Q")
            .scale(domain=(0, days * 24), nice=False)
            .axis(
                values=list(range(0, days * 24 + 1, 6)),
                labelExpr=(
                    f"datum.value == {days * 24} ? '24:00' : "
                    "datum.value % 24 == 0 ? 'day ' + (datum.value / 24 + 1) : "
                    "pad(datum.value % 24, 2, '0', 'left') + ':00'"
                ),
                labelAngle=0,
            )
            .title(None),
            alt.Y("energy:Q"),
            alt.Color("series:N").scale(
                domain=["battery level", "from grid"], range=["#2ca02c", "#d62728"]
            ),
        )
    )
    day_breaks = (
        alt.Chart(pd.DataFrame({"hours": [24 * d for d in range(1, days)]}))
        .mark_rule(strokeDash=[4, 4], opacity=0.4)
        .encode(x="hours:Q")
    )
    battery_chart = (lines + day_breaks).properties(width="container", height=220)

    mo.vstack(
        [
            mo.hstack(
                [
                    mo.stat(value=f"{grid_without:.1f}", label="from grid without battery"),
                    mo.stat(value=f"{grid_with:.1f}", label="from grid with battery"),
                    mo.stat(value=f"{saved:.0%}", label="saved by the battery"),
                ],
                justify="start",
            ),
            battery_chart,
        ]
    )
    return


if __name__ == "__main__":
    app.run()
