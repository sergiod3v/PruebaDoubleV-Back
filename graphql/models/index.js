const { Sequelize } = require("sequelize");
const TicketModel = require("./Ticket");

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "postgres",
  port: 5432,
  username: "root",
  password: "root",
  database: "tickets",
});

const Ticket = TicketModel(sequelize);

module.exports = { sequelize, Ticket };
