const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: String!
    "The track's title"
    title: String
    "The track's main Author"
    author: Author!
    "The track's illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: String
    "The number of modules this track contains"
    modulesCount: String
  }

  "Author of a complete Track or a Module"
  type Author {
    id: String
    "Author's first and last name"
    name: String!
    "Author's profile picture"
    photo: String
  }
`;

module.exports = typeDefs;
