'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Home_service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Home_service.init({
    FKCodigo_Vivienda: DataTypes.INTEGER,
    FKId_Servicios: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Home_service',
  });
  return Home_service;
};