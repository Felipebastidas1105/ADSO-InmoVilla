'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContractRequest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      ContractRequest.belongsToMany(models.Jointtenant,{
      through:"RequestContract_jointTenant",
      as:"Jointtenants"
     })
      // define association here
      // solicitud_contrato_coarrendatarios.belongsTo(models.solicitud_contratos);
      // solicitud_contratos.hasMany(solicitud_contrato_coarrendatarios)
    }
  }
  ContractRequest.init({
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
    modelName: 'ContractRequest',
  });
  return ContractRequest;
};