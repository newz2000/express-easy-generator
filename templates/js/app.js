var app = require('express-easy')();
var routes = require('./routes');

app.addRoute.get('/', routes.home);
app.addRoute.get('/data', routes.data);

app.enableRouting('/');
module.exports = app;