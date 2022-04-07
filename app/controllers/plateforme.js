const { Plateforme } = require('../models');

module.exports = {
  get: async (req, res, next) => {
    try {
      const dbRes = await Plateforme.findAll();

      res.status(200).json(dbRes);
    } catch (error) {
      next(error);
    }
  }
};
