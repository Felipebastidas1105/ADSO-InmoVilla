const db = require('../models');

const getAll = async () => {
    try {
      let All = await db.HomeService.findAll()
      return All
    } catch (error) {
  
    }
  }
  
  const get = async (id) => {
    try {
      let Selected = await db.HomeService.findByPk(id);
      return Selected
    } catch (error) {
  
    }
  }
  
  const create = async (ServiceId, HomeId) => {
    try {
      let created = await db.HomeService.create({
        ServiceId,
        HomeId
      });
      return created
    } catch (error) {
      throw {status: 400, message: error.message || "failed to create admin"};
    }
  }
  
  const update = async (id,ServiceId, HomeId) => {
    try {
      const updated = await db.HomeService.update({
        ServiceId,
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
      let deleted = await db.HomeService.destroy({
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
  
  
  