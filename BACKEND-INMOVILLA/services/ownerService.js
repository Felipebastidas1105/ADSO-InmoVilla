const db = require('../models');

const getAll = async () => {
    try {
      let admins = await db.Owner.findAll()
      return admins
    } catch (error) {
  
    }
  }
  
  const get = async (id) => {
    try {
      let agent = await db.Owner.findByPk(id);
      return agent
    } catch (error) {
  
    }
  }
  
  const create = async (Cedula_Dueño, Nombre, Fecha_Nac_Dueño,Telefono_Dueño,Estado_Dueño,Email_Dueño,Direccion_Dueño) => {
    try {
      let newAdmin = await db.Owner.create({
        Cedula_Dueño,
        Nombre,
        Fecha_Nac_Dueño,
        Telefono_Dueño,
        Estado_Dueño,
        Email_Dueño,
        Direccion_Dueño
      });
      return newAdmin
    } catch (error) {
      throw {status: 400, message: error.message || "failed to create admin"};
    }
  }
  
  const update = async (id,Cedula_Dueño, Nombre, Fecha_Nac_Dueño,Telefono_Dueño,Estado_Dueño,Email_Dueño,Direccion_Dueño) => {
    try {
      const updated = await db.Owner.update({
        Cedula_Dueño,
        Nombre,
        Fecha_Nac_Dueño,
        Telefono_Dueño,
        Estado_Dueño,
        Email_Dueño,
        Direccion_Dueño
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
      let deleted = await db.Owner.destroy({
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
  
  
  