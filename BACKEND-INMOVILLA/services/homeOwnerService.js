const db = require('../models');

const getAll = async () => {
    try {
      let All = await db.HomeOwner.findAll()
      return All
    } catch (error) {
  
    }
  }
  
  const get = async (id) => {
    try {
      let homeOwner = await db.HomeOwner.findByPk(id);
      return homeOwner
    } catch (error) {
  
    }
  }
  
  const create = async (OwnerId, HomeId) => {
    try {
      let newHomeOwner = await db.HomeOwner.create({
        OwnerId,
        HomeId
      });
      return newHomeOwner
    } catch (error) {
      throw {status: 400, message: error.message || "failed to create admin"};
    }
  }
  
  const update = async (id,OwnerId, HomeId) => {
    try {
      const updated = await db.HomeOwner.update({
        OwnerId,
        HomeId
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
      let deleted = await db.HomeOwner.destroy({
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
  
  
  