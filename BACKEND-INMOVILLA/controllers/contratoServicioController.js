// controllers/contratoServicioController.js
const contratoServicioService = require('../services/contratoServicioService');

class ContratoServicioController {
  async getAll(req, res) {
    try {
      const contratosServicio = await contratoServicioService.getAllContratosServicio();
      res.json(contratosServicio);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getContratoServicio(req, res) {
    const { id } = req.params;
    try {
      const contratoServicio = await contratoServicioService.getContratoServicioById(id);
      if (!contratoServicio) {
        return res.status(404).json({ message: 'Contrato de servicio no encontrado' });
      }
      res.json(contratoServicio);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createContratoServicio(req, res) {
    const data = req.body;
    try {
      const nuevoContratoServicio = await contratoServicioService.createContratoServicio(data);
      res.status(201).json(nuevoContratoServicio);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateContratoServicio(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      const contratoServicioActualizado = await contratoServicioService.updateContratoServicio(id, data);
      res.json(contratoServicioActualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteContratoServicio(req, res) {
    const { id } = req.params;
    try {
      await contratoServicioService.deleteContratoServicio(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ContratoServicioController();
