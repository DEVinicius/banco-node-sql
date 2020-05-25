const Express = require('express');

const UserController = require('./controllers/UserController');
const AdressController = require('./controllers/AdressController');

const routes = Express.Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.show);

routes.post('/users/:user_id/adresses', AdressController.store);
routes.get('/users/:user_id/adresses', AdressController.showOne);
routes.get('/users/adresses', AdressController.show);
module.exports = routes;