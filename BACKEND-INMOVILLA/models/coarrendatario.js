'use strict';
const {
  Model
} = require('sequelize');
const contrato = require('./contrato');
const solicitud_contrato = require('./solicitud_contrato');
module.exports = (sequelize, DataTypes) => {
  class coarrendatario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      contrato_coarendatarios.belongsTo(models.coarrendatarios);
      coarrendatarios.hasMany(contrato_coarendatarios);

      solicitud_contrato_coarrendatarios.belongsTo(models.coarrendatarios);
      coarrendatarios.hasMany(solicitud_contrato_coarrendatarios)
    }
  }
  coarrendatario.init({
    Cedula: DataTypes.INTEGER,
    Nombre: DataTypes.STRING,
    Fecha_Nac: DataTypes.DATE,
    Telefono: DataTypes.STRING,
    Email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'coarrendatario',
  });
  return coarrendatario;
};