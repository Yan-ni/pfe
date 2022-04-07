const express = require('express');
const controllers = require('../controllers');

const route = express.Router();

route.get('/', controllers.equipement.get);
route.post('/', controllers.equipement.post);

module.exports = route;
