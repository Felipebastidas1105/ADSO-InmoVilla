'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Owner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // vivienda_dueños.belongsTo(models.dueños);
      // dueños.hasMany(vivienda_dueños);
      
      // contrato_dueños.belongsTo(models.dueños);
      // dueños.hasMany(contrato_dueños);
    }
  }
  Owner.init({
    Cedula_Dueño: DataTypes.INTEGER,
    Nombre: DataTypes.STRING,
    Fecha_Nac_Dueño: DataTypes.DATE,
    Telefono_Dueño: DataTypes.STRING,
    Estado_Dueño: DataTypes.STRING,
    Email_Dueño: DataTypes.STRING,
    Direccion_Dueño: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Owner',
  });
  return Owner;
};