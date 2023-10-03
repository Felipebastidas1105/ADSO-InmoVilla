'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('owner_contracts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Codigo_Contratro_Dueño: {
        type: Sequelize.INTEGER
      },
      Precio: {
        type: Sequelize.DOUBLE
      },
      Fecha_Fin: {
        type: Sequelize.DATE
      },
      Fecha_Inicio: {
        type: Sequelize.DATE
      },
      Estado_Contrato: {
        type: Sequelize.STRING
      },
      Fecha_Pago: {
        type: Sequelize.DATE
      },
      Vigencia: {
        type: Sequelize.DATE
      },
      OwnerId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:{
            tableName:"Owners",
            key:"id"
          }
        }
      },
      // FKCodigo_Contrato: {
      //   type: Sequelize.INTEGER quitar
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('owner_contracts');
  }
};