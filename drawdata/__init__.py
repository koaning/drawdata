from pathlib import Path
import anywidget
import traitlets
from IPython.display import IFrame


class ScatterWidget(anywidget.AnyWidget):
    """
    A scatter drawing widget that automatically can update a pandas/polars dataframe
    as your draw data.
    """
    _esm = Path(__file__).parent / 'static' / 'scatter_widget.js'
    _css = Path(__file__).parent / 'static' / 'widget.css'
    data = traitlets.List([]).tag(sync=True)
    brushsize = traitlets.Int(40).tag(sync=True)
    width = traitlets.Int(800).tag(sync=True)
    height = traitlets.Int(500).tag(sync=True)

    @property
    def data_as_pandas(self):
        import pandas as pd 
        return pd.DataFrame(self.data)

    @property
    def data_as_polars(self):
        import polars as pl
        return pl.DataFrame(self.data)

    @property
    def data_as_X_y(self):
        import numpy as np

        colors = [_['color'] for _ in self.data]
        
        # Assume that we're dealing with regression in this case
        if np.unique(colors).shape[0] == 1:
            X = np.array([[_['x']] for _ in self.data])
            y = np.array([_['y'] for _ in self.data])
            return X, y
        
        X = np.array([[_['x'], _['y']] for _ in self.data])
        return X, colors


class BarWidget(anywidget.AnyWidget):
    """
    A bar drawing widget that automatically can update a pandas/polars dataframe
    as your draw data.
    """
    _esm = Path(__file__).parent / 'static' / 'bar_widget.js'
    _css = Path(__file__).parent / 'static' / 'widget.css'
    data = traitlets.List([]).tag(sync=True)
    y_min = traitlets.Float(0.0).tag(sync=True)
    y_max = traitlets.Float(1.0).tag(sync=True)
    n_bins = traitlets.Int(24).tag(sync=True)
    width = traitlets.Int(800).tag(sync=True)
    height = traitlets.Int(550).tag(sync=True)
    collection_names = traitlets.List(["collection1", "collection2"]).tag(sync=True)
    @property
    def data_as_pandas(self):
        import pandas as pd 
        return pd.DataFrame(self.data)

    @property
    def data_as_polars(self):
        import polars as pl
        return pl.DataFrame(self.data)
