// controllers/administradorController.js
const administradorService = require('../services/administratorService');


  const getAll = async (req, res) => {
    try {
      const resul  = await administradorService.getAll();
      res.status(200).send({status:"OK", data: resul});
    } catch (error) {
      res.status(500).json({ error: error.message }); 
    }
  }

  const get= async (req, res) => {
    let  id = req.params.adminId;
    try {
      const administrador = await administradorService.get(id);
      res.status(200).send({status:"OK", data:administrador})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const create = async (req, res) =>  {
    const data = req.body;
    try {
      const nuevoAdministrador = await administradorService.create(data.Nombre_Admin, data.Email_Admin, data.Telefono_Admin);
      res.status(201).json(nuevoAdministrador);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const update= async (req, res) =>  {
    let id  = req.params.adminId;
    const data = req.body;
    try {
      const administradorActualizado = await administradorService.update(id, data.Nombre_Admin, data.Email_Admin, data.Telefono_Admin);
      res.status(200).send({status:"OK", data:administradorActualizado})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const destroy = async (req, res) =>  {
    let id = req.params.adminId;
    try {
      const deletedAdmin = await administradorService.destroy(id);
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

