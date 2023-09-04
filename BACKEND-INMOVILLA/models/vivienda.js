'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vivienda extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // vivivenda_servicios.belongsTo(models.viviendas);
      // viviendas.hasMany(vivivenda_servicios)

      // vivienda_dueño.belongsTo(models.vivendas);
      // vivendas.hasMany(vivenda_dueño)

      // contratos.belongsTo(models.viviendas);
      // viviendas.hasMany(contratos)
    }
  }
  vivienda.init({
    Codigo_Vivienda: DataTypes.INTEGER,
    Ubicacion: DataTypes.STRING,
    Cant_Cuartos: DataTypes.INTEGER,
    Caracteristicas_Extra: DataTypes.STRING,
    Tiene_Servicios_Incluidos: DataTypes.STRING,
    Tipo_Objeto: DataTypes.STRING,
    Area_Inmueble: DataTypes.DOUBLE,
    Precio: DataTypes.DOUBLE,
    Descripcion: DataTypes.STRING,
    Tiene_Garaje_Moto: DataTypes.STRING,
    Tipo_Vivienda: DataTypes.STRING,
    Tiene_Garaje_Carro: DataTypes.STRING,
    Tiene_Patio: DataTypes.STRING,
    Cant_Baños: DataTypes.INTEGER,
    Precio_Venta: DataTypes.DOUBLE,
    FKId_Agente: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'vivienda',
  });
  return vivienda;
};