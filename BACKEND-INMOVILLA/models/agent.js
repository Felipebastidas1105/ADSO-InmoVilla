'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Agent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.viviendas.BelongsTo(models.agente);
      // agente.hasMany(viviendas)
    
    }
  }
  Agent.init({
    Nombre_Agente: DataTypes.STRING,
    Email_Agente: DataTypes.STRING,
    Telefono_Agente: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Agent',
  });
  return Agent;
};