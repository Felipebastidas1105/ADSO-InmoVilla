'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rentPayments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Codigo_Pago: {
        type: Sequelize.INTEGER
      },
      Soporte_Pago: {
        type: Sequelize.STRING
      },
      Medio_Pago: {
        type: Sequelize.STRING
      },
      Estado_Pago: {
        type: Sequelize.STRING
      },
      Valor_Pago: {
        type: Sequelize.DOUBLE
      },
      CodigoContratoId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:{
            tableName:"Contracts",
            key:"id"
          }
        }
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
    await queryInterface.dropTable('rentPayments');
  }
};