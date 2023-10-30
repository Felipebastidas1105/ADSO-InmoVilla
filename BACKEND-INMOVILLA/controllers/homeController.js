// controllers/administradorController.js
const HomeService = require('../services/homeService');


  const getAll = async (req, res) => {
    try {
      const resul  = await HomeService.getAll();
      res.status(200).send({status:"OK", data: resul});
    } catch (error) {
      res.status(500).json({ error: error.message }); 
    }
  }

  const get= async (req, res) => {
    let  id = req.params.id;
    try {
      const administrador = await HomeService.get(id);
      res.status(200).send({status:"OK", data:administrador})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const create = async (req, res) =>  {
    const data = req.body;
    try {
      const nuevoAdministrador = await HomeService.create(data.Codigo_Vivienda, data.Ubicacion, data.Cant_Cuartos, data.Caracteristicas_Extra, data.Tiene_Servicios_Incluidos, data.Tipo_Objeto, data.Area_Inmueble, data.Precio, data.Descripcion,data.Imagen, data.Tiene_Garaje_Moto,data.Tipo_Vivienda,data.Tiene_Garaje_Carro,data.Tiene_Patio,data.Cant_Baños,data.Precio_Venta,data.AgentId,data.TypehousingId,data.TypetargetId);
      res.status(201).json(nuevoAdministrador);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const update= async (req, res) =>  {
    let id  = req.params.id;
    const data = req.body;
    try {
      const administradorActualizado = await HomeService.update(id,data.Codigo_Vivienda, data.Ubicacion, data.Cant_Cuartos, data.Caracteristicas_Extra, data.Tiene_Servicios_Incluidos, data.Tipo_Objeto, data.Area_Inmueble, data.Precio, data.Descripcion,data.Imagen, data.Tiene_Garaje_Moto,data.Tipo_Vivienda,data.Tiene_Garaje_Carro,data.Tiene_Patio,data.Cant_Baños,data.Precio_Venta);
      res.status(200).send({status:"OK", data:administradorActualizado})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const destroy = async (req, res) =>  {
    let id = req.params.id;
    try {
      const deletedAdmin = await HomeService.destroy(id);
      res.status(204).send({status:"OK",data:deletedAdmin});
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

