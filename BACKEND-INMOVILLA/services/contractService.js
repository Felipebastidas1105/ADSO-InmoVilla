const db = require('../models');

const getAll = async () => {
  try {
    let Contracts = await db.Contract.findAll({
      include: {
        model: db.Home,
        required: true,
        as: "CodigoVivienda",
        attributes: ["id","Direccion","Ciudad","Codigo_Postal","Tipo","Precio","Estado","Area","Numero_Habitaciones","Numero_Baños","Descripcion","Foto","Fecha_Construccion","Fecha_Publicacion","Fecha_Venta","OwnerHomeId","createdAt","updatedAt"]
      },
        attributes:{
          exclude:["createdAt","updatedAt"]
        }
      
    })
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

const update = async (id, Fecha_Ini,Fecha_Fin,Vigencia,Cantidad_Habitantes,Precio,Fecha_Pago,Estado_Contrato,Servicios_Incluidos) => {
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


