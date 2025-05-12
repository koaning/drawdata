.PHONY: js docs

install: 
	# install the build tool for JS written in Golang
	curl -fsSL https://esbuild.github.io/dl/v0.19.11 | sh
	uv pip install -e .
	uv pip install twine wheel jupyterlab marimo

pypi:
	python setup.py sdist
	python setup.py bdist_wheel --universal
	twine upload dist/*

js:
	./esbuild --watch=forever --bundle --format=esm --outfile=drawdata/static/scatter_widget.js js/scatter_widget.js

clean:
	rm -rf .ipynb_checkpoints build dist drawdata.egg-info


docs:
	marimo export html-wasm --output docs --mode edit demo.py
