const tenantService = require('../services/tenantService');

const getAll = async (req, res) => {
    try {
      const tenantServicess  = await tenantService.getAll();
      res.status(200).send({status:"OK", data: tenantServicess});
    } catch (error) {
      res.status(500).json({ error: error.message }); 
    }
  }

  const get = async (req, res) => {
    let  id = req.params.id;
    try {
      const tenantServices = await tenantService.get(id);
      res.status(200).send({status:"OK", data:tenantServices})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const create = async (req, res) =>  {
    const data = req.body;
    try {
      const newTenant = await tenantService.create(data.Cedula, data.Nombre, data.Fecha_Nac,data.Telefono,data.Email,data.Estado,data.Direccion);
      res.status(201).json(newTenant);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const update = async (req, res) =>  {
    let id  = req.params.id;
    const data = req.body;
    try {
      const updated = await tenantService.update(id, data.Cedula, data.Nombre, data.Fecha_Nac,data.Telefono,data.Email,data.Estado,data.Direccion);
      res.status(200).send({status:"OK", data:updated})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const destroy = async (req, res) =>  {
    let id = req.params.id;
    try {
      const deletedTenant = await tenantService.destroy(id);
      res.status(204).send({status:"OK",data:deletedTenant});
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

