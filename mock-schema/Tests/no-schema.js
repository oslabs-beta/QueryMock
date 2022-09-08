// what to import/require
// require cli -> prompt in the command line 
const fs = require('fs');
const cli = require('./utils/cli');
const path = ('./client/schema.js');

// fs.appendFile() = append data to a file. If the file does not exist, it's created

//No Schema:
const noSchema = async () => {
  let queriedData; 
  //Create Schema.js file in client folder
    // potentially move this to when the data is created, but this is an async func so up for debate
  //Prompt user to type name of file containing query - stretch goal, try to intuitively find the queries 
  await cli.prompt() // - need to return file location data
  await fs.readFile('cli.prompt\'s data', (err, data) => {
    //Locate listed file 
    //Locate query by searching for keyword or useQuery hook // try catch 
    if (data.word === 'query' || data.word === 'Query' || data.word === 'useQuery') {
      // figure out logic to garner query information
      // NOTE: check to see if we need to iterate through multiple queries or does it stop on first instance of a query
      //If multiple queries found, display list of queries and location of each - numbered list
      //prompt to pick which query they want to use for schema
      queriedData = 'Prompt response or the only query';
    } else {
      cli.noQueryPrompt();
    // Prompt, re-enter filename return error if file not found? - not sure if in here
    }
    return queriedData;
  })
  // might need await here
  const createSchema = (query) => {
    let newSchema;
    // will probably want to console log query
    
    //Take selected query, and create logic to pull information from query into schema - every output automatically set to string
    const makeSchema = (query) => {
      let schemaData;
      //do stuff
      return schemaData;
    }

    newSchema = schemaData;
    //Stretch goal - hardcoded checks for different outputs, such as 'Date' and 'Age' === Number? Int?
    //Display schema and prompt user, like or no like? - remind able to edit
    cli.keepSchemaPrompt();
    //if like, store schema in prev created schema.js file
    fs.appendFile(path, newSchema);
    //if no like, destroy :( - Don't delete Schema.js
    newSchema = null;
  }
};


//Example of Query:

//Example of Mocked Schema based off Query:

module.exports = noSchema;