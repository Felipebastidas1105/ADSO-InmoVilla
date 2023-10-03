'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Contracts', [
      {
        Fecha_Ini: '2022-01-01',
        Fecha_Fin: '2022-12-31',
        Vigencia: '1985-12-31',
        Precio: 1000,
        Fecha_Pago: '2022-01-01',
        Estado_Contrato: 'Activo',
        Servicios_Incluidos: 'Agua, luz, gas',
        Cantidad_Habitantes: 2,
        HomeId: 1,
        OwnerContractId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Fecha_Ini: '2022-02-01',
        Fecha_Fin: '2023-01-31',
        Vigencia: '1985-12-31',
        Precio: 2000,
        Fecha_Pago: '2022-02-01',
        Estado_Contrato: 'Activo',
        Servicios_Incluidos: 'Agua, luz',
        Cantidad_Habitantes: 3,
        HomeId: 2,
        OwnerContractId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Fecha_Ini: '2022-03-01',
        Fecha_Fin: '2023-02-28',
        Vigencia: '1985-12-31',
        Precio: 3000,
        Fecha_Pago: '2022-03-01',
        Estado_Contrato: 'Inactivo',
        Servicios_Incluidos: 'Agua',
        Cantidad_Habitantes: 1,
        HomeId: 3,
        OwnerContractId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ,
      {
        Fecha_Ini: '2022-03-01',
        Fecha_Fin: '2023-02-28',
        Vigencia: '1985-12-31',
        Precio: 3000,
        Fecha_Pago: '2022-03-01',
        Estado_Contrato: 'Inactivo',
        Servicios_Incluidos: 'Agua',
        Cantidad_Habitantes: 1,
        HomeId: 3,
        OwnerContractId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ,
      {
        Fecha_Ini: '2022-03-01',
        Fecha_Fin: '2023-02-28',
        Vigencia: '1985-12-31',
        Precio: 30000,
        Fecha_Pago: '2022-03-01',
        Estado_Contrato: 'Inactivo',
        Servicios_Incluidos: 'Agua,Luz,Gas',
        Cantidad_Habitantes: 1,
        HomeId: 4,
        OwnerContractId: 4,
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
