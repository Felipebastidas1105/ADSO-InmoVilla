// controllers/viviendaDueñoController.js
const viviendaDueñoService = require('../services/viviendaDueñoService');

class ViviendaDueñoController {
  async getAll(req, res) {
    try {
      const viviendasDueño = await viviendaDueñoService.getAllViviendasDueño();
      res.json(viviendasDueño);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getViviendaDueño(req, res) {
    const { id } = req.params;
    try {
      const viviendaDueño = await viviendaDueñoService.getViviendaDueñoById(id);
      if (!viviendaDueño) {
        return res.status(404).json({ message: 'Vivienda del dueño no encontrada' });
      }
      res.json(viviendaDueño);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createViviendaDueño(req, res) {
    const data = req.body;
    try {
      const nuevaViviendaDueño = await viviendaDueñoService.createViviendaDueño(data);
      res.status(201).json(nuevaViviendaDueño);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateViviendaDueño(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      const viviendaDueñoActualizada = await viviendaDueñoService.updateViviendaDueño(id, data);
      res.json(viviendaDueñoActualizada);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteViviendaDueño(req, res) {
    const { id } = req.params;
    try {
      await viviendaDueñoService.deleteViviendaDueño(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ViviendaDueñoController();
    