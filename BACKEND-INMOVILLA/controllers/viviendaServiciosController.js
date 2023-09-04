// controllers/viviendaServiciosController.js
const viviendaServiciosService = require('../services/viviendaServiciosService');

class ViviendaServiciosController {
  async getAll(req, res) {
    try {
      const viviendasServicios = await viviendaServiciosService.getAllViviendasServicios();
      res.json(viviendasServicios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getViviendaServicios(req, res) {
    const { id } = req.params;
    try {
      const viviendaServicios = await viviendaServiciosService.getViviendaServiciosById(id);
      if (!viviendaServicios) {
        return res.status(404).json({ message: 'Vivienda de servicios no encontrada' });
      }
      res.json(viviendaServicios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createViviendaServicios(req, res) {
    const data = req.body;
    try {
      const nuevaViviendaServicios = await viviendaServiciosService.createViviendaServicios(data);
      res.status(201).json(nuevaViviendaServicios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateViviendaServicios(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      const viviendaServiciosActualizada = await viviendaServiciosService.updateViviendaServicios(id, data);
      res.json(viviendaServiciosActualizada);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteViviendaServicios(req, res) {
    const { id } = req.params;
    try {
      await viviendaServiciosService.deleteViviendaServicios(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ViviendaServiciosController();
