.PHONY: js js-scatter js-bar js-all css docs

install:
	# install the build tool for JS written in Golang
	curl -fsSL https://esbuild.github.io/dl/v0.19.11 | sh
	npm install
	uv pip install -e .
	uv pip install marimo

pypi:
	uv build
	uv publish

js:
	./esbuild --watch=forever --bundle --format=esm --outfile=drawdata/static/scatter_widget.js js/scatter_widget.js

js-scatter:
	./esbuild --watch=forever --bundle --format=esm --jsx=automatic --outfile=drawdata/static/scatter_widget.js js/scatter_widget.jsx

js-bar:
	./esbuild --watch=forever --bundle --format=esm --jsx=automatic --outfile=drawdata/static/bar_widget.js js/bar_widget.jsx

css:
	npx tailwindcss -i js/styles.css -o drawdata/static/widget.css --minify

js-all: css
	./esbuild --bundle --format=esm --jsx=automatic --minify --outfile=drawdata/static/scatter_widget.js js/scatter_widget.jsx
	./esbuild --bundle --format=esm --jsx=automatic --minify --outfile=drawdata/static/bar_widget.js js/bar_widget.jsx

clean:
	rm -rf .ipynb_checkpoints build dist drawdata.egg-info node_modules


docs:
	marimo export html-wasm --output docs --mode edit demo.py
