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
     // await queryInterface.addConstraint('solicitud_contratos',{
    //   fields:['FKCodigo_Contrato'],
    //   type:'foreign key',
    //   name:'contrato-solicitud_contrato-association',
    //   references:{
    //     table:'contrato',
    //     field:'Codigo_Contrato'
    //   }
    // })
    await queryInterface.addConstraint('solicitud_contratos',{
      FKCodigo_Contrato:{
        type:Sequelize.INTEGER,
        allowNull:false,
        refences:{
          model:{
            tableName:'contratos',
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
    await queryInterface.removeConstraint('solicitud_contratos','contrato-solicitud_contrato-association ')

  }
};
