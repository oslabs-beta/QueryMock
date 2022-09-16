const { ReadStream, createReadStream } = require('fs');

const queried = {};

queried.accessQuery = (req, res, next) => {
  console.log('entered accessQuery');
  const { id } = req.body;
  const regex = /\`([^\`]*)\`/gm;
  let foundQuery;
//   console.log('what is id :', id);
    const queryData = createReadStream(id)
//   console.log('what is this :', queryData);
    queryData.on('data', chunk => {
//     console.log('what is a chunk? :', chunk);
      let body = [];
      body.push(chunk);
//     console.log('what is a a body? :', body)
      let buffer = Buffer.concat(body).toString();
      // console.log('what is a buffer? :', buffer);
      foundQuery = buffer.match(regex);
      // console.log('does this work damn it', foundQuery);
      res.locals.query = foundQuery;
      // console.log('does this save to locals? :', res.locals.query);
      return next();
    });
};

/* anticipated schema result: 
  type Class {
    name: String! 
    hit_die: Int!
    spellcasting: ClassSpellcasting
  }
  type ClassSpellcasting {
    spellcasting_ability: AbilityScore!
  }
  type AbilityScore {
    name: String! 
  }
*/
queried.createdSchema = (req, res, next) => {
  console.log('entered createdSchema');
  const noBackticksRegex = /(?:`)/gm;
  // hallelujah
  console.log('does this variable store? : ', res.locals.query);
  const queriedObject = res.locals.query;
  console.log('please tell me this is still a string. : ', typeof queriedObject);
  const stringifiedQueriedObject = queriedObject.toString('');
  console.log('please please please be a string :', stringifiedQueriedObject);
  const noMoreBackticks = stringifiedQueriedObject.replace(noBackticksRegex, '');
  console.log('no more backticks please : ', typeof noMoreBackticks);
//   const objectQuery = JSON.parse(noMoreBackticks);
//   console.log('Is this now an object? : ', objectQuery);
//   res.locals.savedQuery = res.locals.query;
  return next();
};

module.exports = queried;