// controllers/contratoController.js
const contratoService = require('../services/contratoService');

class ContratoController {
  async getAll(req, res) {
    try {
      const contratos = await contratoService.getAllContratos();
      res.json(contratos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getContrato(req, res) {
    const { id } = req.params;
    try {
      const contrato = await contratoService.getContratoById(id);
      if (!contrato) {
        return res.status(404).json({ message: 'Contrato no encontrado' });
      }
      res.json(contrato);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
    const data = req.body;
    try {
      const nuevoContrato = await contratoService.createContrato(data);
      res.status(201).json(nuevoContrato);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateContrato(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      const contratoActualizado = await contratoService.updateContrato(id, data);
      res.json(contratoActualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteContrato(req, res) {
    const { id } = req.params;
    try {
      await contratoService.deleteContrato(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ContratoController();
