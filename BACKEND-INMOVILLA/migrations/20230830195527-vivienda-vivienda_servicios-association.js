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
    // await queryInterface.addConstraint('vivienda_servicios',{
    //   fields:['FKCodigo_Vivienda'],
    //   type:'foreign key',
    //   name:'vivienda-vivienda_servicios-association',
    //   references:{
    //     table:['vivienda'],
    //     field:'Codigo_Vivienda'
    //   }
    // })
    await queryInterface.addConstraint('viviendas_servicios',{
      FKCodigo_Vivienda:{
        type:Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:{
            tableName:"viviendas",
            key:"Codigo_Vivienda"
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
    await queryInterface.removeConstraint('vivienda-vivienda_servicios-association');
  }
};
