const db = require("../models");

const getAll = async () => {
  try {
    let Contracts = await db.Home.findAll();
    return Contracts;
  } catch (error) {
    throw { status: 500, message: error.message || "failed to get all Homes" };
  }
};

const get = async (id) => {
  try {
    let agent = await db.Home.findByPk(id);
    return agent;
  } catch (error) {}
};

const create = async (Codigo_Vivienda,Direccion,
  Latitud,
  Longitud,
  Cant_Cuartos,
  Caracteristicas_Extra,
  Tiene_Servicios_Incluidos,
  Area_Inmueble,
  Precio,
  Descripcion,
  Imagen,
  Tiene_Garaje_Moto,
  Tiene_Garaje_Carro,
  Tiene_Patio,
  Cant_Baños,
  Precio_Venta,
  AgentId,
  TypehousingId,
  TypetargetId
) => {
  
  try {
    let newAdmin = await db.Home.create({
      Codigo_Vivienda,
      Direccion,
      Latitud,
      Longitud,
      Cant_Cuartos,
      Caracteristicas_Extra,
      Tiene_Servicios_Incluidos,
      Area_Inmueble,
      Precio,
      Descripcion,
      Imagen,
      Tiene_Garaje_Moto,
      Tiene_Garaje_Carro,
      Tiene_Patio,
      Cant_Baños,
      Precio_Venta,
      AgentId,
      TypehousingId,
      TypetargetId,
    });
    console.log(newAdmin)
    return newAdmin;
  } catch (error) {
    console.log(error);
    throw { status: 400, message: error.message || "failed to create admin" };
  }
};

const update = async (
  id,
  Codigo_Vivienda,
  Direccion,
  Latitud,
  Longuitud,
  Cant_Cuartos,
  Caracteristicas_Extra,
  Tiene_Servicios_Incluidos,
  Area_Inmueble,
  Precio,
  Descripcion,
  Imagen,
  Tiene_Garaje_Moto,
  Tiene_Garaje_Carro,
  Tiene_Patio,
  Cant_Baños,
  Precio_Venta
) => {
  try {
    const updated = await db.Home.update(
      {
        Codigo_Vivienda,
        Direccion,
        Latitud,
        Longuitud,
        Cant_Cuartos,
        Caracteristicas_Extra,
        Tiene_Servicios_Incluidos,
        Area_Inmueble,
        Precio,
        Descripcion,
        Imagen,
        Tiene_Garaje_Moto,
        Tiene_Garaje_Carro,
        Tiene_Patio,
        Cant_Baños,
        Precio_Venta,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return updated;
  } catch (error) {
    throw { status: 400, message: error.message || "failed to update admin" };
  }
};

const destroy = async (id) => {
  try {
    let deleted = await db.Home.destroy({
      where: {
        id: id,
      },
    });
    return deleted;
  } catch (error) {
    throw { status: 400, message: error.message || "failed to delete admin" };
  }
};

module.exports = {
  getAll,
  get,
  create,
  update,
  destroy,
};
