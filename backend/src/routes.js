const { Router } = require('express');

const OrdersController = require('./controllers/OrdersController');

const routes = Router();

routes.get('/', (request, response) => {
  response.json({
    title: 'API Test RTB',
    author: 'Lucas Farias',
    github: 'http://github.com/lucasnfarias',
  });
});

routes.get('/orders', OrdersController.index);

module.exports = routes;