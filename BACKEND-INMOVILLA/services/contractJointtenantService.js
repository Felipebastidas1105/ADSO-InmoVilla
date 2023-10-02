const db = require('../models');

const getAll = async () => {
    try {
      let admins = await db.Agent.findAll()
      return admins
    } catch (error) {
  
    }
  }
  
  const get = async (id) => {
    try {
      let agent = await db.Agent.findByPk(id);
      return agent
    } catch (error) {
  
    }
  }
  
  const create = async (contractId, jointTenant) => {
    try {
      let newAdmin = await db.Agent.create({
        contractId,
        jointTenant
      });
      return newAdmin
    } catch (error) {
      throw {status: 400, message: error.message || "failed to create admin"};
    }
  }
  
  const update = async (id,contractId, jointTenant) => {
    try {
      const updated = await db.Agent.update({
        contractId,
        jointTenant
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
      let deleted = await db.Agent.destroy({
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
  
  
  