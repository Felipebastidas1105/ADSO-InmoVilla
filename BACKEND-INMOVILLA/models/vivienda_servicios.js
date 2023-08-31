'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vivienda_servicios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  vivienda_servicios.init({
    FKCodigo_Vivienda: DataTypes.INTEGER,
    FKId_Servicios: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'vivienda_servicios',
  });
  return vivienda_servicios;
};