const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();

require('dotenv').config();

// middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

const routes = require('./routes');

app.use('/api', routes);

// error handler middlewares
const errorHandler = require('./middlewares/errorHandler');

app.use(errorHandler);

const { sequelize } = require('./models');

app.startDatabase = async () => {
  // if force is set to true the database will create all tables all over again
  await sequelize.sync({ force: false });
  if (process.env.NODE_ENV === 'development' && !fs.existsSync(path.join(__dirname, '..', 'database.sqlite')))
  {
    await sequelize.seed();
  } else if (process.env.NODE_ENV === 'test') {
    await sequelize.seed();
  }
  await sequelize.authenticate();
};

module.exports = app;
