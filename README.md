node-search
==========

Quick tool for search in [Node API docs](http://nodejs.org/api/) from command line, built with nodejs.

## Install
```bash
npm install -g node-search
```
## Usage
```bash
nodeapi [options] [command] <query>
```
### Commands:
* `open` opens the first search result in the browser. If open is not specified, results are listed.

### Options
* `-o`, `--open` same as `nodeapi open`.
* `-p`, `--page` result's page. Defaults to 1.
* `-l`, `--limit` results per page. Defaults to 5.
* `-v`, `--verbose` If set, shows a fragment of the result descriptions.

## Examples
List a few results:
```bash
nodeapi fs read
```
With description
```bash
nodeapi -v fs
```
Open the first result:
```bash
nodeapi open buffer
```
