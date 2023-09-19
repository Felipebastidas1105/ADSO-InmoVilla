const db = require('../models');

const getAll = async () => {
    try {
      let typeTargets = await db.typeTarget.findAll()
      return typeTargets
    } catch (error) {
  
    }
  }
  
  const get = async (id) => {
    try {
      let typeTarget = await db.typeTarget.findByPk(id);
      return typeTarget
    } catch (error) {
  
    }
  }
  
  const create = async (codTipoTarget,nombre) => {
    try {
      let newttypeTarget = await db.typeTarget.create({
        codTipoTarget,nombre
      });
      return newAdmin
    } catch (error) {
      throw {status: 400, message: error.message || "failed to create typeTarget"};
    }
  }
  
  const update = async (id,codTipoTarget,nombre) => {
    try {
      const updated = await db.typeTarget.update({
        codTipoTarget,
        nombre
      },
      {
        where: {
          id:id
        }
      }
      );
      return updated
    } catch (error) {
      throw {status: 400, message: error.message || "failed to update typeTarget"};
    }
    
    
  }
  
  const destroy = async (id) => {
    try {
      let deleted = await db.typeTarget.destroy({
        where:{
          id:id
        }
      });
      return deleted
    } catch (error) {
      throw {status: 400, message: error.message || "failed to delete typeTarget"};
    }
  }
  
  module.exports = {
    getAll,
    get,
    create,
    update,
    destroy,
  }
  
  
  