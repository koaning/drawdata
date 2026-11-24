from pathlib import Path

import anywidget
import traitlets


class ScatterWidget(anywidget.AnyWidget):
    """
    A scatter drawing widget that automatically can update a pandas/polars dataframe
    as your draw data.
    """

    _esm = Path(__file__).parent / "static" / "scatter_widget.js"
    _css = Path(__file__).parent / "static" / "scatter_widget.css"
    data = traitlets.List([]).tag(sync=True)
    brushsize = traitlets.Int(40).tag(sync=True)
    width = traitlets.Int(800).tag(sync=True)
    height = traitlets.Int(400).tag(sync=True)
    n_classes = traitlets.Int(4).tag(sync=True)
    eraser = traitlets.Bool(False).tag(sync=True)

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        if not 1 <= self.n_classes <= 4:
            raise ValueError("n_classes must be between 1 and 4")

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

        colors = [_["color"] for _ in self.data]

        # Assume that we're dealing with regression in this case
        if np.unique(colors).shape[0] == 1:
            X = np.array([[_["x"]] for _ in self.data])
            y = np.array([_["y"] for _ in self.data])
            return X, y

        X = np.array([[_["x"], _["y"]] for _ in self.data])
        return X, colors


class BarWidget(anywidget.AnyWidget):
    """
    A bar drawing widget that automatically can update a pandas/polars dataframe
    as your draw data.
    """

    _esm = Path(__file__).parent / "static" / "bar_widget.js"
    _css = Path(__file__).parent / "static" / "bar_widget.css"
    data = traitlets.List([]).tag(sync=True)
    y_min = traitlets.Float(0.0).tag(sync=True)
    y_max = traitlets.Float(1.0).tag(sync=True)
    n_bins = traitlets.Int(24).tag(sync=True)
    width = traitlets.Int(800).tag(sync=True)
    height = traitlets.Int(550).tag(sync=True)
    collection_names = traitlets.List(["collection1", "collection2"]).tag(sync=True)
    # Optional label per bin for the x-axis, e.g. ["00:00", "00:30", ...].
    # When given, n_bins follows len(x_labels).
    x_labels = traitlets.List([]).tag(sync=True)
    # Show a small "label · value" box above the bin under the cursor
    tooltip = traitlets.Bool(False).tag(sync=True)

    def __init__(self, x_labels=None, **kwargs):
        if x_labels is not None:
            # Accept any iterable (tuple, numpy array, pandas/polars series)
            x_labels = [str(label) for label in x_labels]
            if "n_bins" in kwargs and kwargs["n_bins"] != len(x_labels):
                raise ValueError(
                    f"n_bins ({kwargs['n_bins']}) must match len(x_labels) ({len(x_labels)}); "
                    "you can leave out n_bins when passing x_labels"
                )
            if x_labels:
                kwargs["n_bins"] = len(x_labels)
            kwargs["x_labels"] = x_labels
        super().__init__(**kwargs)

    @traitlets.validate("x_labels")
    def _validate_x_labels(self, proposal):
        return [str(label) for label in proposal["value"]]

    @traitlets.observe("x_labels")
    def _sync_n_bins_to_labels(self, change):
        if change["new"] and len(change["new"]) != self.n_bins:
            self.n_bins = len(change["new"])

    @property
    def data_as_pandas(self):
        import pandas as pd

        return pd.DataFrame(self.data)

    @property
    def data_as_polars(self):
        import polars as pl

        return pl.DataFrame(self.data)
