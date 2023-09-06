'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Homes', {
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
        type: Sequelize.STRING
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
        type: Sequelize.STRING
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
        type: Sequelize.STRING
      },
      Precio_Venta: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Homes');
  }
};