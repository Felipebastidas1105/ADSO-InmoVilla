'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tenants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Cedula: {
        type: Sequelize.INTEGER
      },
      Nombre: {
        type: Sequelize.STRING
      },
      Fecha_Nac: {
        type: Sequelize.DATE
      },
      Telefono: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      Estado: {
        type: Sequelize.STRING
      },
      Direccion: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Tenants');
  }
};