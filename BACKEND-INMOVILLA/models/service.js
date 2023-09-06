'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // vivienda_servicios.belongsTo(models.servicios);
      // servicios.hasMany(vivienda_servicios);

      // contrato_servicios.belongsTo(models.servicios);
      // servicios.hasMany(contrato_servicios);
    }
  }
  Service.init({
    Id_Servicios: DataTypes.INTEGER,
    Nombre_Servicios: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Service',
  });
  return Service;
};