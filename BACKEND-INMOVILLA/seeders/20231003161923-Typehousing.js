'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Typehousings', [
      {
        Nombre: 'Prueba001',
        CodTipoVivienda:"Prueba001@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Nombre: 'Prueba002',
        CodTipoVivienda:"Prueba002@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Nombre: 'Prueba003',
        CodTipoVivienda:"Prueba003@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Nombre: 'Prueba004',
        CodTipoVivienda:"Prueba004@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Nombre: 'Prueba005',
        CodTipoVivienda:"Prueba005@gmail.com",
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
