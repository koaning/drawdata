import marimo

__generated_with = "0.9.18"
app = marimo.App(width="medium")


@app.cell
def __(BarWidget):
    BarWidget
    return


@app.cell(hide_code=True)
def __(mo, widget):
    mo.md(f"""## BarWidget demo 

    Let's say that you've got a house with solar panels. During some parts of the day you may use more or less energy and the sun might not be shining. You can draw this out on the barwidget shown below. 

    {widget}

    As you update the bar widget the chart below will update. It shows you what the effect of a home battery might be if the day that you drew were to repeat itself. 
    """)

    return


@app.cell
def __(out):
    out
    return


@app.cell
def __(BarWidget, mo):
    widget = mo.ui.anywidget(BarWidget(height=200, width=700, n_bins=24, collection_names=["usage", "sunshine"]))
    return (widget,)


@app.cell(hide_code=True)
def __(pltr):
    import altair as alt

    p1 = alt.Chart(pltr).mark_line(color="red", interpolate="step-after").encode(x="bin", y="cs")
    p2 = alt.Chart(pltr).mark_area(interpolate="step-after").encode(x="bin", y="battery")

    total = pltr["battery"].sum()

    out = (p2 + p1).properties(width=700, title=f"Max battery cap: {pltr['battery'].max(): .2f} kWh, total: {total :.2f} kWh")
    return alt, out, p1, p2, total


@app.cell
def __():
    import marimo as mo
    from drawdata import BarWidget
    return BarWidget, mo


@app.cell(hide_code=True)
def __(widget):
    import numpy as np

    df = widget.data_as_pandas
    subset = df.loc[lambda d: d["collection"].isin(["usage", "sunshine"])]
    return df, np, subset


@app.cell(hide_code=True)
def __(np, subset):
    import pandas as pd

    def concat_days(dfin, days=4): 
        out = dfin.copy()
        for day in range(1, days + 1):
            adapted = dfin.assign(bin=lambda d: d['bin'] + 24 * day + 1)
            out = pd.concat([out, adapted])
        return out

    def add_stats(dfin):
        return (
            dfin
            .pivot(columns="collection", index="bin", values="value")
            .assign(balance=lambda d: d["sunshine"] - d["usage"])
            .assign(cs=lambda d: d["balance"].cumsum())
            .assign(cs=lambda d: np.where(d["cs"] > 5, 5, d["cs"]))
            .assign(battery=lambda d: np.where(d["cs"] > 0, d["cs"], 0))
            .reset_index()
    )


    pltr = subset.pipe(concat_days).sort_values(["collection", "bin"]).pipe(add_stats)
    return add_stats, concat_days, pd, pltr


@app.cell
def __():
    return


if __name__ == "__main__":
    app.run()
