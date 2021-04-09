<img src="logo.png" width=125 height=125 align="right">

# drawdata 

This small python app allows you to draw a dataset in a jupyter
notebook. This should be very useful when teaching machine learning algorithms.

You can get the same tooling from going to [drawdata.xyz](https://drawdata.xyz)
but with this library you'll also be able to use it from within jupyter.

## Installation 

Installation occurs via pip. 

```
python -m pip install drawdata
```

To read the data, `pandas` is useful:

```
python -m pip install pandas
```

## Usage 

When you run this from jupyter, you should load in an iframe.

```python
from drawdata import draw_scatter

draw_scatter()
```


After making the drawing and hitting the `copy csv` button, you can use pandas to read the clipboard. if installed.

```python
import pandas as pd 
pd.read_clipboard(sep=",")
```
