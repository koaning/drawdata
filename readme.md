[![Open in molab](https://marimo.io/molab-shield.svg)](https://molab.marimo.io/github/koaning/drawdata/blob/main/scatter-demo.py/wasm?utm_source=drawdata)

### drawdata 

> "Just draw some data and get on with your day."

This small Python library contains widgets that allow you to draw a dataset in a Python
notebook. This should be very useful when teaching machine learning algorithms.

<img width="800" height="505" alt="drawdata demo" src="https://github.com/user-attachments/assets/ff5146a5-5e9c-4f77-8cba-526212d2f885" />

For a live demo without installing anything, go [here](https://marimo.io/molab-shield.svg)](https://molab.marimo.io/github/koaning/drawdata/blob/main/scatter-demo.py/wasm?utm_source=drawdata).

You can really get creative with this in a notebook, so feel free to give it a spin!

#### Installation 

Installation occurs via pip. 

```
uv pip install drawdata
```


#### Usage: `ScatterWidget`

You can load the scatter widget to start drawing immediately. 

```python
from drawdata import ScatterWidget

widget = ScatterWidget()
widget
```

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

## Under the hood

The project uses [anywidget](https://anywidget.dev/) under the hood so our tools should work in [marimo](https://marimo.io/), Jupyter, VSCode and Colab. You could use this to even interact with [ipywidgets](https://ipywidgets.readthedocs.io/en/stable/) natively. [Here](https://www.youtube.com/watch?v=STPv0jSAQEk) is an example where updating a drawing triggers a new scikit-learn model to train ([code](https://github.com/probabl-ai/youtube-appendix/blob/main/04-drawing-data/notebook.ipynb)).
