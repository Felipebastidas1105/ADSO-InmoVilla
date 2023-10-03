'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('rentPayments', [
      {
        Codigo_Pago: '1',
        Soporte_Pago: 'payment1.jpg',
        Medio_Pago: 'Tarjeta de crédito',
        Estado_Pago: 'Pendiente',
        Valor_Pago: 1000,
        CodigoContratoId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Codigo_Pago: '1',
        Soporte_Pago: 'payment2.jpg',
        Medio_Pago: 'Transferencia bancaria',
        Estado_Pago: 'Aprobado',
        Valor_Pago: 2000,
        CodigoContratoId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Codigo_Pago: '1',
        Soporte_Pago: 'payment3.jpg',
        Medio_Pago: 'Efectivo',
        Estado_Pago: 'Rechazado',
        Valor_Pago: 1500,
        CodigoContratoId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Codigo_Pago: '1',
        Soporte_Pago: 'payment4.jpg',
        Medio_Pago: 'Tarjeta de débito',
        Estado_Pago: 'Pendiente',
        Valor_Pago: 1800,
        CodigoContratoId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Codigo_Pago: '1',
        Soporte_Pago: 'payment5.jpg',
        Medio_Pago: 'Cheque',
        Estado_Pago: 'Aprobado',
        Valor_Pago: 2500,
        CodigoContratoId: 4,
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
