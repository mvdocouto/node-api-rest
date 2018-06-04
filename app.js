const httpContext = require('express-http-context');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const controllerRegister = require('./controllers');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();

// Access-Control-Allow-Origin CORS header
app.use(
    cors({ origin: '*' })
);

// available under the req.body property
app.use(bodyParser.json());
app.use(httpContext.middleware);

// Configuring the database
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(config.db.url)
.then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

// add controller in app
controllerRegister(app);

module.exports = app;


