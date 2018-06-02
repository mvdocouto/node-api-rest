const httpContext = require('express-http-context');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const controllerRegister = require('./controllers');

const app = express();

// Access-Control-Allow-Origin CORS header
app.use(
    cors({ origin: '*' })
);

// available under the req.body property
app.use(bodyParser.json());
app.use(httpContext.middleware);

// add controller in app
controllerRegister(app);

module.exports = app;


