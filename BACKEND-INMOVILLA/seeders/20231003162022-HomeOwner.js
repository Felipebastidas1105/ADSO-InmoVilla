'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Homeowners', [
      {
        ownerId: 1,
        HomeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 2,
        HomeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 3,
        HomeId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 4,
        HomeId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 5,
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
