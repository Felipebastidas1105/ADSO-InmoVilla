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
    // await queryInterface.addConstraint('pago_arriendos',{
    //   fields:['FKCodigo_contrato'],
    //   type:'foreign key',
    //   name:'contrato-pago_arriendo-association',
    //   references:{
    //     table:'contrato',
    //     field:'Codigo_Contrato'
    //   }
    // })
    await queryInterface.addConstraint('pago_arriendos',{
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
    await queryInterface.removeConstraint('pago_arriendos','contrato-pago_arriendo-association')
  }
};
