'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('dueños', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Cedula_Dueño: {
        type: Sequelize.INTEGER
      },
      Nombre: {
        type: Sequelize.STRING
      },
      Fecha_Nac_Dueño: {
        type: Sequelize.DATE
      },
      Telefono_Dueño: {
        type: Sequelize.STRING
      },
      Estado_Dueño: {
        type: Sequelize.STRING
      },
      Email_Dueño: {
        type: Sequelize.STRING
      },
      Direccion_Dueño: {
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
    await queryInterface.dropTable('dueños');
  }
};