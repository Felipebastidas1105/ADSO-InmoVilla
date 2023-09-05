const jointTenantService = require('../services/jointTenantService');

const getAll = async (req, res) => {
    try {
      const getall  = await jointTenantService.getAll();
      res.status(200).send({status:"OK", data: getall});
    } catch (error) {
      res.status(500).json({ error: error.message }); 
    }
  }

  const get = async (req, res) => {
    let  id = req.params.id;
    try {
      const get = await jointTenantService.get(id);
      res.status(200).send({status:"OK", data:get})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const create = async (req, res) =>  {
    const data = req.body;
    try {
      const create = await jointTenantService.create(data.Cedula, data.Nombre, data.Fecha_Nac, data.Telefono,data.Email);
      res.status(200).send({status:"OK", data:create})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const update = async (req, res) =>  {
    let id  = req.params.id;
    const data = req.body;
    try {
      const updated = await jointTenantService.update(id, data.Cedula, data.Nombre, data.Fecha_Nac,data.Telefono,data.Email);
      res.status(200).send({status:"OK", data:updated})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const destroy = async (req, res) =>  {
    let id = req.params.id;
    try {
      const deletedAdmin = await jointTenantService.destroy(id);
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

