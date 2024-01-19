const { Ticket } = require("../models");

const resolvers = {
  Query: {
    getTicket: async (_, { id }) => await Ticket.findByPk(id),
    getTickets: async (_, { limit, offset, user, status }) => {
      const where = {};
      if (user) {
        where.user = user;
      }
      if (status) {
        where.status = status.toLowerCase(); // Ensure the status is lowercase
      }

      // Use Sequelize's findAndCountAll method for pagination
      const { count, rows } = await Ticket.findAndCountAll({
        limit,
        offset,
        where,
      });

      // Create a custom response object with pagination data
      const response = {
        total: count,
        page: Math.ceil((offset + 1) / limit),
        pageSize: limit,
        data: rows,
      };

      // Return the entire custom response object
      return response;
    },
  },
  Mutation: {
    createTicket: async (_, { user, status }) =>
      await Ticket.create({ user, status }),
    updateTicket: async (_, { id, user, status }) => {
      await Ticket.update({ user, status }, { where: { id } });
      return await Ticket.findByPk(id);
    },
    deleteTicket: async (_, { id }) => {
      const ticket = await Ticket.findByPk(id);
      await Ticket.destroy({ where: { id } });
      return ticket;
    },
  },
};

module.exports = resolvers;
