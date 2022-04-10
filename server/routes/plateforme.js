const express = require('express');
const controllers = require('../controllers');

const route = express.Router();

route.get('/', controllers.plateforme.get);
route.post('/', controllers.plateforme.post);

module.exports = route;
