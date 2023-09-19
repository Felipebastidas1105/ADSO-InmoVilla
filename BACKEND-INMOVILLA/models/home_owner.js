'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class home_owner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  home_owner.init({
    ownerId: DataTypes.INTEGER,
    homeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'home_owner',
  });
  return home_owner;
};