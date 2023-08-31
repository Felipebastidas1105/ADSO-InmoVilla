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
    //   fields:['FKId_Servicios'],
    //   type:'foreign key',
    //   name:'servicios-contrato_servicios-association',
    //   references:{
    //     table:['servicios'],
    //     field:'Id_Servicios'
    //   }
    // })
    await queryInterface.addConstraint('contrato_servicios',{
      FKId_Servicios:{
        type:Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:{
            tableName:"servicios",
            key:"Id_Servicios "
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
    await queryInterface.removeConstraint('contrato_servicios','servicios-contrato_servicios-association')
  }
};
