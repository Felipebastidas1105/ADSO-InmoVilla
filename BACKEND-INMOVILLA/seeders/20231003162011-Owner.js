'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Owners', [
      {
        Cedula_Dueño: '123456789',
        Nombre: 'John Doe',
        Fecha_Nac_Dueño: '1990-01-01',
        Telefono_Dueño: '555-555-5555',
        estado_Dueño: 'Activo',
        Email_Dueño: 'johndoe@example.com',
        Direccion_Dueño: '123 Main St, Anytown USA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Cedula_Dueño: '987654321',
        Nombre: 'Jane Smith',
        Fecha_Nac_Dueño: '1995-05-05',
        Telefono_Dueño: '555-555-5556',
        estado_Dueño: 'Activo',
        Email_Dueño: 'janesmith@example.com',
        Direccion_Dueño: '456 Elm St, Anytown USA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Cedula_Dueño: '456789123',
        Nombre: 'Bob Johnson',
        Fecha_Nac_Dueño: '1985-12-31',
        Telefono_Dueño: '555-555-5557',
        estado_Dueño: 'Activo',
        Email_Dueño: 'bobjohnson@example.com',
        Direccion_Dueño: '789 Oak St, Anytown USA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Cedula_Dueño: '789123456',
        Nombre: 'Alice Brown',
        Fecha_Nac_Dueño: '1992-06-15',
        Telefono_Dueño: '555-555-5558',
        estado_Dueño: 'Activo',
        Email_Dueño: 'alicebrown@example.com',
        Direccion_Dueño: '321 Pine St, Anytown USA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Cedula_Dueño: '321654987',
        Nombre: 'Tom Wilson',
        Fecha_Nac_Dueño: '1988-11-20',
        Telefono_Dueño: '555-555-5559',
        estado_Dueño: 'Activo',
        Email_Dueño: 'tomwilson@example.com',
        Direccion_Dueño: '654 Maple St, Anytown USA',
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
