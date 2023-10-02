const housingService = require('../services/housingService');

const getAll = async (req, res) => {
    try {
      const housings  = await housingService.getAll();
      res.status(200).send({status:"OK", data: housings});
    } catch (error) {
      res.status(500).json({ error: error.message }); 
    }
  }

  const get = async (req, res) => {
    let  id = req.params.id;
    try {
      const housing = await housingService.get(id);
      res.status(200).send({status:"OK", data:housing})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const create = async (req, res) =>  {
    const data = req.body;
    try {
      const nuevoAdministrador = await housingService.create(data.Codigo_Vivienda, data.Ubicacion, data.Cant_Cuartos,data.Caracteristicas_Extra ,data.Tiene_Servicios_Incluidos ,data.Area_Inmueble,data.Precio,data.Descripcion,data.Tiene_Garaje_Moto,data.Tiene_Garaje_Carro,data.Tiene_Patio,data.Cant_Baños,data.Precio_Venta);
      res.status(201).json(nuevoAdministrador);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const update = async (req, res) =>  {
    let id  = req.params.id;
    const data = req.body;
    try {
      const updated = await housingService.update(id,data.Codigo_Vivienda, data.Ubicacion, data.Cant_Cuartos,data.Caracteristicas_Extra ,data.Tiene_Servicios_Incluidos ,data.Area_Inmueble,data.Precio,data.Descripcion,data.Tiene_Garaje_Moto,data.Tiene_Garaje_Carro,data.Tiene_Patio,data.Cant_Baños,data.Precio_Venta);
      res.status(200).send({status:"OK", data:updated})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const destroy = async (req, res) =>  {
    let id = req.params.id;
    try {
      const deletedHousing = await housingService.destroy(id);
      res.status(204).send({status:"OK",data:deletedHousing});
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

