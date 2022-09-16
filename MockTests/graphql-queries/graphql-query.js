// create graphql query here to test with

// what should happen?

// should be able to signal that a query is here with gql command and then should create schema.js file here. 

const { ReadStream, createReadStream } = require('fs');

//const page = fs.readFile('./mock-schema/Tests/no-schema.js');

// const readQuery = () => {
  
// }

const queried = {};

queried.createdSchema = (req, res, next) => {
  console.log('entered createdSchema');
  const { id } = req.body;
  const regex = /\`([^\`]*)\`/gm;
  let foundQuery;
  const queryFile = [];
//   console.log('what is id :', id);
    const queryData = createReadStream(id)
//   console.log('what is this :', queryData);
    queryData.on('data', chunk => {
//     console.log('what is a chunk? :', chunk);
      let body = [];
      body.push(chunk);
//     console.log('what is a a body? :', body)
      let buffer = Buffer.concat(body).toString();
      console.log('what is a buffer? :', buffer);
      foundQuery = buffer.match(regex);
      console.log('does this work damn it', foundQuery);
      res.locals.query = foundQuery;
      console.log('does this save to locals? :', res.locals.query);
      return next();
      // return foundQuery;
      // for (let i = 0; i < buffer.length; i ++) {
      //   queryFile.push(buffer[i]);
      //   // console.log('Is queryFile here? :', queryFile);
      // }
      // console.log('Does queryFile live here? :', queryFile);
      // const stringifiedQuery = queryFile.join('');
      // console.log('Did queryFile become a string? :', typeof stringifiedQuery);
      // const foundQuery = stringifiedQuery.match(regex);
      // console.log('What did we find? :', foundQuery);
    });
//   console.log('what does queryFile look like? :', queryFile);
//   console.log('is the query found? :', foundQuery);
//   res.locals.query = foundQuery;
//   return next(); 
};

// createNewSchema(queryData);
// const regexp = /\`([^\`]*)\`/gm
// const bufferArr = [];
// do {
// console.log('how does a buffer work in a do while loop? :', buffer);
// let match = regexp.exec(buffer);
// console.log('what is a match? :', match);
// if (match != null) {
//     bufferArr.push(match[1] ? match[1] : match[0]);
// }
// } while (match != null);
// console.log('what is a bufferArr? :', bufferArr);
// res.locals.createSchema = bufferArr;

// console.log(readStream)
// const regexp = /`(.?)`/g;
// const bufferArr = [];

// do {
//     let match = regexp.exec(buffer);
//     if (match != null) {
//         bufferArr.push(match[1] ? match[1] : match[0]);
//     }
// } while (match != null);


// let readStream = createReadStream('./graphql-queries/graphql-query.js');
// const body = [];
// const getBuffer = () => {
//   let buffer; 
//   return readStream.on('data', chunk => { 
// //   console.log(data);
// //   console.log(chunk);
//     body.push(chunk);
//     buffer = Buffer.concat(body).toString();
//     console.log('inside getBuffer\'s buffer :', buffer);
//     return buffer;
//   })
// }
// console.log(readStream._readableState.objectMode)

// console.log(getBuffer());

module.exports = queried;