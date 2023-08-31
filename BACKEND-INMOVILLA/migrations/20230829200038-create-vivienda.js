'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('viviendas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Codigo_Vivienda: {
        type: Sequelize.INTEGER
      },
      Ubicacion: {
        type: Sequelize.STRING
      },
      Cant_Cuartos: {
        type: Sequelize.INTEGER
      },
      Caracteristicas_Extra: {
        type: Sequelize.STRING
      },
      Tiene_Servicios_Incluidos: {
        type: Sequelize.STRING
      },
      Tipo_Objeto: {
        type: Sequelize.STRING
      },
      Area_Inmueble: {
        type: Sequelize.DOUBLE
      },
      Precio: {
        type: Sequelize.DOUBLE
      },
      Descripcion: {
        type: Sequelize.STRING
      },
      Tiene_Garaje_Moto: {
        type: Sequelize.STRING
      },
      Tipo_Vivienda: {
        type: Sequelize.STRING
      },
      Tiene_Garaje_Carro: {
        type: Sequelize.STRING
      },
      Tiene_Patio: {
        type: Sequelize.STRING
      },
      Cant_Baños: {
        type: Sequelize.INTEGER
      },
      Precio_Venta: {
        type: Sequelize.DOUBLE
      },
      FKId_Agente: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('viviendas');
  }
};