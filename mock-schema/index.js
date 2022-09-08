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
const fs  = require('fs');
const noSchema = require('./Tests/no-schema');
const hasSchema = require('./Tests/has-schema');

const input = cli.input;
const flags = cli.flags;
const path = ('./client/schema.js');
const { clear, debug } = flags;

// invokes cli checks if user needs help 
(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	debug && log(flags);
})();

// checks if schema.js already exists, directs user appropriately
(async () => {
  input.includes(`create-schema`);
  if (fs.existsSync(path)) {
    // if file exists directs user to hasSchema
    fs.readFile(hasSchema, (err, data) => {
	// this is just a placeholder will come up with a good callback function later
      console.log(data);
    });
  } else {
    // else directs user to noSchema
    fs.readFile(noSchema, (err, data) => {
	// this is just a placeholder will come up with a good callback function later
	console.log(data);
    })
  }
});

//No Schema:
//Invoke CLI
//check for Schema.js
//if true, pass to schema.js
//else, pass to no-schema.js
