const db = require('../models');

const getAll = async () => {
  try {
    let Contracts = await db.Contract.findAll()
    return Contracts
  } catch (error) {

  }
}

const get = async (id) => {
  try {
    let agent = await db.Contract.findByPk(id);
    return agent
  } catch (error) {

  }
}

const create = async (Fecha_Ini, Fecha_Fin, Vigencia, Cantidad_Habitantes, Precio, Fecha_Pago, Estado_Contrato, Servicios_Incluidos, CodigoViviendaId, OwnerContractId) => {
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
      CodigoViviendaId,
      OwnerContractId
    });
    return newAdmin
  } catch (error) {
    console.log(error)
    throw { status: 400, message: error.message || "failed to create admin" };
  }
}

const update = async (id, Nombre_Agente, Email_Agente, Telefono_Agente) => {
  try {
    const updated = await db.Contract.update({
      Nombre_Agente,
      Email_Agente,
      Telefono_Agente
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


