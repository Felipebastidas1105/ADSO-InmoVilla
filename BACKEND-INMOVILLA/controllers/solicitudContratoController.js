// controllers/solicitudContratoController.js
const solicitudContratoService = require('../services/solicitudContratoService');

class SolicitudContratoController {
  async getAll(req, res) {
    try {
      const solicitudesContrato = await solicitudContratoService.getAllSolicitudesContrato();
      res.json(solicitudesContrato);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getSolicitudContrato(req, res) {
    const { id } = req.params;
    try {
      const solicitudContrato = await solicitudContratoService.getSolicitudContratoById(id);
      if (!solicitudContrato) {
        return res.status(404).json({ message: 'Solicitud de contrato no encontrada' });
      }
      res.json(solicitudContrato);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createSolicitudContrato(req, res) {
    const data = req.body;
    try {
      const nuevaSolicitudContrato = await solicitudContratoService.createSolicitudContrato(data);
      res.status(201).json(nuevaSolicitudContrato);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateSolicitudContrato(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      const solicitudContratoActualizada = await solicitudContratoService.updateSolicitudContrato(id, data);
      res.json(solicitudContratoActualizada);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteSolicitudContrato(req, res) {
    const { id } = req.params;
    try {
      await solicitudContratoService.deleteSolicitudContrato(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new SolicitudContratoController();
