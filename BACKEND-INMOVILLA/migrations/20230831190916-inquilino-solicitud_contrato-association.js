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
    //   fields:[FKCedula_Inquilino],
    //   type:'foreign key',
    //   name:'inquilino-solicitud_contrato-association',
    //   references:{
    //     table:'inquilinos',
    //     field:'Cedula'
    //   }
    // })
    await queryInterface.addConstraint('solicitud_contratos',{
    FKCedula_Inquilino:{
      type:Sequelize.INTEGER,
      allowNull:false,
      references:{
        model:{
          tableName:"inquilinos",
          key:'Cedula'
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
    await queryInterface.removeConstraint('solicitud_contratos','inquilino-solicitud_contratos-association')
  }
};
