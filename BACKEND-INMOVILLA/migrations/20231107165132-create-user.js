'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombres:{
        type: Sequelize.STRING
      },
      apellidos:{
        type: Sequelize.STRING
      },
      cedula:{
        type: Sequelize.INTEGER
      },
      fechaNac:{
        type: Sequelize.DATE
      },
      telefono:{
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      role: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
      // RolId: {
      //   type: Sequelize.INTEGER,
      //   allowNull:false,
      //   references:{
      //     model:{
      //       tableName:"Rols",
      //       key:"id"
      //     }
      //   }
      // }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};