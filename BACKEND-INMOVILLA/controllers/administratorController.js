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

  const getAdministrator = async (req, res) => {
    let  id = req.params.adminId;
    try {
      const administrador = await administradorService.getAdministrator(id);
      res.status(200).send({status:"OK", data:administrador})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const createAdministrator = async (req, res) =>  {
    const data = req.body;
    try {
      const nuevoAdministrador = await administradorService.createAdministrator(data.Nombre_Admin, data.Email_Admin, data.Telefono_Admin);
      res.status(201).json(nuevoAdministrador);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const updateAdministrador = async (req, res) =>  {
    let id  = req.params.adminId;
    const data = req.body;
    try {
      const administradorActualizado = await administradorService.updateAdministrador(id, data.Nombre_Admin, data.Email_Admin, data.Telefono_Admin);
      res.status(200).send({status:"OK", data:administradorActualizado})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const deleteAdministrador = async (req, res) =>  {
    let id = req.params.adminId;
    try {
      const deletedAdmin = await administradorService.deleteAdministrador(id);
      res.status(204).send({status:"OK",data:deletedAdmin});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

module.exports = {
  getAll,
  getAdministrator,
  createAdministrator,
  updateAdministrador,
  deleteAdministrador
}

