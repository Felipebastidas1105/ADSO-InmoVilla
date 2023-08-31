'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // await queryInterface.addConstraint('vivienda_dueños',{
    //   fields:['FKCedula_Dueño'],
    //   type:'foreign key',
    //   name:'dueño-vivienda_dueño-association',
    //   references:{
    //     table:'dueños',
    //     field:'Cedula_Dueño'
    //   }
    // })
    await queryInterface.addConstraint('vivienda_dueños',{
      FKCedula_Dueño:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:{
            tableName:'dueños',
            key:'Cedula_Dueño'
          }
        }
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint('vivienda_dueños','dueño-vivienda_servicios')
  }
};
