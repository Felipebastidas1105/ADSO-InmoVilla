// controllers/contratoDueñoController.js
const contratoDueñoService = require('../services/contratoDueñoService');

class ContratoDueñoController {
  async getAll(req, res) {
    try {
      const contratosDueño = await contratoDueñoService.getAllContratosDueño();
      res.json(contratosDueño);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getContratoDueño(req, res) {
    const { id } = req.params;
    try {
      const contratoDueño = await contratoDueñoService.getContratoDueñoById(id);
      if (!contratoDueño) {
        return res.status(404).json({ message: 'Contrato dueño no encontrado' });
      }
      res.json(contratoDueño);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createContratoDueño(req, res) {
    const data = req.body;
    try {
      const nuevoContratoDueño = await contratoDueñoService.createContratoDueño(data);
      res.status(201).json(nuevoContratoDueño);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateContratoDueño(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      const contratoDueñoActualizado = await contratoDueñoService.updateContratoDueño(id, data);
      res.json(contratoDueñoActualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteContratoDueño(req, res) {
    const { id } = req.params;
    try {
      await contratoDueñoService.deleteContratoDueño(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ContratoDueñoController();
