const express = require('express');
const controllers = require('../controllers');

const route = express.Router();

route.get('/', controllers.fournisseur.get);
route.post('/', controllers.fournisseur.post);

module.exports = route;
