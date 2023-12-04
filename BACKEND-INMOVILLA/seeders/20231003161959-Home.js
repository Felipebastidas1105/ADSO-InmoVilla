"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Homes",
      [
        {
          Codigo_Vivienda: "1",
          Direccion: "Manizales,Caldas",
          Latitud: 5.067,
          Longitud: -75.517,
          Cant_Cuartos: "3",
          Caracteristicas_Extra: "Tiene cancha de futbol",
          Tiene_Servicios_Incluidos: "Si",
          Area_Inmueble: "10m2",
          Precio: "20000",
          Descripcion:
            "Esta es una casa de campo ubicada en una zona residencial de manizales",
          Imagen: [
            "https://res.cloudinary.com/dxnsmwmgv/image/upload/v1699462882/fdwry9u349mfjjl4bnvd.jpg",
          ],
          Tiene_Garaje_Moto: "si",
          Tiene_Garaje_Carro: "Si",
          Tiene_Patio: "No",
          Cant_Baños: "2",
          Precio_Venta: "2000000",
          AgentId: "1",
          TypehousingId: "1",
          TypetargetId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Codigo_Vivienda: "2",
          Direccion: "Manizales,Caldas",
          Latitud: 22.1,
          Longitud: 33.1,
          Cant_Cuartos: "2",
          Caracteristicas_Extra: "Tiene sauna",
          Tiene_Servicios_Incluidos: "Si",
          Area_Inmueble: "100m2",
          Precio: "20000",
          Descripcion:
            "Esta es un apartamento ubicado en una zona residencial de manizales",
          Imagen: [
            "https://res.cloudinary.com/dxnsmwmgv/image/upload/v1699462882/fdwry9u349mfjjl4bnvd.jpg",
          ],
          Tiene_Garaje_Moto: "si",
          Tiene_Garaje_Carro: "No",
          Tiene_Patio: "Si",
          Cant_Baños: "2",
          Precio_Venta: "100.000.000",
          AgentId: "2",
          TypehousingId: "2",
          TypetargetId: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Codigo_Vivienda: "3",
          Direccion: "Bogotá, Cundinamarca",
          Latitud: 22.1,
          Longitud: 33.1,
          Cant_Cuartos: "3",
          Caracteristicas_Extra: "Tiene piscina",
          Tiene_Servicios_Incluidos: "No",
          Area_Inmueble: "200m2",
          Precio: "5000000",
          Descripcion:
            "Esta es una casa ubicada en una zona exclusiva de Bogotá",
          Imagen: [
            "https://res.cloudinary.com/dxnsmwmgv/image/upload/v1699462882/fdwry9u349mfjjl4bnvd.jpg",
          ],
          Tiene_Garaje_Moto: "No",
          Tiene_Garaje_Carro: "Si",
          Tiene_Patio: "Si",
          Cant_Baños: "2",
          Precio_Venta: "500000000",
          AgentId: "3",
          TypehousingId: "1",
          TypetargetId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Codigo_Vivienda: "4",
          Direccion: "Medellín, Antioquia",
          Latitud: 22.1,
          Longitud: 33.1,
          Cant_Cuartos: "4",
          Caracteristicas_Extra: "Tiene vista panorámica",
          Tiene_Servicios_Incluidos: "Sí",
          Area_Inmueble: "150m2",
          Precio: "3500000",
          Descripcion:
            "Este es un apartamento moderno con una vista espectacular de la ciudad",
          Imagen: [
            "https://res.cloudinary.com/dxnsmwmgv/image/upload/v1699462882/fdwry9u349mfjjl4bnvd.jpg",
          ],
          // Imagen: JSON.stringify(
          //   {
          //     id: "prueba",
          //     url: "https://res.cloudinary.com/dxnsmwmgv/image/upload/v1699462882/fdwry9u349mfjjl4bnvd.jpg",
          //   },
          //   {
          //     id: "prueba02",
          //     url: "https://res.cloudinary.com/dxnsmwmgv/image/upload/v1699462884/vxo6dkiyzrdrcqiia1iz.jpg",
          //   }
          // ),
          Tiene_Garaje_Moto: "No",
          Tiene_Garaje_Carro: "Sí",
          Tiene_Patio: "No",
          Cant_Baños: "3",
          Precio_Venta: "700000000",
          AgentId: "1",
          TypehousingId: "2",
          TypetargetId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
