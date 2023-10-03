'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Agents', [
      {
        Nombre_Agente: 'Prueba001',
        Email_Agente:"Prueba001@gmail.com",
        Telefono_Agente:"2342425525"
      },
      {
        Nombre_Agente: 'Prueba002',
        Email_Agente:"Prueba002@gmail.com",
        Telefono_Agente:"234235234"
      },
      {
        Nombre_Agente: 'Prueba003',
        Email_Agente:"Prueba003@gmail.com",
        Telefono_Agente:"23424234"
      },
      {
        Nombre_Agente: 'Prueba004',
        Email_Agente:"Prueba004@gmail.com",
        Telefono_Agente:"305324220812"
      },
      {
        Nombre_Agente: 'Prueba005',
        Email_Agente:"Prueba005@gmail.com",
        Telefono_Agente:"30320441"
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
