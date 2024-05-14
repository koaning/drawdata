from pathlib import Path
import anywidget
import traitlets
from IPython.display import IFrame


def draw_line():
    """Deprecated line chart drawing utility that loads from an iframe"""
    return IFrame("https://drawdata.xyz/line.html", width=800, height=550)


def draw_scatter():
    """Deprecated scatter chart drawing utility that loads from an iframe"""
    return IFrame("https://drawdata.xyz/scatter.html", width=800, height=550)


def draw_histogram():
    """Deprecated histogram drawing utility that loads from an iframe"""
    return IFrame("https://drawdata.xyz/histogram.html", width=800, height=550)



class ScatterWidget(anywidget.AnyWidget):
    """
    A scatter drawing widget that automatically can update a pandas/polars dataframe
    as your draw data.
    """
    _esm = Path(__file__).parent / 'static' / 'scatter_widget.js'
    _css = Path(__file__).parent / 'static' / 'scatter_widget.css'
    data = traitlets.List([]).tag(sync=True)
    brushsize = traitlets.Int(40).tag(sync=True)

    @property
    def data_as_pandas(self):
        import pandas as pd 
        return pd.DataFrame(self.data)

    @property
    def data_as_polars(self):
        import polars as pl
        return pl.DataFrame(self.data)

    @property
    def data_as_X_y(self, kind='classification'):
        import numpy as np

        colors = [_['color'] for _ in self.data]
        X = np.array([[_['x']] for _ in self.data])
        
        # Assume that we're dealing with regression in this case
        if np.unique(colors).shape[0] == 1:
            y = np.array([_['y'] for _ in self.data])
            return X, y
        return X, colors
