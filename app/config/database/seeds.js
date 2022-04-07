module.exports = ({ Fournisseur, IGE, Plateforme, Site, Panne, Contrat, Equipement, Technicien }) => () => Promise.all([
  Fournisseur.create({
    id: "123",
    nom: "test fournisseur",
    email: "fournisseur@email.com",
    adresse: "chez le fournisseur",
  }),
  IGE.create({
    id: "123456789ABCDEF",
    nom: "nom de l'IGE",
    prenom: "prenom de l'IGE",
    telephone: "0550505050"
  }),
  Plateforme.create({
    id: "12345",
    nom: "nom de plateforme"
  }),
  Site.create({
    id: "12345",
    nom: "nom du site"
  }),
  Panne.create({
    id: "123456789A",
    message_erreur: "ceci est un message erreur",
    type: "le type de la panne",
    nom_logiciel: "un logiciel"
  }),
])
.then(([fournisseur, ige, plateforme, site, panne]) => Promise.all([
  Contrat.create({
    reference: "123456789A",
    id_fournisseur: fournisseur.id,
    id_plateforme: plateforme.id
  }),
  Equipement.create({
    num_serie: "123456789ABCDEF",
    FRU: "FRU-test",
    nom: "nom de l'equipement",
    severite: "2",
    id_plateforme: plateforme.id,
    id_site: site.id
  }),
  Technicien.create({
    id: "123",
    nom: "tech",
    prenom: "bon",
    telephone: "0660606060",
    email: "technicien@email.com",
    id_fournisseur: fournisseur.id
  }),
]));