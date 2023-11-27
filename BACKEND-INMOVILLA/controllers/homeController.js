// controllers/administradorController.js
const cloudinary = require('cloudinary').v2;
// const {cloudinary} = require('cloudinary')

const HomeService = require('../services/homeService');
const path = require("path");

cloudinary.config({ 
  cloud_name: 'dxnsmwmgv', 
  api_key: '932146274449616', 
  api_secret: 'fXljMMXVvDRFHmO9179G1NZS1AA' 
});
// const watermarkImage = 'https://res.cloudinary.com/dxnsmwmgv/image/upload/v1699320470/ekpmncyy9bp5py5iadfc.webp';

// const imageSize = { width: 200, height: 200 }; 
// const watermarkSize = {
//   width: imageSize.width * 0.1, 
//   height: imageSize.height * 0.1,
// };
// const overlayOptions = {
//     overlay: watermarkImage,
//     width: watermarkSize.width,
//     height: watermarkSize.height,
//     gravity: 'south_east',
//     opacity: 80, 
//   };

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

  const create = async (req, res) => {
    const data = req.body;
    const files = req.files;
    const Imagen = [];
    try {
      for (const file of files) {
        const filePath = path.join(__dirname, "..", "uploads", file.filename);
        const response = await cloudinary.uploader.upload(filePath);

        console.log(response)
        Imagen.push(response.secure_url)
      }
      console.log(Imagen)
      
      const nuevoAdministrador = await HomeService.create(
        data.Codigo_Vivienda,
        data.Direccion,data.Latitud,data.Longitud,
        data.Cant_Cuartos,
        data.Caracteristicas_Extra,
        data.Tiene_Servicios_Incluidos,
        data.Tipo_Objeto,
        data.Area_Inmueble,
        data.Precio,
        data.Descripcion,
        Imagen,
        data.Tiene_Garaje_Moto,
        data.Tipo_Vivienda,
        data.Tiene_Garaje_Carro,
        data.Tiene_Patio,
        data.Cant_Baños,
        data.Precio_Venta,
        data.AgentId,
        data.TypehousingId,
        data.TypetargetId
      );
  
      res.status(201).json(nuevoAdministrador);
    } catch (error) {
      // Maneja el error de carga de imagen y otros errores aquí
      console.error("Error en el bloque catch:", error);
      res.status(500).json({ error: error.message });
    }
  };
  

  const update= async (req, res) =>  {
    let id  = req.params.id;
    const data = req.body;
    try {
      const administradorActualizado = await HomeService.update(id,data.Codigo_Vivienda, data.Direccion,data.Latitud,data.Longitud, data.Cant_Cuartos, data.Caracteristicas_Extra, data.Tiene_Servicios_Incluidos, data.Tipo_Objeto, data.Area_Inmueble, data.Precio, data.Descripcion,data.Imagen, data.Tiene_Garaje_Moto,data.Tipo_Vivienda,data.Tiene_Garaje_Carro,data.Tiene_Patio,data.Cant_Baños,data.Precio_Venta);
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

