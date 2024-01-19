const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Ticket {
    id: ID
    user: String
    status: Status
    createdAt: String
    updatedAt: String
  }

  enum Status {
    open
    closed
  }

  type Query {
    getTicket(id: ID!): Ticket
    getTickets(limit: Int, offset: Int, user: String, status: Status): [Ticket]
  }

  type Mutation {
    createTicket(user: String!, status: Status): Ticket
    updateTicket(id: ID!, user: String, status: Status): Ticket
    deleteTicket(id: ID!): Ticket
  }
`;

module.exports = typeDefs;
