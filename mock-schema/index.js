#!/usr/bin/env node

/**
 * Mock-Schema
 * Create mock schema based off of desired query for Apollo GraphQL
 *
 * @author Apollo's Library <https://github.com/oslabs-beta/apollos_library>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	debug && log(flags);
})();

//No Schema:
//Invoke CLI
//check for Schema.js
//if true, pass to schema.js
//else, pass to no-schema.js
