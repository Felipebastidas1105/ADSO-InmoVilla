'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('contractRequests', [
      {
        Id_Solicitud: 1,
        Codigo_Solicitud: 'CR00001',
        Desprendible_Pago1: 'pago1.jpg',
        Desprendible_Pago2: 'pago2.jpg',
        Desprendible_Pago3: 'pago3.jpg',
        Fecha_Solicitud: new Date(),
        Estado_Solicitud: 'Pendiente',
        Aprobacion_Inquilino: false,
        Carta_Laboral: 'carta1.pdf',
        FKCedula_Inquilino: '1234567890',
        FKCodigo_Contrato: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Id_Solicitud: 2,
        Codigo_Solicitud: 'CR00002',
        Desprendible_Pago1: 'pago4.jpg',
        Desprendible_Pago2: 'pago5.jpg',
        Desprendible_Pago3: 'pago6.jpg',
        Fecha_Solicitud: new Date(),
        Estado_Solicitud: 'Pendiente',
        Aprobacion_Inquilino: false,
        Carta_Laboral: 'carta2.pdf',
        FKCedula_Inquilino: '0987654321',
        FKCodigo_Contrato: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Id_Solicitud: 3,
        Codigo_Solicitud: 'CR00003',
        Desprendible_Pago1: 'pago7.jpg',
        Desprendible_Pago2: 'pago8.jpg',
        Desprendible_Pago3: 'pago9.jpg',
        Fecha_Solicitud: new Date(),
        Estado_Solicitud: 'Aprobado',
        Aprobacion_Inquilino: true,
        Carta_Laboral: 'carta3.pdf',
        FKCedula_Inquilino: '1357908642',
        FKCodigo_Contrato: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Id_Solicitud: 4,
        Codigo_Solicitud: 'CR00004',
        Desprendible_Pago1: 'pago10.jpg',
        Desprendible_Pago2: 'pago11.jpg',
        Desprendible_Pago3: 'pago12.jpg',
        Fecha_Solicitud: new Date(),
        Estado_Solicitud: 'Rechazado',
        Aprobacion_Inquilino: false,
        Carta_Laboral: 'carta4.pdf',
        FKCedula_Inquilino: '2468013579',
        FKCodigo_Contrato: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Id_Solicitud: 5,
        Codigo_Solicitud: 'CR00005',
        Desprendible_Pago1: 'pago13.jpg',
        Desprendible_Pago2: 'pago14.jpg',
        Desprendible_Pago3: 'pago15.jpg',
        Fecha_Solicitud: new Date(),
        Estado_Solicitud: 'Pendiente',
        Aprobacion_Inquilino: false,
        Carta_Laboral: 'carta5.pdf',
        FKCedula_Inquilino: '3692581470',
        FKCodigo_Contrato: 5,
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
