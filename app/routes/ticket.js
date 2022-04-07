const express = require('express');
const controllers = require('../controllers');

const route = express.Router();

route.get('/', controllers.ticket.get);

module.exports = route;
