const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');


const server = new ApolloServer({
    typeDefs,
    mocks: true,
  });


  
server.listen().then(() => {
    console.log(`
      🚀  Server is running!
      🔉  Listening on port 3000
      📭  Query at http://localhost:3000
  `);
});
