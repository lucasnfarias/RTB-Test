const listOrders = require('../services/listOrders');

module.exports = {
  async index(request, response) {
    try {
      const orders = await listOrders();

      return response.json({ orders });
    } catch (error) {
      return response.status(500).json({ error });
    }
  },
};