const db = require('../models');

const getAll = async () => {
    try {
      let All = await db.Favorite.findAll()
      return All
    } catch (error) {
  
    }
  }
  
  const get = async (id) => {
    try {
      let Selected = await db.Favorite.findByPk(id);
      return Selected
    } catch (error) {
  
    }
  }
  
  const create = async (UserId, HomeId) => {
    try {
      let created = await db.Favorite.create({
        UserId,
        HomeId
      });
      return created
    } catch (error) {
      throw {status: 400, message: error.message || "failed to create admin"};
    }
  }
  
  const update = async (id,UserId, HomeId) => {
    try {
      const updated = await db.Favorite.update({
        UserId,
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
      let deleted = await db.Favorite.destroy({
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
  
  
  