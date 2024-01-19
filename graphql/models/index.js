const { Sequelize } = require("sequelize");
const UserModel = require("./User");

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "postgres",
  port: 5432,
  username: "root",
  password: "root",
  database: "tickets",
});

const User = UserModel(sequelize);

module.exports = { sequelize, User };
