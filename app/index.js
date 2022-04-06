const express = require('express');
const morgan = require('morgan');

const app = express();
const { sequelize } = require('./models');

// middlewares
app.use(express.json());
app.use(morgan('dev'));

const routes = require('./routes');

app.use('/api', routes);

// error handler middlewares
const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);

module.exports = app;