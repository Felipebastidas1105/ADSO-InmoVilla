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
    // await queryInterface.addConstraint('solicitud_contrato_coarrendatarios-association',{
    //   fields:['FKCedula'],
    //   type:'foreign key',
    //   name:'coarrendatario-solicitud_contrato_coarrendatario-association',
    //   references:{
    //     table:'coarrendatarios',
    //     field:'Cedula'
    //   }
    // })
    await queryInterface.addConstraint('solicitud_contrato_coarrendatarios-association ',{
      FKCedula:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:{
            tableName:"coarrendatarios",
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
    await queryInterface.removeConstraint('solicitud_contrato_coarrendatarios','coarrendatarios-solicitud_contrato_coarrendatarios-association')
  }
};
