'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('contract_jointTenants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      contractId: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"contracts",
            key:"id"
          }
        }
      },
      jointTenantId: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"Jointtenants",
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
    await queryInterface.dropTable('contract_jointTenants');
  }
};