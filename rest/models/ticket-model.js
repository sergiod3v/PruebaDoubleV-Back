// models/ticketmodel.js

const db = require("../db/db");

class TicketModel {
  async createTicket(user, status) {
    const result = await db.query(
      "INSERT INTO tickets (user, status) VALUES ($1, $2) RETURNING *",
      [user, status]
    );
    return result.rows[0];
  }

  async getTickets(page, limit) {
    const offset = (page - 1) * limit;
    const result = await db.query(
      "SELECT * FROM tickets ORDER BY id LIMIT $1 OFFSET $2",
      [limit, offset]
    );
    return result.rows;
  }

  async getTicketById(id) {
    const result = await db.query("SELECT * FROM tickets WHERE id = $1", [id]);
    return result.rows[0];
  }

  async updateTicket(id, user, status) {
    const result = await db.query(
      "UPDATE tickets SET user = $1, status = $2, updated_at = NOW() WHERE id = $3 RETURNING *",
      [user, status, id]
    );
    return result.rows[0];
  }

  async deleteTicket(id) {
    const result = await db.query(
      "DELETE FROM tickets WHERE id = $1 RETURNING *",
      [id]
    );
    return result.rows[0];
  }
}

module.exports = new TicketModel();
