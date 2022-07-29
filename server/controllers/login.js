const { Employe } = require('../models');
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
  login: async (req, res, next) => {
    try{
    const { nom, prenom, motDePasse } = req.body;
    const employe = await Employe.findOne({ where: { nom: nom , prenom: prenom} });
    if (!employe){ 
      res.status(400).json({ error: "identifiant incorrect" });
      return;
    }
    const motDePasseBD = employe.motDePasse;
    bcrypt.compare(motDePasse, motDePasseBD).then((match) => {
      if (!match) {
        res
          .status(400)
          .json({ error: "mot de passe incorrect" });
      } else {
        const accessToken = sign(
          { nom: employe.nom, prenom: employe.prenom },
          process.env.ACCESS_TOKEN,
          { expiresIn : '7d' }
        ); 
        res.status(200).json({accessToken : accessToken});
      }
    });
  } catch (e) {
    res.status(400).json({
      errorMessage: 'Something went wrong!',
      status: false
    });
  }
  },
}