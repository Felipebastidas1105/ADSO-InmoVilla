'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.bulkInsert('Users', [
      {
        nombres: 'Alejandra Maria',
        apellidos:'Perez Gomez',
        cedula:"1002309430",
        fechaNac:"18-03-2000",
        telefono:"3128379291",
        email:"ale@gmail.com",
        password:"123",
        createdAt: new Date(),
        updatedAt: new Date(),
        RolId:"1"
      }

    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
