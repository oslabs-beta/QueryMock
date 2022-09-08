// what to require in? 
const cli = require('./utils/cli');

// fs.appendFile() = append data to a file. If the file does not exist, it's created

// Schema: 
const hasSchema = async () => {
  let storedQueries = [];
// GRAB COPY OF SCHEMA FILE - may need to create empty file to store copiedSchema if not auto-created
  //copy schema present
  // -may have to add await below
  fs.copyFile('./../client/schema.js', './Tests/copiedSchema.js')
  //display in terminal
  
  // Prompt user to type name of file containing query - stretch goal, try to intuitively find the queries 
  cli.queryFilePrompt()
  // Locate listed file - return error if file not found
  fs.readFile(FILE_LOCATION, function (err, data) {
    if (err) throw err;
    if(data.includes('search string')){
     console.log(data)
    }
    // Locate query by searching for keyword or useQuery hook
  })

  const placeholder = 'Copy of schema file'
  const updateSchema = (storedQueries, placeholder) => {
    // Compare query to already present schema
    // Catch any fields present in query but not in schema 
    // Implement them into the schema by checking formatting of query to present schema
    // if error with updating schema, return error in terminal to user (STRETCH: Potential suggestion on how to fix)
  }
  // Display previous schema and updated schema in terminal - NOTE: make sure it's clear
    // Prompt: would you like to keep updated schema and overwrite previous schema in the schema.js file. Note: You can 
    // Update this manually; however, previous schema data will not be saved. 
    cli.keepUpdatedSchemaPrompt()
      // if updated is kept -> 
        // Look more into https://www.npmjs.com/package/replace-in-file
        // Delete previous schema
        fs.unlink('original schema file')
        // Replace with updated schema 
        fs.rename('copied schema path', 'new schema path (schema.js)', 'function') 
        // Prompt: Schema successfully updated. Reference picture of current schema.
        cli.updatedSchemaPrompt()
      // if updated is not kept -> 
        // Prompt: Are you sure you want to disregard these changes? (Maybe too many prompts to be determined)
        cli.disregardChangesPrompt()
        // Delete updated schema from reference
        fs.unlink('copied file')
        // Prompt: Schema not saved/updated. Reference picture of current schema. 
        cli.savedPrompt()
}


module.exports = hasSchema;