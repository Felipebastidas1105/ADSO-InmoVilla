const typeTargetServices = require('../services/typeTargetServices');

const getAll = async (req, res) => {
    try {
      const typeTargets  = await typeTargetServices.getAll();
      res.status(200).send({status:"OK", data: typeTargets});
    } catch (error) {
      res.status(500).json({ error: error.message }); 
    }
  }

  const get = async (req, res) => {
    let  id = req.params.id;
    try {
      const typeTarget = await typeTargetServices.get(id);
      res.status(200).send({status:"OK", data:typeTarget})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const create = async (req, res) =>  {
    const data = req.body;
    try {
      const newTypeTarget = await typeTargetServices.create(data.codTipoVivienda,data.nombre);
      res.status(201).json(newTypeTarget);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const update = async (req, res) =>  {
    let id  = req.params.id;
    const data = req.body;
    try {
      const updated = await typeTargetServices.update(id, data.codTipoVivienda, data.nombre);
      res.status(200).send({status:"OK", data:updated})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const destroy = async (req, res) =>  {
    let id = req.params.id;
    try {
      const deletedTypeTarget = await typeTargetServices.destroy(id);
      res.status(204).send({status:"OK",data:deletedTypeTarget});
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