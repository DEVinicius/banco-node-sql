const Express = require('express');
const UserController = require('./controllers/UserController');

const routes = Express.Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.show);

module.exports = routes;