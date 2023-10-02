'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contract extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      Contract.belongsToMany(models.Jointtenant,{
        through:"contractJointTenants",    
          as:"Jointtenants"
        })

      Contract.belongsToMany(models.Service,{
        through:"ContractServices",
        as:"Services"
      })

      Contract.belongsTo(models.Home);
      models.Home.hasMany(Contract);

      // define association here
      // contrato_servicios.belongsTo(models.contratos);
      // contratos.hasMany(contrato_servicios)

      // contrato_dueños.belongsTo(models.contratos);
      // contratos.hasMany(contrato_dueños)
      
      // solicitud_contratos.belongsTo(models.contratos);
      // contratos.hasMany(solicitud_contratos)

      // pago_arriendos.belongsTo(models.contratos);
      // contratos.hasMany(pago_arriendos);

      // contrato_coarrendatarios.belongsTo(models.contratos);
      // contratos.hasMany(contrato_coarrendatarios)
    }
  }
  Contract.init({
    Fecha_Ini: DataTypes.DATE,
    Fecha_Fin: DataTypes.DATE,
    Vigencia: DataTypes.STRING,
    Cantidad_Habitantes: DataTypes.STRING,
    Precio: DataTypes.STRING,
    Fecha_Pago: DataTypes.DATE,
    Estado_Contrato: DataTypes.STRING,
    Servicios_Incluidos: DataTypes.STRING,
    HomeId: DataTypes.INTEGER,
    OwnerContractId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Contract',
  });
  return Contract;
};