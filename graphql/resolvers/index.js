const { User } = require("../models");

const resolvers = {
  Query: {
    getUser: async (_, { id }) => await User.findByPk(id),
    getUsers: async () => await User.findAll(),
  },
  Mutation: {
    createUser: async (_, { name, email }) =>
      await User.create({ name, email }),
    updateUser: async (_, { id, name, email }) => {
      await User.update({ name, email }, { where: { id } });
      return await User.findByPk(id);
    },
    deleteUser: async (_, { id }) => {
      const user = await User.findByPk(id);
      await User.destroy({ where: { id } });
      return user;
    },
  },
};

module.exports = resolvers;
