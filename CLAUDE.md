# Development Notes

## Setup

Run `make install` to install esbuild (for bundling JavaScript) and project dependencies.

## Building JavaScript

After modifying files in `js/`, rebuild the bundles:

```bash
./esbuild --bundle --format=esm --outfile=drawdata/static/scatter_widget.js js/scatter_widget.js
```

Or use `make js` for watch mode during development.

## Dependencies

**NEVER add dev tools (ruff, pytest, etc.) or demo-only dependencies (altair, etc.) to the main `dependencies` list in pyproject.toml.** The library should only depend on what it actually needs at runtime: anywidget and pandas.
