
const { db } = require('../models'); 
// const administrator = require('../models/administrator');

  const getAll = async() => {
    try {
        let admins = await db.Administrator.findAll()
        return admins
    } catch (error) {
        
    }
  }

  const getAdministrador = async() => {
    return await administrador.findByPk(id);
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



