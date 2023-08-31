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
    // await queryInterface.addConstraint('contrato_dueños',{
    //   fields:['FKCedula_Dueño'],
    //   type:'foreign key',
    //   name:'dueño-contrato_dueños-association',
    //   references:{
    //     table:'dueños',
    //     field:'Cedula_Dueño'
    //   }
    // })
    await queryInterface.addConstraint('contrato_dueños',{
      FKCedula_Dueño:{
        type:Sequelize.INTEGER,
        allowNull:false,
        refences:{
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
    await queryInterface.removeConstraint('contrato_dueños','dueño-contrato-dueño-association')
  }
};
