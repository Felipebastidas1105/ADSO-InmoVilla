const ownerService = require('../services/ownerService');

const getAll = async (req, res) => {
    try {
      const ownerServices  = await ownerService.getAll();
      res.status(200).send({status:"OK", data: ownerServices});
    } catch (error) {
      res.status(500).json({ error: error.message }); 
    }
  }

  const get = async (req, res) => {
    let  id = req.params.id;
    try {
      const ownerServices = await ownerService.get(id);
      res.status(200).send({status:"OK", data:ownerServices})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const create = async (req, res) =>  {
    const data = req.body;
    try {
      const newownerService = await ownerService.create(data.Cedula_Dueño, data.Nombre, data.Fecha_Nac_Dueño,data.Telefono_Dueño,data.Estado_Dueño,data.Email_Dueño,data.Direccion_Dueño);
      res.status(201).json(newownerService);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const update = async (req, res) =>  {
    let id  = req.params.id;
    const data = req.body;
    try {
      const updated = await ownerService.update(id, data.Cedula_Dueño, data.Nombre, data.Fecha_Nac_Dueño,data.Telefono_Dueño,data.Estado_Dueño,data.Email_Dueño,data.Direccion_Dueño);
      res.status(200).send({status:"OK", data:updated})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const destroy = async (req, res) =>  {
    let id = req.params.id;
    try {
      const deletedOwner = await ownerService.destroy(id);
      res.status(204).send({status:"OK",data:deletedOwner});
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

