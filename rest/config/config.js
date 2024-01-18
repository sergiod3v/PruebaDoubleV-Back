require("dotenv").config();

const config = {
  env: process.env.NODE_ENV || "dev",
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER || "root",
  dbPassword: process.env.DB_PASSWORD || "root",
  dbHost: process.env.DB_HOST || "postgres",
  dbName: process.env.DB_NAME || "tickets",
  dbPort: process.env.DB_PORT || "5432",
};

module.exports = { config };
