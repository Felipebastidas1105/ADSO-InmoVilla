const ownerContractService = require('../services/ownerContractService');

const getAll = async (req, res) => {
    try {
      const All  = await ownerContractService.getAll();
      res.status(200).send({status:"OK", data: All});
    } catch (error) {
      res.status(500).json({ error: error.message }); 
    }
  }

  const get = async (req, res) => {
    let  id = req.params.id;
    try {
      const Get = await ownerContractService.get(id);
      res.status(200).send({status:"OK", data:Get})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const create = async (req, res) =>  {
    const data = req.body;
    try {
      const nuevo = await ownerContractService.create(data.Codigo_Contrato_Dueño, data.Precio, data.Fecha_Inicio, data.Fecha_Fin, data.Estado_Contrato, data.Fecha_Pago, data.Vigencia, data.OwnerId);
      res.status(201).json(nuevo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const update = async (req, res) =>  {
    let id  = req.params.id;
    const data = req.body;
    try {
      const updated = await ownerContractService.update(id, data.Codigo_Contrato_Dueño, data.Precio, data.Fecha_Inicio, data.Fecha_Fin, data.Estado_Contrato, data.Fecha_Pago, data.Vigencia, data.OwnerId);
      res.status(200).send({status:"OK", data:updated})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const destroy = async (req, res) =>  {
    let id = req.params.id;
    try {
      const deleted = await ownerContractService.destroy(id);
      res.status(204).send({status:"OK",data:deleted});
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

