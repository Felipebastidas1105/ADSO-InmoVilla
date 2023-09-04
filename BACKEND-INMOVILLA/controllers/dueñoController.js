const { dueño } = require('../mdels'); 
const { Op } = require('sequelize');

module.exports = {
  async createOwner(req, res) {
    try {
      const nuevoDueño = await dueño.create(req.body);
      return res.status(201).json(nuevoDueño);
    } catch (error) {
      return res.status(400).json({ error: 'No se pudo crear el dueño' });
    }
  },

  // Método para obtener todos los dueños
  async getAll(req, res) {
    try {
      const dueños = await dueño.findAll();
      return res.status(200).json(dueños);
    } catch (error) {
      return res.status(400).json({ error: 'No se pudieron obtener los dueños' });
    }
  },

  // Método para obtener un dueño por su ID
  async getOwner(req, res) {
    const { id } = req.params;
    try {
      const dueñoEncontrado = await dueño.findByPk(id);
      if (!dueñoEncontrado) {
        return res.status(404).json({ error: 'Dueño no encontrado' });
      }
      return res.status(200).json(dueñoEncontrado);
    } catch (error) {
      return res.status(400).json({ error: 'No se pudo obtener el dueño' });
    }
  },

  // Método para actualizar un dueño por su ID
  async updateOwner(req, res) {
    const { id } = req.params;
    try {
      const [rowsUpdated] = await dueño.update(req.body, {
        where: { id },
      });
      if (rowsUpdated === 0) {
        return res.status(404).json({ error: 'Dueño no encontrado' });
      }
      return res.status(200).json({ message: 'Dueño actualizado correctamente' });
    } catch (error) {
      return res.status(400).json({ error: 'No se pudo actualizar el dueño' });
    }
  },

  // Método para eliminar un dueño por su ID
  async deleteOwner(req, res) {
    const { id } = req.params;
    try {
      const rowsDeleted = await dueño.destroy({
        where: { id },
      });
      if (rowsDeleted === 0) {
        return res.status(404).json({ error: 'Dueño no encontrado' });
      }
      return res.status(204).json();
    } catch (error) {
      return res.status(400).json({ error: 'No se pudo eliminar el dueño' });
    }
  },
};

module.exports={
  createOwner,getAll,getOwner,updateOwner,deleteOwner,
};
