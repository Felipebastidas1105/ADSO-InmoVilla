// controllers/coarrendatarioController.js
const coarrendatarioService = require('../services/coarrendatarioService');

class CoarrendatarioController {
  async getAll(req, res) {
    try {
      const coarrendatarios = await coarrendatarioService.getAllCoarrendatarios();
      res.json(coarrendatarios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getCoarrendatario(req, res) {
    const { id } = req.params;
    try {
      const coarrendatario = await coarrendatarioService.getCoarrendatarioById(id);
      if (!coarrendatario) {
        return res.status(404).json({ message: 'Coarrendatario no encontrado' });
      }
      res.json(coarrendatario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createCoarrendatario(req, res) {
    const data = req.body;
    try {
      const nuevoCoarrendatario = await coarrendatarioService.createCoarrendatario(data);
      res.status(201).json(nuevoCoarrendatario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateCoarrendatario(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      const coarrendatarioActualizado = await coarrendatarioService.updateCoarrendatario(id, data);
      res.json(coarrendatarioActualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteCoarrendatario(req, res) {
    const { id } = req.params;
    try {
      await coarrendatarioService.deleteCoarrendatario(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new CoarrendatarioController();
