const express = require("express");
const TicketController = require("../controllers/ticket-controller");

const router = express.Router();

router.post("/tickets", TicketController.createTicket);
router.get("/tickets", TicketController.getTickets);
router.get("/tickets/:id", TicketController.getTicketById);
router.put("/tickets/:id", TicketController.updateTicket);
router.delete("/tickets/:id", TicketController.deleteTicket);

module.exports = router;
