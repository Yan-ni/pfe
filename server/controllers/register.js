const { Employe } = require('../models');
const bcrypt = require("bcrypt");

module.exports = {
  register: 
     async (req, res) => {
    const { nom, prenom, motDePasse, admin } = req.body;
    bcrypt.hash(motDePasse, 10).then((hash) => {
      Employe.create({
        nom: nom,
        prenom: prenom,
        motDePasse: hash,
        admin: admin
      })
        .then(() => {
          res.json("employe enregistré");
        })
        .catch((err) => {
          if (err) {
            res.status(400).json({ error: err });
          }
        });
    });
    }
}