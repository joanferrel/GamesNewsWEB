const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  const User = sequelize.define('User', { // Cambié 'Users' a 'User'
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true, // Corregí aquí
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    created:
    {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
  },
  },
  {
    timestamps: false,
  });
  return User;
};