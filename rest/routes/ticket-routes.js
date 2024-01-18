const express = require("express");
const TicketController = require("../controllers/ticket-controller");

const router = express.Router();
// "/tickets"
router.post("/", TicketController.createTicket);
router.get("/", TicketController.getTickets);
router.get("/:id", TicketController.getTicketById);
router.put("/:id", TicketController.updateTicket);
router.delete("/:id", TicketController.deleteTicket);

module.exports = router;
