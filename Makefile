.PHONY: js docs

install:
	# install the build tool for JS written in Golang
	curl -fsSL https://esbuild.github.io/dl/v0.19.11 | sh
	uv pip install -e .
	uv pip install marimo

pypi:
	uv build
	uv publish

js:
	./esbuild --watch=forever --bundle --format=esm --outfile=drawdata/static/scatter_widget.js js/scatter_widget.js

clean:
	rm -rf .ipynb_checkpoints build dist drawdata.egg-info

docs:
	# Clean rebuild, so stale hashed assets don't pile up
	rm -rf docs/assets docs/public
	# Export from a temporary copy of the notebook. Next to the drawdata/ folder,
	# marimo bundles it as a local wheel with only the .py files (no static
	# JS/CSS), which breaks the widgets; this way the page installs drawdata
	# from PyPI.
	tmp=$$(mktemp -d) && cp scatter-demo.py $$tmp/ && \
		uv run --with marimo marimo -y export html-wasm --output docs --mode edit $$tmp/scatter-demo.py
	rm -f docs/CLAUDE.md
