'use strict';

const { Model } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    // await queryInterface.addConstraint('viviendas',{
    //  fields: ['FKId_Agente'],
    //  type: 'foreign Key',
    //  name: 'agente-vivienda-association',
    //  references:{
    //   table: 'agentes',
    //   field: 'Id_Agente'
    //  }
    // })
    await queryInterface.addConstraint('viviendas',{
      FKId_Agente:{
        type:Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:{
            tableName:"Agente",
            key:"Id_Agente"
          }
        }
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('vivienda','agente-vivienda-association');
    /**
     * 
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
