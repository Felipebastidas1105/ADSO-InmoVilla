const db = require('../models');

const getAll = async () => {
  try {
    let admins = await db.Tenant.findAll()
    return admins
  } catch (error) {

  }
}

const get = async (id) => {
  try {
    let agent = await db.Tenant.findByPk(id);
    return agent
  } catch (error) {

  }
}

const create = async (Cedula, Nombre, Fecha_Nac, Telefono, Email, Estado, Direccion) => {
  try {
    let newAdmin = await db.Tenant.create({
      Cedula,
      Nombre,
      Fecha_Nac,
      Telefono,
      Email,
      Estado,
      Direccion
    });
    return newAdmin
  } catch (error) {
    throw { status: 400, message: error.message || "failed to create admin" };
  }
}

const update = async (id, Cedula, Nombre, Fecha_Nac, Telefono, Email, Estado, Direccion) => {
  try {
    const updated = await db.Tenant.update({
      Cedula,
      Nombre,
      Fecha_Nac,
      Telefono,
      Email,
      Estado,
      Direccion
    },
      {
        where: {
          id: id
        }
      }
    );
    return updated
  } catch (error) {
    throw { status: 400, message: error.message || "failed to update admin" };
  }


}

const destroy = async (id) => {
  try {
    let deleted = await db.Tenant.destroy({
      where: {
        id: id
      }
    });
    return deleted
  } catch (error) {
    throw { status: 400, message: error.message || "failed to delete admin" };
  }
}

module.exports = {
  getAll,
  get,
  create,
  update,
  destroy,
}


