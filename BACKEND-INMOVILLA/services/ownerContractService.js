const db = require('../models');

const getAll = async () => {
    try {
      let GetAll = await db.OwnerContract.findAll()
      return GetAll
    } catch (error) {
  
    }
  }
  
  const get = async (id) => {
    try {
      let OwnerC = await db.OwnerContract.findByPk(id);
      return OwnerC
    } catch (error) {
  
    }
  }
  
  const create = async (Codigo_Contrato_Dueño, Precio, Fecha_Inicio, Fecha_Fin, Estado_Contrato, Fecha_Pago, Vigencia, OwnerId) => {
    try {
      let newOwnerContract = await db.OwnerContract.create({
        Codigo_Contrato_Dueño,
        Precio, Fecha_Inicio,
        Fecha_Fin,
        Estado_Contrato,
        Fecha_Pago,
        Vigencia,
        OwnerId
      });
      return newOwnerContract
    } catch (error) {
      throw {status: 400, message: error.message || "failed to create admin"};
    }
  }
  
  const update = async (id,Codigo_Contrato_Dueño, Precio, Fecha_Inicio, Fecha_Fin, Estado_Contrato, Fecha_Pago, Vigencia, OwnerId) => {
    try {
      const updated = await db.OwnerContract.update({
        Codigo_Contrato_Dueño,
        Precio, Fecha_Inicio,
        Fecha_Fin,
        Estado_Contrato,
        Fecha_Pago,
        Vigencia,
        OwnerId
      },
      {
        where: {
          id:id
        }
      }
      );
      return updated
    } catch (error) {
      throw {status: 400, message: error.message || "failed to update admin"};
    }
    
    
  }
  
  const destroy = async (id) => {
    try {
      let deleted = await db.OwnerContract.destroy({
        where:{
          id:id
        }
      });
      return deleted
    } catch (error) {
      throw {status: 400, message: error.message || "failed to delete admin"};
    }
  }
  
  module.exports = {
    getAll,
    get,
    create,
    update,
    destroy,
  }
  
  
  