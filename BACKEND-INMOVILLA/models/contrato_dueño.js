'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contrato_dueño extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  contrato_dueño.init({
    Codigo_Contratro_Dueño: DataTypes.INTEGER,
    Precio: DataTypes.DOUBLE,
    Fecha_Fin: DataTypes.DATE,
    Fecha_Inicio: DataTypes.DATE,
    Estado_Contrato: DataTypes.STRING,
    Fecha_Pago: DataTypes.DATE,
    Vigencia: DataTypes.DATE,
    FKCedula_Dueño: DataTypes.INTEGER,
    FKCodigo_Contrato: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'contrato_dueño',
  });
  return contrato_dueño;
};