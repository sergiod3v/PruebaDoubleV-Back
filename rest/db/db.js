// db/db.js

const { Pool } = require("pg");

const pool = new Pool({
  host: "postgres",
  port: 5432,
  user: "root",
  password: "root",
  database: "tickets",
});

module.exports = pool;
