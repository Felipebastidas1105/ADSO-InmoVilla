const db = require('../models');

const getAll = async () => {
    try {
      let typeHousings = await db.TypeHousing.findAll()
      return typeHousings
    } catch (error) {
  
    }
  }
  
  const get = async (id) => {
    try {
      let typeHousing = await db.TypeHousing.findByPk(id);
      return typeHousing
    } catch (error) {
  
    }
  }
  
  const create = async (codTipoVivienda,nombre) => {
    try {
      let newtTypeHousing = await db.TypeHousing.create({
        codTipoVivienda,nombre
      });
      return newAdmin
    } catch (error) {
      throw {status: 400, message: error.message || "failed to create typeHousing"};
    }
  }
  
  const update = async (id,codTipoVivienda,nombre) => {
    try {
      const updated = await db.TypeHousing.update({
        codTipoVivienda,
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
      throw {status: 400, message: error.message || "failed to update typeHousing"};
    }
    
    
  }
  
  const destroy = async (id) => {
    try {
      let deleted = await db.TypeHousing.destroy({
        where:{
          id:id
        }
      });
      return deleted
    } catch (error) {
      throw {status: 400, message: error.message || "failed to delete typeHousing"};
    }
  }
  
  module.exports = {
    getAll,
    get,
    create,
    update,
    destroy,
  }
  
  
  