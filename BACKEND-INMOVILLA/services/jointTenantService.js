const db = require('../models');

const getAll = async () => {
    try {
      let admins = await db.jointTenant.findAll()
      return admins
    } catch (error) {
  
    }
  }
  
  const get = async (id) => {
    try {
      let agent = await db.jointTenant.findByPk(id);
      return agent
    } catch (error) {
  
    }
  }
  
  const create = async (Cedula, Nombre, Fecha_Nac, Telefono,Email) => {
    try {
      let newAdmin = await db.jointTenant.create({
        Cedula,
        Nombre,
        Fecha_Nac,
        Telefono,
        Email
      });
      return newAdmin
    } catch (error) {
      throw {status: 400, message: error.message || "failed to create admin"};
    }
  }
  
  const update = async (id,Cedula, Nombre, Fecha_Nac, Telefono,Email) => {
    try {
      const updated = await db.jointTenant.update({
        Cedula,
        Nombre,
        Fecha_Nac,
        Telefono,
        Email
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
      let deleted = await db.jointTenant.destroy({
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
  