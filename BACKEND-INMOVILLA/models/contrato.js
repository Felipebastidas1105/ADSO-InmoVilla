'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contrato extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      contrato_servicios.belongsTo(models.contratos);
      contratos.hasMany(contrato_servicios)

      contrato_dueños.belongsTo(models.contratos);
      contratos.hasMany(contrato_dueños)
      
      solicitud_contratos.belongsTo(models.contratos);
      contratos.hasMany(solicitud_contratos)

      pago_arriendos.belongsTo(models.contratos);
      contratos.hasMany(pago_arriendos);

      contrato_coarrendatarios.belongsTo(models.contratos);
      contratos.hasMany(contrato_coarrendatarios)
    }
  }
  contrato.init({
    Cedula: DataTypes.INTEGER,
    Nombre: DataTypes.STRING,
    Fecha_Nac: DataTypes.DATE,
    Telefono: DataTypes.STRING,
    Email: DataTypes.STRING,
    Fecha_Pago: DataTypes.DATE,
    Estado_Contrato: DataTypes.STRING,
    Servicios_Incluidos: DataTypes.STRING,
    FKCodigo_Vivienda: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'contrato',
  });
  return contrato;
};