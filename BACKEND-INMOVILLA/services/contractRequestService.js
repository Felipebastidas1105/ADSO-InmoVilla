const db = require('../models');

const getAll = async () => {
    try {
      let All = await db.ContractRequest.findAll()
      return All
    } catch (error) {
  
    }
  }
  
  const get = async (id) => {
    try {
      let Selected = await db.ContractRequest.findByPk(id);
      return Selected
    } catch (error) {
  
    }
  }
  
  const create = async (Id_Solicitud,Codigo_Solicitud,Desprendible_Pago1,Desprendible_Pago2,Desprendible_Pago3,Fecha_Solicitud,Estado_Solicitud,Aprobacion_Inquilino,Carta_Laboral,FKCedula_Inquilino,FKCodigo_Contrato) => {
    try {
      let created = await db.ContractRequest.create({
        Id_Solicitud,
        Codigo_Solicitud,
        Desprendible_Pago1,
        Desprendible_Pago2,
        Desprendible_Pago3,
        Fecha_Solicitud,
        Estado_Solicitud,
        Aprobacion_Inquilino,
        Carta_Laboral,
        FKCedula_Inquilino,
        FKCodigo_Contrato
      });
      return created
    } catch (error) {
      throw {status: 400, message: error.message || "failed to create admin"};
    }
  }
  
  const update = async (id,Id_Solicitud,Codigo_Solicitud,Desprendible_Pago1,Desprendible_Pago2,Desprendible_Pago3,Fecha_Solicitud,Estado_Solicitud,Aprobacion_Inquilino,Carta_Laboral,FKCedula_Inquilino,FKCodigo_Contrato) => {
    try {
      const updated = await db.ContractRequest.update({
        Id_Solicitud,
        Codigo_Solicitud,
        Desprendible_Pago1,
        Desprendible_Pago2,
        Desprendible_Pago3,
        Fecha_Solicitud,
        Estado_Solicitud,
        Aprobacion_Inquilino,
        Carta_Laboral,
        FKCedula_Inquilino,
        FKCodigo_Contrato
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
      let deleted = await db.ContractRequest.destroy({
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
  
  
  