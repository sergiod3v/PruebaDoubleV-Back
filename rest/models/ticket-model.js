const { Model, DataTypes, Sequelize } = require("sequelize");

const TICKET_TABLE = "tickets";

class Ticket extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: TICKET_TABLE,
      modelName: "Ticket",
      timestamps: true,
      updatedAt: "updated_at",
      createdAt: "created_at",
    };
  }
}

const TicketSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field: "id",
  },
  user: {
    allowNull: false,
    type: DataTypes.TEXT,
    field: "user",
  },
  status: {
    allowNull: false,
    type: DataTypes.ENUM("open", "closed"),
    field: "status",
  },
  created_at: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    field: "created_at",
  },
  updated_at: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    field: "updated_at",
  },
};

module.exports = { Ticket, TicketSchema };
