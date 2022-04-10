module.exports = (sequelize, DataTypes) => {
  const Technicien = sequelize.define('Technicien', {
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true,
    },
    nom: {
      type: DataTypes.STRING(30),
    },
    prenom: {
      type: DataTypes.STRING(30),
    },
    telephone: {
      type: DataTypes.STRING(10),
    },
    email: {
      type: DataTypes.STRING(50),
    },
  });

  Technicien.associate = (models) => {
    Technicien.belongsTo(models.Fournisseur, { foreignKey: 'id_fournisseur' });
  };

  return Technicien;
};
