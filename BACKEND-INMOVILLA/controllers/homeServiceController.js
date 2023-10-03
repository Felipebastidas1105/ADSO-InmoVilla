const homeServiceService = require('../services/homeServiceService');

const getAll = async (req, res) => {
    try {
      const All  = await homeServiceService.getAll();
      res.status(200).send({status:"OK", data: All});
    } catch (error) {
      res.status(500).json({ error: error.message }); 
    }
  }

  const get = async (req, res) => {
    let  id = req.params.id;
    try {
      const Selected = await homeServiceService.get(id);
      res.status(200).send({status:"OK", data:Selected})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const create = async (req, res) =>  {
    const data = req.body;
    try {
      const created = await homeServiceService.create(data.ServiceId, data.HomeId);
      res.status(201).json(created);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const update = async (req, res) =>  {
    let id  = req.params.id;
    const data = req.body;
    try {
      const updated = await homeServiceService.update(id, data.ServiceId, data.HomeId);
      res.status(200).send({status:"OK", data:updated})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const destroy = async (req, res) =>  {
    let id = req.params.id;
    try {
      const deleted = await homeServiceService.destroy(id);
      res.status(204).send({status:"OK",data:deleted});
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

