// db/db.js

const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "tickets",
  password: "password",
  port: 5432,
});

module.exports = pool;
