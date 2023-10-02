const db = require('../models');

const getAll = async () => {
    try {
      let typeTargets = await db.Typetarget.findAll()
      return typeTargets
    } catch (error) {
  
    }
  }
  
  const get = async (id) => {
    try {
      let typeTarget = await db.Typetarget.findByPk(id);
      return typeTarget
    } catch (error) {
  
    }
  }
  
  const create = async (CodTipoObjeto,Nombre) => {
    try {
      let newttypeTarget = await db.Typetarget.create({
        CodTipoObjeto,
        Nombre
      });
      return newttypeTarget
    } catch (error) {
      throw {status: 400, message: error.message || "failed to create typeTarget"};
    }
  }
  
  const update = async (id,CodTipoObjeto,Nombre) => {
    try {
      const updated = await db.Typetarget.update({
        CodTipoObjeto,
        Nombre
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
      let deleted = await db.Typetarget.destroy({
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
  
  
  