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
    // await queryInterface.addConstraint('solicitud_contrato_coarrendatarios',{
    //   fields:['FKId_Solicitud'],
    //   type:'foreign key',
    //   name:'solicitud_contrato-solicitud_contrato_coarrendatario-association',
    //   references:{
    //     table:'solicitud_contratos',
    //     field:'Id_Solictud'
    //   }
    // })
    await queryInterface.addConstraint('solicitud_contrato_coarrendatarios ',{
      FKCedula:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:{
            tableName:"solicitud_contrato",
            key:"Id_Solicitud"
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
    await queryInterface.removeConstraint('solicitud_contrato_coarrendatarios','solicitud_contrato-solicitud_contrato_coarrendatario-association')
  }
};
