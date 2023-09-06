'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tenant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // solicitud_contratos.belongsTo(models.inquilinos);
      // inquilinos.hasMany(solicitud_contratos);
    }
  }
  Tenant.init({
    Cedula: DataTypes.INTEGER,
    Nombre: DataTypes.STRING,
    Fecha_Nac: DataTypes.DATE,
    Telefono: DataTypes.STRING,
    Email: DataTypes.STRING,
    Estado: DataTypes.STRING,
    Direccion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tenant',
  });
  return Tenant;
};