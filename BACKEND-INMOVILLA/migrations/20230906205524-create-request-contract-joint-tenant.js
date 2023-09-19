'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RequestContract_jointTenants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      requestContractId: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"contractRequests",
            key:"id"
          }
        }
      },
      jointTenantId: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"jointtenants",
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
    await queryInterface.dropTable('RequestContract_jointTenants');
  }
};