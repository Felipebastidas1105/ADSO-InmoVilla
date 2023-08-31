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
    // await queryInterface.addConstraint('contrato_servicios',{
    //   fields:['FKCodigo_Contrato'],
    //   type:'foreign key',
    //   name:'contrato-contrato_servicios-association',
    //   references:{
    //     table:'contratos',
    //     field:'Codigo_Contrato'
    //   }
    // })
    await queryInterface.addConstraint('contrato_servicios',{
      FKCodigo_Contrato:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
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
    await queryInterface.removeConstraint('contrato_servicios','contrato-contrato_servicios-association')
  }
};
