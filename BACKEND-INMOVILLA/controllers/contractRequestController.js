const contractRequestService = require('../services/contractRequestService');

const getAll = async (req, res) => {
    try {
      const agents  = await contractRequestService.getAll();
      res.status(200).send({status:"OK", data: agents});
    } catch (error) {
      res.status(500).json({ error: error.message }); 
    }
  }

  const get = async (req, res) => {
    let  id = req.params.id;
    try {
      const agent = await contractRequestService.get(id);
      res.status(200).send({status:"OK", data:agent})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const create = async (req, res) =>  {
    const data = req.body;
    try {
      const nuevoAdministrador = await contractRequestService.create( data.Id_Solicitud, data.Codigo_Solicitud, data.Desprendible_Pago1, data.Desprendible_Pago2, data.Desprendible_Pago3, data.Fecha_Solicitud, data.Estado_Solicitud, data.Aprobacion_Inquilino, data.Carta_Laboral, data.FKCedula_Inquilino, data.FKCodigo_Contrato);
      res.status(201).json(nuevoAdministrador);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const update = async (req, res) =>  {
    let id  = req.params.id;
    const data = req.body;
    try {
      const updated = await contractRequestService.update(id,  data.Id_Solicitud, data.Codigo_Solicitud, data.Desprendible_Pago1, data.Desprendible_Pago2, data.Desprendible_Pago3, data.Fecha_Solicitud, data.Estado_Solicitud, data.Aprobacion_Inquilino, data.Carta_Laboral, data.FKCedula_Inquilino, data.FKCodigo_Contrato);
      res.status(200).send({status:"OK", data:updated})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const destroy = async (req, res) =>  {
    let id = req.params.id;
    try {
      const deletedAdmin = await contractRequestService.destroy(id);
      res.status(204).send({status:"OK",data:deletedAdmin});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

module.exports = {
  getAll,
  get,
  create,
  update,
  destroy
}

