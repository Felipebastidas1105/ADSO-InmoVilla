'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert('Administrators', [
      {
        Nombre_Admin: 'Juan Felipe Bastidas Bedoya',
        Email_Admin: "juanfelipebastidas1105@gmail.com",
        Telefono_Admin: "3002972274",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Nombre_Admin: 'Santiago Rodriguez Osorio',
        Email_Admin: "santiagorodriguez@gmail.com",
        Telefono_Admin: "3245372718",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Nombre_Admin: 'Jhon Duque',
        Email_Admin: "Duquejhon20@gmail.com",
        Telefono_Admin: "3227345906",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Nombre_Admin: 'David Santiago Leguizamon Guerra',
        Email_Admin: "lguerra20@gmail.com",
        Telefono_Admin: "3054420812",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Nombre_Admin: 'Inmovilla managment',
        Email_Admin: "Inmovilla@gmail.com",
        Telefono_Admin: "30320441",
        createdAt: new Date(),
        updatedAt: new Date()
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
