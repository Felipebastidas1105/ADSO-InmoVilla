'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jointtenant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Jointtenant.belongsToMany(models.ContractRequest,{
        through:"RequestContract_jointTenant",
        as:"ContractRequest"
      })

      Jointtenant.belongsToMany(models.Contract,{
        through:"contractJointTenant",
        as:"contracts"
      })
      // define association here
      // contrato_coarendatarios.belongsTo(models.coarrendatario);
      // coarrendatario.hasMany(contrato_coarendatarios);

      // solicitud_contrato_coarrendatarios.belongsTo(models.coarrendatarios);
      // coarrendatarios.hasMany(solicitud_contrato_coarrendatarios)
    }
  }
  Jointtenant.init({
    Cedula: DataTypes.INTEGER,
    Nombre: DataTypes.STRING,
    Fecha_Nac: DataTypes.DATE,
    Telefono: DataTypes.STRING,
    Email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Jointtenant',
  });
  return Jointtenant;
};