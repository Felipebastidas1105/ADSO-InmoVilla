
const db = require('../models');
// const administrator = require('../models/administrator');

const getAll = async () => {
  try {
    let admins = await db.Administrator.findAll()
    return admins
  } catch (error) {

  }
}

const getAdministrator = async (id) => {
  try {
    let admin = await db.Administrator.findByPk(id);
    return admin
  } catch (error) {

  }
}

const createAdministrator = async (Nombre_Admin, Email_Admin, Telefono_Admin) => {
  try {
    let newAdmin = await db.Administrator.create({
      Nombre_Admin,
      Email_Admin,
      Telefono_Admin
    });
    return newAdmin
  } catch (error) {
    throw {status: 400, message: error.message || "failed to create admin"};
  }
}

const updateAdministrador = async (id,Nombre_Admin,Email_Admin,Telefono_Admin) => {
  try {
    const admin = await db.Administrator.update({
      Nombre_Admin,
      Email_Admin,
      Telefono_Admin
    },
    {
      where: {
        id:id
      }
    }
    );
    return admin
  } catch (error) {
    throw {status: 400, message: error.message || "failed to update admin"};
  }
  
  
}

const deleteAdministrador = async (id) => {
  try {
    let deletedAdmin = await db.Administrator.destroy({
      where:{
        id:id
      }
    });
    return deletedAdmin
  } catch (error) {
    throw {status: 400, message: error.message || "failed to delete admin"};
  }
}

module.exports = {
  getAll,
  getAdministrator,
  createAdministrator,
  updateAdministrador,
  deleteAdministrador,
}


