'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Contracts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Fecha_Ini: {
        type: Sequelize.DATE
      },
      Fecha_Fin: {
        type: Sequelize.DATE
      },
      Vigencia: {
        type: Sequelize.DATE
      },
      Precio:{
        type: Sequelize.STRING
      },
      Fecha_Pago: {
        type: Sequelize.DATE
      },
      Estado_Contrato: {
        type: Sequelize.STRING
      },
      Servicios_Incluidos: {
        type: Sequelize.STRING
      },
      Cantidad_Habitantes:{
        type: Sequelize.STRING
      },
      HomeId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:{
            tableName:"Homes",
            key:"id",
          }
        }
      },
      OwnerContractId: {
         type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:{
            tableName:"owner_contracts",
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
    await queryInterface.dropTable('Contracts');
  }
};