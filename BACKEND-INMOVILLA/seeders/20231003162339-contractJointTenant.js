'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('contractJointTenants', [
      {
        contractId: 1,
        joinTenant: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        contractId: 1,
        joinTenant: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        contractId: 2,
        joinTenant: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        contractId: 3,
        joinTenant: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        contractId: 4,
        joinTenant: 3,
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
