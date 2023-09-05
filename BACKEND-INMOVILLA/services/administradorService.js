
const  db  = require('../models'); 
// const administrator = require('../models/administrator');

  const getAll = async() => {
    try {
        let admins = await db.Administrator.findAll()
        return admins
    } catch (error) {
        
    }
  }

  const getAdministrator = async(id) => {
    try {
      let admin = await db.Administrator.findByPk(id);
      return admin
    } catch (error) {
      
    }
  }

  const createAdministrador = async() =>  {
    return await administrador.create(data);
  }

  const updateAdministrador = async() => {
    const admin = await administrador.findByPk(id);
    if (!admin) {
      throw new Error('Administrador no encontrado');
    }
    return await admin.update(data);
  }

  const deleteAdministrador = async() =>  {
    const admin = await administrador.findByPk(id);
    if (!admin) {
      throw aError('Administrador no encontrado');
    }
    return await admin.destroy();
  }

  module.exports = {
    getAll,
    getAdministrator,
    createAdministrador,
    updateAdministrador,
    deleteAdministrador,
  }


