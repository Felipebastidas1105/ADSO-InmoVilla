'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class solicitud_contrato extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      solicitud_contrato_coarrendatarios.belongsTo(models.solicitud_contratos);
      solicitud_contratos.hasMany(solicitud_contrato_coarrendatarios)
    }
  }
  solicitud_contrato.init({
    Id_Solicitud: DataTypes.INTEGER,
    Codigo_Solicitud: DataTypes.INTEGER,
    Desprendible_Pago1: DataTypes.STRING,
    Desprendible_Pago2: DataTypes.STRING,
    Desprendible_Pago3: DataTypes.STRING,
    Fecha_Solicitud: DataTypes.DATE,
    Estado_Solicitud: DataTypes.STRING,
    Aprobacion_Inquilino: DataTypes.STRING,
    Carta_Laboral: DataTypes.STRING,
    FKCedula_Inquilino: DataTypes.INTEGER,
    FKCodigo_Contrato: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'solicitud_contrato',
  });
  return solicitud_contrato;
};