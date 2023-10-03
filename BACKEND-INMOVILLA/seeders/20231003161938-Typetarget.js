'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('typetargets', [
      {
        Nombre: 'Prueba001',
        CodTipoObjeto:"Prueba001@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Nombre: 'Prueba002',
        CodTipoObjeto:"Prueba002@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Nombre: 'Prueba003',
        CodTipoObjeto:"Prueba003@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Nombre: 'Prueba004',
        CodTipoObjeto:"Prueba004@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Nombre: 'Prueba005',
        CodTipoObjeto:"Prueba005@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
