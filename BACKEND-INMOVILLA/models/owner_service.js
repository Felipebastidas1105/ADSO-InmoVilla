'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OwnerService extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OwnerService.init({
    FKCodigo_Contrato: DataTypes.INTEGER,
    FKId_Servicios: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OwnerService',
  });
  return OwnerService;
};