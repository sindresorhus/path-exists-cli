#!/usr/bin/env node
'use strict';
const meow = require('meow');
const pathExists = require('path-exists');

const cli = meow(`
	Usage
	  $ path-exists <path>

	Example
	  $ path-exists foo && echo "exists" || echo "doesn't exist"
`);

const input = cli.input[0];

if (!input) {
	console.error('Specify a path');
	process.exit(1);
}

process.exit(pathExists.sync(input) ? 0 : 1);
