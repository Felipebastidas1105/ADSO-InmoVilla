'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class agente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      viviendas.belongsTo(models.agentes);
      agentes.hasMany(viviendas)
    
    }
  }
  agente.init({
    Id_Agente: DataTypes.INTEGER,
    Nombre_Agente: DataTypes.STRING,
    Email_Agente: DataTypes.STRING,
    Telefono_Agente: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'agente',
  });
  return agente;
};