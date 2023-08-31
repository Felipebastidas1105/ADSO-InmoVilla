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
    // await queryInterface.addConstraint('contrato_coarrendatarios',{
    //   fields:['FKCedula'],
    //   type:'foreign key',
    //   name:'coarrendatario-contrato_coarrendatarios-association',
    //   references:{
    //     table:'coarrendatarios',
    //     field:'Cedula'
    //   }
    // })
    await queryInterface.addConstraint('contrato_coarrendatarios',{
      FKCedula:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:{
            tableName:"coarrendatario",
            key:"Cedula"
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
    await queryInterface.removeConstraint('contrato_coarrendatarios','contrato-contrato_coarrendatarios-association')
  }
};
