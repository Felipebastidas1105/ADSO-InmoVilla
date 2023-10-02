const typeHousingServices = require('../services/typeHousingServices');

const getAll = async (req, res) => {
    try {
      const typeHousings  = await typeHousingServices.getAll();
      res.status(200).send({status:"OK", data: typeHousings});
    } catch (error) {
      res.status(500).json({ error: error.message }); 
    }
  }

  const get = async (req, res) => {
    let  id = req.params.id;
    try {
      const typeHousing = await typeHousingServices.get(id);
      res.status(200).send({status:"OK", data:typeHousing})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const create = async (req, res) =>  {
    const data = req.body;
    try {
      const newTypeHousing = await typeHousingServices.create(data.CodTipoVivienda,data.Nombre);
      res.status(201).json(newTypeHousing);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const update = async (req, res) =>  {
    let id  = req.params.id;
    const data = req.body;
    try {
      const updated = await typeHousingServices.update(id, data.CodTipoVivienda, data.Nombre);
      res.status(200).send({status:"OK", data:updated})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const destroy = async (req, res) =>  {
    let id = req.params.id;
    try {
      const deletedTypeHousing = await typeHousingServices.destroy(id);
      res.status(204).send({status:"OK",data:deletedTypeHousing});
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

