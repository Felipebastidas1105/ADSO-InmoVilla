'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('owner_contracts', [
      {
        Codigo_Contrato_Dueño: 'ABC123',
        Precio: 1000,
        Fecha_Inicio: '2022-01-01',
        Fecha_Fin: '2022-12-31',
        Estado_Contrato: 'Activo',
        fecha_Pago: '2022-01-01',
        Vigencia: 12,
        OwnerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Codigo_Contrato_Dueño: 'DEF456',
        Precio: 2000,
        Fecha_Inicio: '2022-02-01',
        Fecha_Fin: '2023-01-31',
        Estado_Contrato: 'Activo',
        fecha_Pago: '2022-02-01',
        Vigencia: 12,
        OwnerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Codigo_Contrato_Dueño: 'GHI789',
        Precio: 1500,
        Fecha_Inicio: '2022-03-01',
        Fecha_Fin: '2023-02-28',
        Estado_Contrato: 'Inactivo',
        fecha_Pago: '2022-03-01',
        Vigencia: 12,
        OwnerId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Codigo_Contrato_Dueño: 'JKL012',
        Precio: 2500,
        Fecha_Inicio: '2022-04-01',
        Fecha_Fin: '2023-03-31',
        Estado_Contrato: 'Activo',
        fecha_Pago: '2022-04-01',
        Vigencia: 12,
        OwnerId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Codigo_Contrato_Dueño: 'MNO345',
        Precio: 1800,
        Fecha_Inicio: '2022-05-01',
        Fecha_Fin: '2023-04-30',
        Estado_Contrato: 'Inactivo',
        fecha_Pago: '2022-05-01',
        Vigencia: 12,
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
