'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tenants', [
      {
        Cedula: '1234567890',
        Nombre: 'John Doe',
        Fecha_Nac: '1990-01-01',
        Telefono: '555-5555',
        Email: 'johndoe@example.com',
        Estado: 'Activo',
        Direccion: '123 Main St',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Cedula: '0987654321',
        Nombre: 'Jane Smith',
        Fecha_Nac: '1995-02-01',
        Telefono: '555-5555',
        Email: 'janesmith@example.com',
        Estado: 'Activo',
        Direccion: '456 Elm St',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Cedula: '1357908642',
        Nombre: 'Bob Johnson',
        Fecha_Nac: '1985-03-15',
        Telefono: '555-5555',
        Email: 'bobjohnson@example.com',
        Estado: 'Inactivo',
        Direccion: '789 Oak St',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Cedula: '24680139',
        Nombre: 'Alice Lee',
        Fecha_Nac: '1992-04-30',
        Telefono: '555-5555',
        Email: 'alicelee@example.com',
        Estado: 'Activo',
        Direccion: '321 Pine St',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Cedula: '3691470',
        Nombre: 'Tom Wilson',
        Fecha_Nac: '1998-05-15',
        Telefono: '555-5555',
        Email: 'tomwilson@example.com',
        Estado: 'Inactivo',
        Direccion: '654 Cedar St',
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
