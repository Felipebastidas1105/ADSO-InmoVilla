// controllers/agenteController.js
const agenteService = require('../services/agenteService');

class AgenteController {
  async getAll(req, res) {
    try {
      const agentes = await agenteService.getAllAgentes();
      res.json(agentes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAgente(req, res) {
    const { id } = req.params;
    try {
      const agente = await agenteService.getAgenteById(id);
      if (!agente) {
        return res.status(404).json({ message: 'Agente no encontrado' });
      }
      res.json(agente);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createAgente(req, res) {
    const data = req.body;
    try {
      const nuevoAgente = await agenteService.createAgente(data);
      res.status(201).json(nuevoAgente);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateAgente(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      const agenteActualizado = await agenteService.updateAgente(id, data);
      res.json(agenteActualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteAgente(req, res) {
    const { id } = req.params;
    try {
      await agenteService.deleteAgente(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new AgenteController();
