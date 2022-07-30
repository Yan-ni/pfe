const { Employe } = require('../models');
const bcrypt = require("bcrypt");

module.exports = {
  register: 
     async (req, res) => {
    const { nom, prenom, motDePasse, confirmationMDP, admin, isApproved } = req.body;
    if(!nom || !prenom || !motDePasse || !confirmationMDP){
      res.status(400).json( {error: "veuillez remplir tous les champs"} )
      return;
    }

    if(motDePasse!==confirmationMDP){
      res.status(400).json({ error: "les mots de passes ne sont pas identiques" });
      return;
    }
    bcrypt.hash(motDePasse, 10).then((hash) => {
      Employe.create({
        nom: nom,
        prenom: prenom,
        motDePasse: hash,
        admin: admin,
        isApproved: isApproved
      })
        .then(() => {
          res.status(200).json("votre demande d'enregistrement est en cour de traitement veuillez attendre l'approbation de l'admin");
        })
        .catch((err) => {
          console.log(err);
            res.status(400).json({ error: err });
        });
    });
    }
}