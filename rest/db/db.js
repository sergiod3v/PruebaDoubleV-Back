// db/db.js

const { Pool } = require("pg");

const pool = new Pool({
  user: "root",
  host: "root",
  database: "tickets",
  password: "root",
  port: 5432,
});

module.exports = pool;
