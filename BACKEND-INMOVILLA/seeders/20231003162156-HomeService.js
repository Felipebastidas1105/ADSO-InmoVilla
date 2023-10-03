'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('HomeServices', [
      {
        serviceId: 1,
        HomeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        serviceId: 2,
        HomeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        serviceId: 1,
        HomeId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        serviceId: 2,
        HomeId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        serviceId: 3,
        HomeId: 3,
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
