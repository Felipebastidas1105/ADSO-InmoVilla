'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ContractServices', [
      {
        ContractId: 1,
        ServiceId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ContractId: 1,
        ServiceId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ContractId: 2,
        ServiceId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ContractId: 2,
        ServiceId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ContractId: 3,
        ServiceId: 3,
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
