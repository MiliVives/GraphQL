// schema.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Character {
    name: String!
    movie: String!
  }

  type Query {
    characters: [Character]
    character(name: String!): Character
  }

  type Mutation {
    addCharacter(name: String!, movie: String!): Character
    updateCharacter(name: String!, movie: String!): Character
    deleteCharacter(name: String!): Boolean
  }
`;

module.exports = typeDefs;
