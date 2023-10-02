const db = require('../models');

const getAll = async () => {
    try {
      let admins = await db.Homedgfgf.findAll()
      return admins
    } catch (error) {
  
    }
  }
  
  const get = async (id) => {
    try {
      let agent = await db.Home.findByPk(id);
      return agent
    } catch (error) {
  
    }
  }
  
  const create = async (Nombre_Agente, Email_Agente, Telefono_Agente) => {
    try {
      let newAdmin = await db.Home.create({
        Nombre_Agente,
        Email_Agente,
        Telefono_Agente
      });
      return newAdmin
    } catch (error) {
      throw {status: 400, message: error.message || "failed to create admin"};
    }
  }
  
  const update = async (id,Nombre_Agente,Email_Agente,Telefono_Agente) => {
    try {
      const updated = await db.Home.update({
        Nombre_Agente,
        Email_Agente,
        Telefono_Agente
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
      let deleted = await db.Home.destroy({
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
  
  
  