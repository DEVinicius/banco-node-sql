const Express = require('express');

const UserController = require('./controllers/UserController');
const AdressController = require('./controllers/AdressController');

const routes = Express.Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.show);

routes.post('/users/:user_id/adresses', AdressController.store);
module.exports = routes;