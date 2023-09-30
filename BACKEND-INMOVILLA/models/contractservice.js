'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContractService extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ContractService.init({
    typeHousingId: DataTypes.INTEGER,
    typeTargetId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ContractService',
  });
  return ContractService;
};