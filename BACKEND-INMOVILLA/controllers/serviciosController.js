// controllers/serviciosController.js
const serviciosService = require('../services/serviciosService');

class ServiciosController {
  async getAll(req, res) {
    try {
      const servicios = await serviciosService.getAllServicios();
      res.json(servicios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getServicio(req, res) {
    const { id } = req.params;
    try {
      const servicio = await serviciosService.getServicioById(id);
      if (!servicio) {
        return res.status(404).json({ message: 'Servicio no encontrado' });
      }
      res.json(servicio);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createServicio(req, res) {
    const data = req.body;
    try {
      const nuevoServicio = await serviciosService.createServicio(data);
      res.status(201).json(nuevoServicio);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateServicio(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      const servicioActualizado = await serviciosService.updateServicio(id, data);
      res.json(servicioActualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteServicio(req, res) {
    const { id } = req.params;
    try {
      await serviciosService.deleteServicio(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ServiciosController();
