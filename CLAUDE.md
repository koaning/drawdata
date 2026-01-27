# Development Notes

## Setup

Run `make install` to install esbuild (for bundling JavaScript) and project dependencies.

## Building JavaScript

After modifying files in `js/`, rebuild the bundles:

```bash
./esbuild --bundle --format=esm --outfile=drawdata/static/scatter_widget.js js/scatter_widget.js
```

Or use `make js` for watch mode during development.
