'use strict';
const {
  Model
} = require('sequelize');
const contrato = require('./Contract');
const solicitud_contrato = require('./solicitud_contrato');
module.exports = (sequelize, DataTypes) => {
  class jointTenant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // contrato_coarendatarios.belongsTo(models.coarrendatario);
      // coarrendatario.hasMany(contrato_coarendatarios);

      // solicitud_contrato_coarrendatarios.belongsTo(models.coarrendatarios);
      // coarrendatarios.hasMany(solicitud_contrato_coarrendatarios)
    }
  }
  jointTenant.init({
    Cedula: DataTypes.INTEGER,
    Nombre: DataTypes.STRING,
    Fecha_Nac: DataTypes.DATE,
    Telefono: DataTypes.STRING,
    Email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'jointTenant',
  });
  return jointTenant;
};