// what to require in? 
const cli = require('./utils/cli');

// fs.appendFile() = append data to a file. If the file does not exist, it's created

// Schema: 
// Look for schema.js file 
  // copy schema present and display in terminal
// Prompt user to type name of file containing query - stretch goal, try to intuitively find the queries 
// Locate listed file - return error if file not found
// Locate query by searching for keyword or useQuery hook
// Compare query to already present schema
  // Save current schema before updating
  // Catch any fields present in query but not in schema 
  // Implement them into the schema by checking formatting of query to present schema
    // if error with updating schema, return error in terminal to user (STRETCH: Potential suggestion on how to fix)
  // Display previous schema and updated schema in terminal - NOTE: make sure it's clear
    // Prompt: would you like to keep updated schema and overwrite previous schema in the schema.js file. Note: You can 
    // Update this manually; however, previous schema data will not be saved. 
      // if updated is kept -> 
        // Delete previous schema
        // Replace with updated schema 
        // Prompt: Schema successfully updated. Reference picture of current schema.
      // if updated is not kept -> 
        // Prompt: Are you sure you want to disregard these changes? (Maybe too many prompts to be determined)
        // Delete updated schema from reference
        // Prompt: Schema not saved/updated. Reference picture of current schema. 

module.exports = hasSchema;