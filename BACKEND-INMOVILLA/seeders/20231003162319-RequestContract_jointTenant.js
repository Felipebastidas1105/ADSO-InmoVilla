'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('RequestContract_jointTenants', [
      {
        requestContractId: 1,
        jointTenantId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        requestContractId: 1,
        jointTenantId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        requestContractId: 2,
        jointTenantId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        requestContractId: 3,
        jointTenantId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        requestContractId: 4,
        jointTenantId: 5,
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
