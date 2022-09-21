const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const express = require('express');


const server = new ApolloServer({
    typeDefs,
    mocks: true,
  });


  
server.listen().then(() => {
    console.log(`
      🚀  Server is running!
      🔉  Listening on port 4000
      📭  Query at http://localhost:4000
  `);
});
