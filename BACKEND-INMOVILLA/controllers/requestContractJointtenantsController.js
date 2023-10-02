const requestContractJointtenantsService = require('../services/requestContractJointtenantsService');

const getAll = async (req, res) => {
    try {
      const agents  = await requestContractJointtenantsService.getAll();
      res.status(200).send({status:"OK", data: agents});
    } catch (error) {
      res.status(500).json({ error: error.message }); 
    }
  }

  const get = async (req, res) => {
    let  id = req.params.id;
    try {
      const agent = await requestContractJointtenantsService.get(id);
      res.status(200).send({status:"OK", data:agent})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const create = async (req, res) =>  {
    const data = req.body;
    try {
      const nuevoAdministrador = await requestContractJointtenantsService.create(data.Nombre_Agente, data.Email_Agente, data.Telefono_Agente);
      res.status(201).json(nuevoAdministrador);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const update = async (req, res) =>  {
    let id  = req.params.id;
    const data = req.body;
    try {
      const updated = await requestContractJointtenantsService.update(id, data.Nombre_Agente, data.Email_Agente, data.Telefono_Agente);
      res.status(200).send({status:"OK", data:updated})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const destroy = async (req, res) =>  {
    let id = req.params.id;
    try {
      const deletedAdmin = await requestContractJointtenantsService.destroy(id);
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

