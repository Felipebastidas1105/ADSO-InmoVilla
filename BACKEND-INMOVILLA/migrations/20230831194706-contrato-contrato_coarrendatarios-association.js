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
    //   fields:['FKCodigo_contrato'],
    //   type:'foreign key',
    //   name:'contrato-contrato_coarrendatarios-association',
    //   references:{
    //     table:'contrato',
    //     field:'Codigo_Contrato'
    //   }
    // })
    await queryInterface.addConstraint('contrato_coarrendatarios',{
      FKCodigo_contrato:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:{
            tableName:"contrato",
            key:"Codigo_Contrato"
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
    await queryInterface.removeConstraint('contrato_coarrendatarios','contrato-pago_arriendo-association')

  }
};
