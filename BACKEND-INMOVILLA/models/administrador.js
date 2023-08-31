'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class administrador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  administrador.init({
    Id_Admin: DataTypes.INTEGER,
    Nombre_Admin: DataTypes.STRING,
    Email_Admin: DataTypes.STRING,
    Telefono_Admin: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'administrador',
  });
  return administrador;
};