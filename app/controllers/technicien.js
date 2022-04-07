const { Technicien } = require('../models');

module.exports = {
  get: async (req, res, next) => {
    try {
      const dbRes = await Technicien.findAll();

      res.status(200).json(dbRes);
    } catch (error) {
      next(error);
    }
  },
  post: async (req, res, next) => {
    try {
      const dbRes = await Technicien.create(req.body);

      res.status(201).json(dbRes);
    } catch (error) {
      next(error);
    }
  }
};
