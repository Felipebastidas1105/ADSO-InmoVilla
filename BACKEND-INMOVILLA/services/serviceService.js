const db = require('../models');

const getAll = async () => {
    try {
      let admins = await db.Service.findAll()
      return admins
    } catch (error) {
  
    }
  }
  
  const get = async (id) => {
    try {
      let agent = await db.Service.findByPk(id);
      return agent
    } catch (error) {
  
    }
  }
  
  const create = async (Id_Servicios, Nombre_Servicios) => {
    try {
      let newAdmin = await db.Service.create({
       Id_Servicios,
       Nombre_Servicios
      });
      return newAdmin
    } catch (error) {
      throw {status: 400, message: error.message || "failed to create admin"};
    }
  }
  
  const update = async (id,Id_Servicios, Nombre_Servicios) => {
    try {
      const updated = await db.Service.update({
        Id_Servicios,
        Nombre_Servicios
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
      let deleted = await db.Service.destroy({
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
  
  
  