'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('contractJointTenants', [
      {
        contractId: 1,
        jointTenant: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        contractId: 1,
        jointTenant: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        contractId: 2,
        jointTenant: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        contractId: 3,
        jointTenant: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        contractId: 4,
        jointTenant: 3,
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
