const db = require('../models');

const getAll = async () => {
  try {
    let Contracts = await db.Contract.findAll()
    return Contracts
  } catch (error) {
    throw { status: 500, message: error.message || "failed to get all contracts" };
  }
}

const get = async (id) => {
  try {
    let agent = await db.Contract.findByPk(id);
    return agent
  } catch (error) {

  }
}

const create = async (Fecha_Ini, Fecha_Fin, Vigencia, Cantidad_Habitantes, Precio, Fecha_Pago, Estado_Contrato, Servicios_Incluidos,Constancia, HomeId, OwnerContractId) => {
  try {
    let newAdmin = await db.Contract.create({
      Fecha_Ini,
      Fecha_Fin,
      Vigencia,
      Cantidad_Habitantes,
      Precio,
      Fecha_Pago,
      Estado_Contrato,
      Servicios_Incluidos,
      Constancia,
      HomeId,
      OwnerContractId
    });
    return newAdmin
  } catch (error) {
    console.log(error)
    throw { status: 400, message: error.message || "failed to create admin" };
  }
}

const update = async (id, Fecha_Ini,Fecha_Fin,Vigencia,Cantidad_Habitantes,Precio,Fecha_Pago,Estado_Contrato,Servicios_Incluidos,nuevaConstancia) => {
  try {
    const updated = await db.Contract.update({
      Fecha_Ini,
      Fecha_Fin,
      Vigencia,
      Cantidad_Habitantes,
      Precio,
      Fecha_Pago,
      Estado_Contrato,
      Servicios_Incluidos,  
      nuevaConstancia,
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
    let deleted = await db.Contract.destroy({
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


