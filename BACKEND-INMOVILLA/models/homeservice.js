'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HomeService extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HomeService.init({
    ServiceId: DataTypes.INTEGER,
    HomeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'HomeService',
  });
  return HomeService;
};