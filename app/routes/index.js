const express = require('express');
const route = express.Router();

route.get('/', (req, res, next) => {
  res.json({
    message: 'testing api'
  });
});

module.exports = route;