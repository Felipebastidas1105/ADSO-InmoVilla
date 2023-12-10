const favoriteService = require('../services/favoriteService');

const getAll = async (req, res) => {
    try {
      const favoriteServices  = await favoriteService.getAll();
      res.status(200).send({status:"OK", data: favoriteServices});
    } catch (error) {
      res.status(500).json({ error: error.message }); 
    }
  }

  const get = async (req, res) => {
    let  id = req.params.id;
    try {
      const favoriteServices = await favoriteService.get(id);
      res.status(200).send({status:"OK", data:favoriteServices})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const create = async (req, res) =>  {
    const data = req.body;
    try {
      const newfavoriteService = await favoriteService.create(data.UserId,data.HomeId);
      res.status(201).json(newfavoriteService);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const update = async (req, res) =>  {
    let id  = req.params.id;
    const data = req.body;
    try {
      const updated = await favoriteService.update(id, data.UserId,data.HomeId);
      res.status(200).send({status:"OK", data:updated})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const destroy = async (req, res) =>  {
    let id = req.params.id;
    try {
      const deletedfavorite = await favoriteService.destroy(id);
      res.status(204).send({status:"OK",data:deletedfavorite});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

module.exports = {
  getAll,
  get,
  create,
  update,
  destroy
}

