'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Typehousings', [
      {
        Nombre: 'Prueba001',
        
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Nombre: 'Prueba002',
        
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Nombre: 'Prueba003',
        
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Nombre: 'Prueba004',
        
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Nombre: 'Prueba005',
        
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
