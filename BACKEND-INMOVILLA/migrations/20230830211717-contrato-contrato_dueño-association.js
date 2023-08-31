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
    //   fields:['FKCodigo_Contrato'],
    //   type:'foreign key',
    //   name:'contrato-contrato_dueños-association',
    //   references:{
    //     table:'contrato',
    //     field:'Codigo_Contrato'
    //   }
    // })
    await queryInterface.addConstraint('contrato_dueños',{
      FKCodigo_Contrato:{
        type:Sequelize.INTEGER,
        allowNull:false,
        refences:{
          model:{
            tableName:'contrato',
            key:'Codigo_Contrato'
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
    await queryInterface.removeConstraint('contrato_dueños','contrato-contras_dueños-association');
  }
};
