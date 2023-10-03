
const db = require('../models');
// const administrator = require('../models/administrator');

const getAll = async () => {
  try {
    let admins = await db.ContractService.findAll()
    return admins
  } catch (error) {
    throw {status: 500, message: error.message || "failed to get all admins"};
  }
}

const get = async (id) => {
  try {
    let admin = await db.ContractService.findByPk(id);
    return admin
  } catch (error) {
    throw {status: 500, message: error.message || "failed to get admin"};
  }
}

const create = async (ContractService, ServiceId) => {
  try {
    let create = await db.ContractService.create({
        ContractService,
        ServiceId
    });
    return create
  } catch (error) {
    throw {status: 400, message: error.message || "failed to create admin"};
  }
}

const update = async (id,ContractService, ServiceId) => {
  try {
    const update = await db.ContractService.update({
        ContractService,
        ServiceId
    },
    {
      where: {
        id:id
      }
    }
    );
    return update
  } catch (error) {
    throw {status: 400, message: error.message || "failed to update admin"};
  }
  
  
}

const destroy = async (id) => {
  try {
    let deletedAdmin = await db.ContractService.destroy({
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


