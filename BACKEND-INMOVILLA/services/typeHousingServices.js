const db = require('../models');

const getAll = async () => {
    try {
      let typeHousings = await db.Typehousing.findAll()
      return typeHousings
    } catch (error) {
  
    }
  }
  
  const get = async (id) => {
    try {
      let typeHousing = await db.Typehousing.findByPk(id);
      return typeHousing
    } catch (error) {
  
    }
  }
  
  const create = async (CodTipoVivienda,Nombre) => {
    try {
      let newtTypeHousing = await db.Typehousing.create({
        CodTipoVivienda,
        Nombre
      });
      return newtTypeHousing
    } catch (error) {
      throw {status: 400, message: error.message || "failed to create typeHousing"};
    }
  }
  
  const update = async (id,CodTipoVivienda,Nombre) => {
    try {
      const updated = await db.Typehousing.update({
        CodTipoVivienda,
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
      throw {status: 400, message: error.message || "failed to update typeHousing"};
    }
    
    
  }
  
  const destroy = async (id) => {
    try {
      let deleted = await db.Typehousing.destroy({
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
  
  
  