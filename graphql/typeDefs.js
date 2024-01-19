const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID!
    user: String!
    status: Status!
    createdAt: String!
    updatedAt: String!
  }

  enum Status {
    OPEN
    CLOSED
  }

  type Query {
    getUser(id: ID!): User
    getUsers: [User]
  }

  type Mutation {
    createUser(user: String!, status: Status): User
    updateUser(id: ID!, user: String, status: Status): User
    deleteUser(id: ID!): User
  }
`;
module.exports = typeDefs;
