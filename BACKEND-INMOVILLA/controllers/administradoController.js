// controllers/administradorController.js
const administradorService = require('../services/administradorService');

class AdministradorController {
  async getAll(req, res) {
    try {
      const administradores = await administradorService.getAllAdministradores();
      res.json(administradores);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAdministrador(req, res) {
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

  async createAdministrador(req, res) {
    const data = req.body;
    try {
      const nuevoAdministrador = await administradorService.createAdministrador(data);
      res.status(201).json(nuevoAdministrador);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateAdministrador(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      const administradorActualizado = await administradorService.updateAdministrador(id, data);
      res.json(administradorActualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteAdministrador(req, res) {
    const { id } = req.params;
    try {
      await administradorService.deleteAdministrador(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new AdministradorController();
