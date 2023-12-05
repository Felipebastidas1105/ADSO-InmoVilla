'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Home extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Home.belongsTo(models.Agent);
      models.Agent.hasMany(Home);

      Home.belongsToMany(models.Owner,{
        through: "home_owner",
        as:'Agents'
      })

      Home.belongsToMany(models.Service,{
        through: "HomeService",
        as:"Services"
      })

      Home.belongsTo(models.Typehousing);
      models.Typehousing.hasMany(Home);

      Home.belongsTo(models.Typetarget);
      models.Typetarget.hasMany(Home);

      Home.belongsTo(models.Agent);
      models.Agent.hasMany(Home);
    }
  }
  Home.init({
    Codigo_Vivienda: DataTypes.INTEGER,
    Direccion: DataTypes.STRING,
    Latitud: DataTypes.DOUBLE,
    Longitud: DataTypes.DOUBLE,
    Cant_Cuartos: DataTypes.STRING,
    Caracteristicas_Extra: DataTypes.STRING,
    Tiene_Servicios_Incluidos: DataTypes.STRING,
    Area_Inmueble: DataTypes.STRING,
    Precio: DataTypes.DOUBLE,
    Descripcion: DataTypes.STRING,
    // Imagen:DataTypes.JSONB,
    Imagen:DataTypes.JSONB,
    Tiene_Garaje_Moto: DataTypes.STRING,
    Tiene_Garaje_Carro: DataTypes.STRING,
    Tiene_Patio: DataTypes.STRING,
    Cant_Baños: DataTypes.STRING,
    Precio_Venta: DataTypes.STRING,
    AgentId: DataTypes.INTEGER,
    TypehousingId: DataTypes.INTEGER,
    TypetargetId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Home',
  });
  return Home;
};