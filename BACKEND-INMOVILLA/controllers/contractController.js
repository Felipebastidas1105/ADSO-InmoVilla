const contractService = require('../services/contractService');

const getAll = async (req, res) => {
    try {
      const resp  = await contractService.getAll();
      res.status(200).send({status:"OK", data: resp});
    } catch (error) {
      res.status(500).json({ error: error.message }); 
    }
  }

  const get = async (req, res) => {
    let  id = req.params.id;
    try {
      const contract = await contractService.get(id);
      res.status(200).send({status:"OK", data:contract})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const create = async (req, res) =>  {
    const data = req.body;
    try {
      const newContract = await contractService.create(data.Fecha_Ini,data.Fecha_Fin,data.Vigencia,data.Cantidad_Habitantes,data.Precio,data.Fecha_Pago,data.Estado_Contrato,data.Servicios_Incluidos,data.CodigoViviendaId,data.OwnerContractId);
      res.status(201).json(newContract);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const update = async (req, res) =>  {
    let id  = req.params.id;
    const data = req.body;
    try {
      const updated = await contractService.update(id, data.Fecha_Ini,data.Fecha_Fin,data.Vigencia,data.Cantidad_Habitantes,data.Precio,data.Fecha_Pago,data.Estado_Contrato,data.Servicios_Incluidos);
      res.status(200).send({status:"OK", data:updated})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const destroy = async (req, res) =>  {
    let id = req.params.id;
    try {
      const deletedContract = await contractService.destroy(id);
      res.status(204).send({status:"OK",data:deletedContract});
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

