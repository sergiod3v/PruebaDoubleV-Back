const { models } = require("../lib/sequelize");
const { Op } = require("sequelize");

class TicketsService {
  constructor() {}

  async find({ page = 1, pageSize = 10, user, status } = {}) {
    try {
      const offset = (page - 1) * pageSize;
      const whereClause = {};

      if (user) {
        whereClause.user = {
          [Op.iLike]: `%${user}%`, // Case-insensitive substring matching
        };
      }

      if (status) {
        whereClause.status = status;
      }

      const res = await models.Ticket.findAndCountAll({
        where: whereClause,
        limit: pageSize,
        offset: offset,
      });

      return {
        total: res.count,
        page,
        pageSize,
        data: res.rows,
      };
    } catch (error) {
      throw new Error(`Error fetching tickets: ${error.message}`);
    }
  }

  async findOne(id) {
    const res = await models.Ticket.findByPk(id);
    return res;
  }

  async create(data) {
    const res = await models.Ticket.create(data);
    return res;
  }

  async update(id, data) {
    const model = await this.findOne(id);
    const res = await model.update(data);
    return res;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { deleted: true };
  }
}

module.exports = TicketsService;
