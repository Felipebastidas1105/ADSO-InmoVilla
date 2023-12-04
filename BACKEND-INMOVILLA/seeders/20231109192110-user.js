'use strict';
const bcrypt = require('bcrypt');

async function hashPassword(password) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.bulkInsert('Users', [
      {
        nombres: 'Juan Felipe ',
        apellidos:'Bastidas Bedoya',
        cedula:"1059208067",
        fechaNac:"2004-05-11",
        telefono:"3002972274",
        email:"Admin@gmail.com",
        password:await hashPassword('admin123'),
        createdAt: new Date(),
        updatedAt: new Date(),
        role: 202
      },
      {
        nombres: 'Alejandra Maria',
        apellidos:'Perez Gomez',
        cedula:"1002309430",
        fechaNac:"1985-12-31",
        telefono:"3128379291",
        email:"ale@gmail.com",
        password:"123",
        createdAt: new Date(),
        updatedAt: new Date(),
        role: 101
      },
      {
        nombres: 'Juan Andres',
        apellidos:'Perez Gomez',
        cedula:"1002309430",
        fechaNac:"1985-12-31",
        telefono:"3128379291",
        email:"juan@gmail.com",
        password:"123",
        createdAt: new Date(),
        updatedAt: new Date(),
        role: 909
      },

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
