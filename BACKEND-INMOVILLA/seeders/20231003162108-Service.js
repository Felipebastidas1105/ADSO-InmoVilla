'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Services', [
      {
        Id_Servicios: 1,
        Nombre_Servicios: 'Agua',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Id_Servicios: 2,
        Nombre_Servicios: 'Luz',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Id_Servicios: 3,
        Nombre_Servicios: 'Gas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Id_Servicios: 4,
        Nombre_Servicios: 'Internet',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Id_Servicios: 5,
        Nombre_Servicios: 'Cable',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
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
