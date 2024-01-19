const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { sequelize } = require("./models");
const typeDefs = require("./typeDefs.js");
const resolvers = require("./resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

(async () => {
  try {
    // Establish database connection
    await sequelize.authenticate();
    console.log(
      "Connection to the database has been established successfully."
    );

    // Synchronize Sequelize models with the database schema
    await sequelize.sync();
    console.log("Sequelize models synchronized with the database.");

    // Start the Apollo Server
    await server.start();

    // Apply Apollo Server middleware after it has started
    server.applyMiddleware({ app });

    // Start the Express server
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
