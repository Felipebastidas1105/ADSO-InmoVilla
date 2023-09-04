// controllers/pagoArriendoController.js
const pagoArriendoService = require('../services/pagoArriendoService');

class PagoArriendoController {
  async getAll(req, res) {
    try {
      const pagosArriendo = await pagoArriendoService.getAllPagosArriendo();
      res.json(pagosArriendo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getPagoArriendo(req, res) {
    const { id } = req.params;
    try {
      const pagoArriendo = await pagoArriendoService.getPagoArriendoById(id);
      if (!pagoArriendo) {
        return res.status(404).json({ message: 'Pago de arriendo no encontrado' });
      }
      res.json(pagoArriendo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createPagoArriendo(req, res) {
    const data = req.body;
    try {
      const nuevoPagoArriendo = await pagoArriendoService.createPagoArriendo(data);
      res.status(201).json(nuevoPagoArriendo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updatePagoArriendo(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      const pagoArriendoActualizado = await pagoArriendoService.updatePagoArriendo(id, data);
      res.json(pagoArriendoActualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deletePagoArriendo(req, res) {
    const { id } = req.params;
    try {
      await pagoArriendoService.deletePagoArriendo(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new PagoArriendoController();
