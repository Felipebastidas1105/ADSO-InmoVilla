'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contract_jointTenant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  contract_jointTenant.init({
    contractId: DataTypes.INTEGER,
    jointTenant: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'contract_jointTenant',
  });
  return contract_jointTenant;
};