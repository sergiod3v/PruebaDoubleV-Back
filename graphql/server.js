const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello, GraphQL!",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const PORT = 4000;

server.listen(PORT).then(({ url }) => {
  console.log(`GraphQL server ready at ${url}`);
});
