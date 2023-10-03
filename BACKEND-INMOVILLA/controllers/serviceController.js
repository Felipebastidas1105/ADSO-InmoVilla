const serviceService = require('../services/serviceService');

const getAll = async (req, res) => {
    try {
      const serviceServices  = await serviceService.getAll();
      res.status(200).send({status:"OK", data: serviceServices});
    } catch (error) {
      res.status(500).json({ error: error.message }); 
    }
  }

  const get = async (req, res) => {
    let  id = req.params.id;
    try {
      const serviceServices = await serviceService.get(id);
      res.status(200).send({status:"OK", data:serviceServices})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const create = async (req, res) =>  {
    const data = req.body;
    try {
      const nuevoAdministrador = await serviceService.create(data.Id_Servicios, data.Nombre_Servicios);
      res.status(201).json(nuevoAdministrador);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const update = async (req, res) =>  {
    let id  = req.params.id;
    const data = req.body;
    try {
      const updated = await serviceService.update(id, data.Id_Servicios, data.Nombre_Servicios);
      res.status(200).send({status:"OK", data:updated})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const destroy = async (req, res) =>  {
    let id = req.params.id;
    try {
      const deletedService = await serviceService.destroy(id);
      res.status(204).send({status:"OK",data:deletedService});
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

