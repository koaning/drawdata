### drawdata 

> "Just draw some data and get on with your day."

This small Python library contains widgets that allow you to draw a dataset in a Python
notebook. This should be very useful when teaching machine learning algorithms.

<img width="800" height="505" alt="drawdata demo" src="https://github.com/user-attachments/assets/ff5146a5-5e9c-4f77-8cba-526212d2f885" />

For a live demo without installing anything, check out [the demo page](https://koaning.github.io/drawdata). 

You can really get creative with this in a notebook, so feel free to give it a spin!

#### Installation 

Installation occurs via pip. 

```
uv pip install drawdata
```


#### Usage:

You can load the scatter widget to start drawing immediately. 

```python
from drawdata import ScatterWidget

widget = ScatterWidget()
widget
```

If you want to be able to remove points with the brush, you can turn on the eraser. This adds an eraser toggle to the toolbar, and undo will also restore erased points.

```python
widget = ScatterWidget(eraser=True)
```

You can also start from an existing dataset, which is handy if you want to "nudge" some data. Pass a pandas or polars dataframe, or a list of dictionaries, with `x` and `y` columns and optionally a `label` (`"a"` to `"d"`) or a `color`. Coordinates are in the widget's pixel space (`0..width`, `0..height`). The reset button then brings back this starting data instead of clearing the canvas.

```python
import pandas as pd

df = pd.DataFrame({"x": [100, 200, 300], "y": [100, 250, 150], "label": ["a", "a", "b"]})
widget = ScatterWidget(data=df, eraser=True)
```

The output of `widget.data_as_pandas` (or `data_as_polars`) can be passed straight back in as `data`. If you'd like the drawn data back in the same format you passed in, use `widget.data_as_input_type`. It returns a pandas dataframe if you passed pandas, a polars dataframe if you passed polars, a pyarrow table if you passed pyarrow, and a plain list of dicts otherwise.

If you want to use the dataset that you've just drawn you can do so via: 

```python
# Get the drawn data as a list of dictionaries
widget.data

# Get the drawn data as a dataframe
widget.data_as_pandas
widget.data_as_polars
```

If you're eager to do scikit-learn stuff with your drawn data you may appreciate this property instead:

```
X, y = widget.data_as_X_y
```

The assumption for this property is that if you've used multiple colors that you're interested in doing classification and if you've only drawn one color you're interested in regression. In the case of regression `y` will refer to the y-axis.

#### Usage: `BarWidget`

There's also a widget that lets you draw bar charts. You can draw one value per bin for each collection, which is useful for sketching profiles like hourly energy usage next to the expected sunshine.

```python
from drawdata import BarWidget

widget = BarWidget(collection_names=["usage", "sunshine"], n_bins=24, y_max=10)
widget
```

You can also give every bin a label for the x-axis via `x_labels`. The number of bins follows the number of labels, and the widget only shows as many labels as fit. For example, half-hour buckets for an entire day:

```python
half_hours = [f"{h:02d}:{m:02d}" for h in range(24) for m in (0, 30)]

widget = BarWidget(collection_names=["usage", "sunshine"], x_labels=half_hours)
widget
```

With many narrow bins it can help to see exactly which bin you're on. Pass `tooltip=True` to show the label and value of the bin under the cursor.

The drawn values are available in the same way, with one row per collection and bin (plus a `label` column when you pass `x_labels`):

```python
widget.data
widget.data_as_pandas
widget.data_as_polars
```

## Under the hood

The project uses [anywidget](https://anywidget.dev/) under the hood so our tools should work in [marimo](https://marimo.io/), Jupyter, VSCode and Colab. You could use this to even interact with [ipywidgets](https://ipywidgets.readthedocs.io/en/stable/) natively. [Here](https://www.youtube.com/watch?v=STPv0jSAQEk) is an example where updating a drawing triggers a new scikit-learn model to train ([code](https://github.com/probabl-ai/youtube-appendix/blob/main/04-drawing-data/notebook.ipynb)).
