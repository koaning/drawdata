.PHONY: js

install: 
	# install the build tool for JS written in Golang
	curl -fsSL https://esbuild.github.io/dl/v0.19.11 | sh
	python -m pip install -e .
	python -m pip install twine wheel

pypi:
	python setup.py sdist
	python setup.py bdist_wheel --universal
	twine upload dist/*

js:
	./esbuild --watch=forever --bundle --format=esm --outfile=drawdata/static/scatter_widget.js js/scatter_widget.js