'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rentpayment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Rentpayment.init({
    Codigo_Pago: DataTypes.INTEGER,
    Soporte_Pago: DataTypes.STRING,
    Medio_Pago: DataTypes.STRING,
    Estado_Pago: DataTypes.STRING,
    Valor_Pago: DataTypes.DOUBLE,
    FKCodigo_Contrato: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Rentpayment',
  });
  return Rentpayment;
};