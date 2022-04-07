const express = require('express');
const controllers = require('../controllers');

const route = express.Router();

route.get('/', controllers.plateforme.get);

module.exports = route;