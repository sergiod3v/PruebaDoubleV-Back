// controllers/ticketcontroller.js

const TicketModel = require("../models/ticket-model");

class TicketController {
  async createTicket(req, res) {
    try {
      const { user, status } = req.body;
      const result = await TicketModel.createTicket(user, status);
      res.json(result);
    } catch (error) {
      console.error("Error creating ticket", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getTickets(req, res) {
    try {
      const { page = 1, limit = 10 } = req.query;
      const result = await TicketModel.getTickets(page, limit);
      res.json(result);
    } catch (error) {
      console.error("Error retrieving tickets", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getTicketById(req, res) {
    try {
      const { id } = req.params;
      const result = await TicketModel.getTicketById(id);
      if (result) {
        res.json(result);
      } else {
        res.status(404).json({ error: "Ticket not found" });
      }
    } catch (error) {
      console.error("Error retrieving ticket", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateTicket(req, res) {
    try {
      const { id } = req.params;
      const { user, status } = req.body;
      const result = await TicketModel.updateTicket(id, user, status);
      if (result) {
        res.json(result);
      } else {
        res.status(404).json({ error: "Ticket not found" });
      }
    } catch (error) {
      console.error("Error updating ticket", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteTicket(req, res) {
    try {
      const { id } = req.params;
      const result = await TicketModel.deleteTicket(id);
      if (result) {
        res.json({ message: "Ticket deleted successfully" });
      } else {
        res.status(404).json({ error: "Ticket not found" });
      }
    } catch (error) {
      console.error("Error deleting ticket", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = new TicketController();
