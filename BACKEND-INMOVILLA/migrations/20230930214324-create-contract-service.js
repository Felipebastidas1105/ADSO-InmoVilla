'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ContractServices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ContractId: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"Contracts",
            key:"id"
          }
        }
      },
      ServiceId: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"Services",
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
    await queryInterface.dropTable('ContractServices');
  }
};