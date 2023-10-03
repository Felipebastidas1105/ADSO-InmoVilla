const db = require('../models');

const getAll = async () => {
    try {
      let All = await db.contractJointTenant.findAll()
      return All
    } catch (error) {
  
    }
  }
  
  const get = async (id) => {
    try {
      let Selected = await db.contractJointTenant.findByPk(id);
      return Selected
    } catch (error) {
  
    }
  }
  
  const create = async (contractId, jointTenant) => {
    try {
      let created = await db.contractJointTenant.create({
        contractId,
        jointTenant
      });
      return created
    } catch (error) {
      throw {status: 400, message: error.message || "failed to create admin"};
    }
  }
  
  const update = async (id,contractId, jointTenant) => {
    try {
      const updated = await db.contractJointTenant.update({
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
      let deleted = await db.contractJointTenant.destroy({
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
  
  
  