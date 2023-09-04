
const viviendaService = require('../services/viviendaService');

class ViviendaController {
  async getAll(req, res) {
    try {
      const viviendas = await viviendaService.getAllViviendas();
      res.json(viviendas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getVivienda(req, res) {
    const { id } = req.params;
    try {
      const vivienda = await viviendaService.getViviendaById(id);
      if (!vivienda) {
        return res.status(404).json({ message: 'Vivienda no encontrada' });
      }
      res.json(vivienda);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createVivienda(req, res) {
    const data = req.body;
    try {
      const nuevaVivienda = await viviendaService.createVivienda(data);
      res.status(201).json(nuevaVivienda);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateVivienda(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      const viviendaActualizada = await viviendaService.updateVivienda(id, data);
      res.json(viviendaActualizada);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteVivienda(req, res) {
    const { id } = req.params;
    try {
      await viviendaService.deleteVivienda(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ViviendaController();
