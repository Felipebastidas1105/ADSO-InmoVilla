// controllers/administradorController.js
const administradorService = require('../services/administradorService');


  const getAll = async (req, res) => {
    try {
      const admins  = await administradorService.getAll();
      res.status(200).send({status:"OK", data: admins});
    } catch (error) {
      res.status(500).json({ error: error.message }); 
    }
  }

  const getAdministrador = async (req, res) => {
    const { id } = req.params;
    try {
      const administrador = await administradorService.getAdministradorById(id);
      if (!administrador) {
        return res.status(404).json({ message: 'Administrador no encontrado' });
      }
      res.json(administrador);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const createAdministrador = async (req, res) =>  {
    const data = req.body;
    try {
      const nuevoAdministrador = await administradorService.createAdministrador(data);
      res.status(201).json(nuevoAdministrador);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const updateAdministrador = async (req, res) =>  {
    const { id } = req.params;
    const data = req.body;
    try {
      const administradorActualizado = await administradorService.updateAdministrador(id, data);
      res.json(administradorActualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const deleteAdministrador = async (req, res) =>  {
    const { id } = req.params;
    try {
      await administradorService.deleteAdministrador(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

module.exports = {
  getAll,
  getAdministrador,
  createAdministrador,
  updateAdministrador,
  deleteAdministrador
}

