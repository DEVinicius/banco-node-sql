const Express = require('express');

const UserController = require('./controllers/UserController');
const AdressController = require('./controllers/AdressController');
const TechController = require('./controllers/TechController');
const routes = Express.Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.show);

routes.post('/users/:user_id/adresses', AdressController.store);
routes.get('/users/:user_id/adresses', AdressController.showOne);
routes.get('/users/adresses', AdressController.show);


routes.post('/users/:user_id/techs', TechController.store);
routes.get('/users/:user_id/techs', TechController.show);
routes.delete('/users/:user_id/techs', TechController.delete); 
module.exports = routes;