'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contractJointTenant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  contractJointTenant.init({
    contractId: DataTypes.INTEGER,
    jointTenant: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'contractJointTenant',
  });
  return contractJointTenant;
};