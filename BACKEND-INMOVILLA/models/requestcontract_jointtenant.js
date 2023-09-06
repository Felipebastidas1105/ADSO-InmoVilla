'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RequestContract_jointTenant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RequestContract_jointTenant.init({
    requestContractId: DataTypes.INTEGER,
    jointTenantId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RequestContract_jointTenant',
  });
  return RequestContract_jointTenant;
};