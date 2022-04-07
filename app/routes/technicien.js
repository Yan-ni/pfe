const express = require('express');
const controllers = require('../controllers');

const route = express.Router();

route.get('/', controllers.technicien.get);
route.post('/', controllers.technicien.post);

module.exports = route;
