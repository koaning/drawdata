.PHONY: js js-scatter js-bar js-all docs

install:
	# install the build tool for JS written in Golang
	curl -fsSL https://esbuild.github.io/dl/v0.19.11 | sh
	npm install
	uv pip install -e .
	uv pip install twine wheel jupyterlab marimo

pypi:
	python setup.py sdist
	python setup.py bdist_wheel --universal
	twine upload dist/*

js:
	./esbuild --watch=forever --bundle --format=esm --outfile=drawdata/static/scatter_widget.js js/scatter_widget.js

js-scatter:
	./esbuild --watch=forever --bundle --format=esm --jsx=automatic --outfile=drawdata/static/scatter_widget.js js/scatter_widget.jsx

js-bar:
	./esbuild --watch=forever --bundle --format=esm --jsx=automatic --outfile=drawdata/static/bar_widget.js js/bar_widget.jsx

js-all:
	./esbuild --bundle --format=esm --jsx=automatic --minify --outfile=drawdata/static/scatter_widget.js js/scatter_widget.jsx
	./esbuild --bundle --format=esm --jsx=automatic --minify --outfile=drawdata/static/bar_widget.js js/bar_widget.jsx

clean:
	rm -rf .ipynb_checkpoints build dist drawdata.egg-info node_modules


docs:
	marimo export html-wasm --output docs --mode edit demo.py
