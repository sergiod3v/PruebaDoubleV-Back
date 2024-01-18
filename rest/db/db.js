// db/db.js

const { Pool } = require("pg");
const fs = require("fs");
const path = require("path");

const pool = new Pool({
  user: "root",
  host: "root",
  database: "tickets",
  password: "root",
  port: 5432,
});

module.exports = pool;
