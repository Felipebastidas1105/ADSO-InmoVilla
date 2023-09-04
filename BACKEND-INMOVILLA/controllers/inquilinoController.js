// controllers/inquilinoController.js
const inquilinoService = require('../services/inquilinoService');

class InquilinoController {
  async getAll(req, res) {
    try {
      const inquilinos = await inquilinoService.getAllInquilinos();
      res.json(inquilinos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getInquilinoContrato(req, res) {
    const { id } = req.params;
    try {
      const inquilino = await inquilinoService.getInquilinoById(id);
      if (!inquilino) {
        return res.status(404).json({ message: 'Inquilino no encontrado' });
      }
      res.json(inquilino);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
    const data = req.body;
    try {
      const nuevoInquilino = await inquilinoService.createInquilino(data);
      res.status(201).json(nuevoInquilino);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateInquilinoContrato(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      const inquilinoActualizado = await inquilinoService.updateInquilino(id, data);
      res.json(inquilinoActualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteInquilinoContrato(req, res) {
    const { id } = req.params;
    try {
      await inquilinoService.deleteInquilino(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new InquilinoController();
