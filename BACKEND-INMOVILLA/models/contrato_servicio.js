'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contrato_servicio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  contrato_servicio.init({
    FKCodigo_Contrato: DataTypes.INTEGER,
    FKId_Servicios: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'contrato_servicio',
  });
  return contrato_servicio;
};