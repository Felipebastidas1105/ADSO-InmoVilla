'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('contrato_dueños', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Codigo_Contratro_Dueño: {
        type: Sequelize.INTEGER
      },
      Precio: {
        type: Sequelize.DOUBLE
      },
      Fecha_Fin: {
        type: Sequelize.DATE
      },
      Fecha_Inicio: {
        type: Sequelize.DATE
      },
      Estado_Contrato: {
        type: Sequelize.STRING
      },
      Fecha_Pago: {
        type: Sequelize.DATE
      },
      Vigencia: {
        type: Sequelize.DATE
      },
      FKCedula_Dueño: {
        type: Sequelize.INTEGER
      },
      FKCodigo_Contrato: {
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
    await queryInterface.dropTable('contrato_dueños');
  }
};