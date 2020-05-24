const Express = require('express');
const routes = require('./routes');

require('./database')
const app = Express();

app.use(Express.json());
app.use(routes);
app.listen(3001);