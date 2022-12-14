#!/usr/bin/env node

/**
 * Mock-Schema
 * Create mock schema based off of desired query for Apollo GraphQL
 *
 * @author Apollo's Library <https://github.com/oslabs-beta/apollos_library>
 */

// require readline to connect with the terminal
const readline = require('readline');
// require boxen, chalk for styling purposes
const boxen = require('boxen');
const chalk = require('chalk');
// require fs in order to createReadStream, appendFile, and readFileSync to find file where query is
const { createReadStream, appendFile, readFileSync }  = require('fs');

// createInterface for readline to accept prompts from keyboard
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// styling for boxen
const boxenOptions = {
  padding: 5,
  margin: 5,
  borderStyle: 'double',
  borderColor: 'magenta',
  backgroundColor: 'magenta',
};

function strToSchema(str) {
  // declare empty arr to store brackets
  let arr = [];
  let type;
  let typearr = [];
  let cache = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '{') {
      // making sure not the first bracket
      if (arr.length) {
        let spc = [];
        for (let j = i; j > 0; j--) {
          // declare another arr for whitespace
          if (str[j] === ' ') {
            if (spc.length) {
              type = str.slice(j + 1, i - 1);

              if (cache[type]) {
                continue;
              }
              // console.log(type);
              else {
                typearr.push(type);
                cache[type] = true;
                break;
              }
              
              // console.log(typearr);
            }
            spc.push(str[j]);
          }
        }
      }
      arr.push(str[i]);
    }
  }
  return typearr;
};

function strToArgs(str) {
  // declare empty arr to store brackets
  let arr = [];
  let prop;
  let cache = {};
  let result = [];
  let dig = 0;
  for (let i = 0 ; i < str.length; i++) {
    if (str[i] === '{' && cache[dig-1]) {
      cache[dig] = str.indexOf('{', cache[dig-1] + 1);
      dig++;
    }
    
    if (str[i] === '{' && !cache[dig - 1]) {
      cache[dig] = str.indexOf('{');
      dig++;
    }
    if (str[i] === '}') {
      // console.log(dig)
      cache[dig] = str.indexOf('}');
    }
  }
  // console.log(cache);
  // console.log(str[104])
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let typearr = [];
    let index;
    if (count.toString() === Object.keys(cache).pop()) {
      let stg = [];
      let init;
      for (let i = cache[count-1]; i < cache[count]; i++) {
        if (str[i] === ' ' && stg.length < (count)*2) {
          stg.push(str[i]);
          continue;
        };
        if (stg.length === count * 2 && str[i-1] === ' ') {
          init = i;
          // console.log(init);
        }
        if (str[i] === ' ' && str[i-1] !== ' ') {
          // console.log(init)
          // console.log(i);
          prop = str.slice(init, i-1);
          // console.log(prop);
          typearr.push(prop);
          spc = [];
          spc.push(str[i]);
        }
      }
      break;
    }
    if (str[i] === '{') {
      index = str.indexOf(str[i], count);
      count++;
      // making sure not the first bracket
      if (arr.length) {
        let spc = [];
        let beg;
        for (let j = i; j < cache[count]; j++) {
          if (str[j] === ' ' && spc.length < count * 2) {
            spc.push(str[j]);
            continue;
          };
          if (spc.length === count * 2 && str[j-1] === ' ') {
            beg = j;
            // console.log(beg)
          }
          if (str[j] === ' ' && str[j+1] === '{') {
            prop = str.slice(beg, j);
            typearr.push(prop);
            spc =[];
            spc.push(str[j])
            // console.log(prop);
          }
          if (str[j] === ' ' && str[j+1] !== '{') {
            // console.log(beg)
            // console.log(j);
            prop = str.slice(beg, j-1);
            // console.log(prop);
            typearr.push(prop);
            spc = [];
            spc.push(str[j]);
          }
        }
        // console.log(typearr)
        result.push(typearr);
      }
      arr.push(str[i]);
    }
  }
  return result;
};

function createType(arr, arr1) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let gql = `type ${arr[i]} {
  `
    for (let j = 0; j < arr1[i].length; j++) {
      let add;
      if (j === arr1[i].length - 1) {
        add = `${arr1[i][j]}: String!
`;
        // console.log(add);
        gql = gql.concat(add);
        continue;
      }
      add = `${arr1[i][j]}: String!
  `
      // console.log(add);
      gql = gql.concat(add);
    }
    gql = gql.concat(`}`);
    result.push(gql);
  }
  return result;
}

const findAndShowQuery = () => {
  // regex to find queries from given file
  const regex = /\`([^\`]*)\`/gm;
  let foundQuery;
  let newSchema; 
  // prompt user to enter path where query(s) are stored 
  rl.question('Where is your query stored ? ', function(data){
    // initialize constant with value taken from createReadStream 
    const queryData = createReadStream(data);
    // once the data is collected from the createReadStream parse the information
    queryData.on('data', chunk => {
      let body = [];
      body.push(chunk);
      // buffer the information into a readable string instead of bytes
      let buffer = Buffer.concat(body).toString();
      // parse the query from the string with the regular expression
      foundQuery = buffer.match(regex);
      foundQuery.forEach((el) => {
        // invoke strToSchema to parse type
        const schemaType = strToSchema(el);
        // invoke strToArgs to parse properties
        const schemaProperty = strToArgs(el);
        // invoke createType to get individual parts of the schemas
        const finalSchema = createType(schemaType, schemaProperty);
        // iterate thru finalSchema to produce one cohesive string
        function finalSchemaStr (arr) {
          let bigstr = '';
          for (let i = 0; i < finalSchema.length; i++) {
            bigstr = bigstr.concat(finalSchema[i] + `\n\n`);
          }
          return bigstr;
        }
        // prompt user for the path where they want their schema stored
        rl.question('Please declare the path where you would like your schema stored : ', function(storedSchema){
          newSchema = storedSchema;
          const schemaStr = finalSchemaStr(finalSchema);
          // create or append to file received from user input
          appendFile(newSchema, schemaStr, (err) => {
            if (err) {
              console.log(err);
            } else {
              console.log('file appended');
            }
            // close readline instance
            rl.close();
          })
        })
      })
    })
  })
  // on close confirm the final mock schema with in the console
  rl.on('close', function() {
    const answer = boxen(chalk.italic.bold(`This is your schema file, \n ${readFileSync(newSchema)}`), boxenOptions);
    console.log(answer);
    process.exit(0);
  })
}

// invoke the query when the command is ran in the terminal
findAndShowQuery();
