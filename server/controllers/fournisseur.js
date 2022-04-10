const { Fournisseur } = require('../models');

module.exports = {
  get: async (req, res, next) => {
    try {
      const dbRes = await Fournisseur.findAll();

      res.status(200).json(dbRes);
    } catch (error) {
      next(error);
    }
  },
  post: async (req, res, next) => {
    try {
      const dbRes = await Fournisseur.create(req.body);

      res.status(201).json(dbRes);
    } catch (error) {
      next(error);
    }
  },
};
