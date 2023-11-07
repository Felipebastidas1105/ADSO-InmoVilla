const db = require('../models');
// const User = require('../models/User');

const getAll = async () => {
  try {
    let admins = await db.User.findAll()
    return admins
  } catch (error) {

  }
}

const get = async (id) => {
  try {
    let admin = await db.User.findByPk(id);
    return admin
  } catch (error) {

  }
}

const create = async (email,password) => {
  try {
    let newAdmin = await db.User.create({
        email,
        password
    });
    return newAdmin
  } catch (error) {
    throw {status: 400, message: error.message || "failed to create admin"};
  }
}

const update = async (id,email,password) => {
  try {
    const admin = await db.User.update({
        email,
        password
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

const destroy = async (id) => {
  try {
    let deletedAdmin = await db.User.destroy({
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
  get,
  create,
  update,
  destroy,
}