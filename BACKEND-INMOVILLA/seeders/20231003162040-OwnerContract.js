'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('owner_contracts', [
      {
        Codigo_Contratro_Dueño: '1',
        Precio: 1000,
        Fecha_Inicio: '2000-01-01',
        Fecha_Fin: '1985-12-31',
        Estado_Contrato: 'Activo',
        Fecha_Pago: '2022-01-01',
        Vigencia: '1985-12-31',
        OwnerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Codigo_Contratro_Dueño: '2',
        Precio: 2000,
        Fecha_Inicio: '2000-02-01',
        Fecha_Fin: '1985-12-31',
        Estado_Contrato: 'Activo',
        Fecha_Pago: '2022-02-01',
        Vigencia: '1985-12-31',
        OwnerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Codigo_Contratro_Dueño: '3',
        Precio: 1500,
        Fecha_Inicio: '2000-03-01',
        Fecha_Fin: '1985-12-31',
        Estado_Contrato: 'Inactivo',
        Fecha_Pago: '2000-03-01',
        Vigencia: '1985-12-31',
        OwnerId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Codigo_Contratro_Dueño: '4',
        Precio: 2500,
        Fecha_Inicio: '2022-04-01',
        Fecha_Fin: '1985-12-31',
        Estado_Contrato: 'Activo',
        Fecha_Pago: '2000-04-01',
        Vigencia: '1985-12-31',
        OwnerId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Codigo_Contratro_Dueño: '5',
        Precio: 1800,
        Fecha_Inicio: '2022-05-01',
        Fecha_Fin: '1985-12-31',
        Estado_Contrato: 'Inactivo',
        Fecha_Pago: '2000-05-01',
        Vigencia: '1985-12-31',
        OwnerId: 5,
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
