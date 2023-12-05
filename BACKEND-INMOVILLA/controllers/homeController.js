const cloudinary = require("cloudinary").v2;
const { v4: uuidv4 } = require("uuid");
const HomeService = require("../services/homeService");
const path = require("path");
const axios = require("axios");
const fs = require("fs");

cloudinary.config({
  cloud_name: "dxnsmwmgv",
  api_key: "932146274449616",
  api_secret: "fXljMMXVvDRFHmO9179G1NZS1AA",
});

const getAll = async (req, res) => {
  try {
    const resul = await HomeService.getAll();
    res.status(200).send({ status: "OK", data: resul });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const get = async (req, res) => {
  let id = req.params.id;
  try {
    const administrador = await HomeService.get(id);
    res.status(200).send({ status: "OK", data: administrador });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const create = async (req, res) => {
  const data = req.body;
  const images = req.files;
  console.log(images);
  const Imagen = [];

  const casaId = FolderId();
  try {
    for (const image of images) {
      const uploadOptions = {
        folder: `homes/${casaId}`,
      };

      const bytes = image.buffer;
      const buffer = Buffer.from(bytes);

      const response = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(uploadOptions, (err, result) => {
            if (err) {
              reject(err);
            }
            resolve(result);
          })
          .end(buffer);
      });

      console.log(response);

      const imagen = {
        id: response.public_id,
        url: response.secure_url,
      };

      console.log("imagen_url" + imagen);
      Imagen.push(imagen);
    }

    const nuevoAdministrador = await HomeService.create(
      data.Codigo_Vivienda,
      data.Direccion,
      data.Latitud,
      data.Longitud,
      data.Cant_Cuartos,
      data.Caracteristicas_Extra,
      data.Tiene_Servicios_Incluidos,
      data.Area_Inmueble,
      data.Precio,
      data.Descripcion,
      Imagen,
      data.Tiene_Garaje_Moto,
      data.Tiene_Garaje_Carro,
      data.Tiene_Patio,
      data.Cant_Baños,
      data.Precio_Venta,
      data.AgentId,
      data.TypehousingId,
      data.TypetargetId
    );
    console.log(nuevoAdministrador);

    res.status(201).json(nuevoAdministrador);
  } catch (error) {
    console.error("Error en el bloque catch:", error);
    res.status(500).json({ error: error.message });
  }
};

function FolderId() {
  const uuid = uuidv4();
  return `Home-${uuid}`;
}

// const create = async (req, res) => {
//   const data = req.body;
//   const files = req.files;
//   const Imagen = []; // Cambiado a un array en lugar de un objeto

//   console.log(files);

//   try {
//     for (const file of files) {
//       const filePath = path.join(__dirname, "..", "uploads", file.filename);
//       const response = await cloudinary.uploader.upload(filePath);
//       // Crea un nuevo objeto con el identificador único y la URL segura
//       const imagen = {
//         id: response.public_id,
//         url: response.secure_url,
//       };

//       // Agrega el objeto al array Imagen
//       Imagen.push(imagen);
//     }

//     console.log(Imagen);

//     const nuevoAdministrador = await HomeService.create(
//       data.Codigo_Vivienda,
//       data.Direccion,
//       data.Latitud,
//       data.Longitud,
//       data.Cant_Cuartos,
//       data.Caracteristicas_Extra,
//       data.Tiene_Servicios_Incluidos,
//       data.Area_Inmueble,
//       data.Precio,
//       data.Descripcion,
//       Imagen, // Ahora pasamos el array Imagen directamente
//       data.Tiene_Garaje_Moto,
//       data.Tiene_Garaje_Carro,
//       data.Tiene_Patio,
//       data.Cant_Baños,
//       data.Precio_Venta,
//       data.AgentId,
//       data.TypehousingId,
//       data.TypetargetId
//     );

//     res.status(201).json(nuevoAdministrador);
//   } catch (error) {
//     // Maneja el error de carga de imagen y otros errores aquí
//     console.error("Error en el bloque catch:", error);
//     res.status(500).json({ error: error.message });
//   }
// };

const update = async (req, res) => {
  let id = req.params.id;
  const data = req.body;
  const files = req.files;
  const casaId = FolderId();
  try {
    const afterImages = await HomeService.get(id);

    if (afterImages.Imagen) {
      for (let img of afterImages.Imagen) {
        if (
          img.public_id &&
          !files.some((file) => file.public_id === img.public_id)
        ) {
          await cloudinary.uploader.destroy(img.public_id);
        }
      }
    }

    const Imagen = [];
    for (const file of files) {
      const bytes = file.buffer;
      const buffer = Buffer.from(bytes);

      const uploadOptions = {
        folder: `homes/${casaId}`,
      };
      const response = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(uploadOptions, (err, result) => {
            if (err) {
              reject(err);
            }
            resolve(result);
          })
          .end(buffer);
      });
      // const response = await cloudinary.uploader.upload(filePath);

      const imagen = {
        public_id: response.public_id,
        url: response.secure_url,
      };
      Imagen.push(imagen);
      // fs.unlinkSync(filePath);
    }

    // Actualiza las imágenes en la base de datos
    const administradorActualizado = await HomeService.update(
      id,
      data.Codigo_Vivienda,
      data.Direccion,
      data.Latitud,
      data.Longitud,
      data.Cant_Cuartos,
      data.Caracteristicas_Extra,
      data.Tiene_Servicios_Incluidos,
      data.Area_Inmueble,
      data.Precio,
      data.Descripcion,
      Imagen,
      data.Tiene_Garaje_Moto,
      data.Tiene_Garaje_Carro,
      data.Tiene_Patio,
      data.Cant_Baños,
      data.Precio_Venta
    );

    res.status(200).send({ status: "OK", data: administradorActualizado });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const destroy = async (req, res) => {
  let id = req.params.id;
  try {
    const homeInfo = await HomeService.get(id);
    const imagesToDelete = homeInfo.Imagen || [];

    for (let img of imagesToDelete) {
      if (img.public_id) {
        await cloudinary.uploader.destroy(img.public_id);
      }
    }

    const deletedAdmin = await HomeService.destroy(id);

    res.status(204).send({ status: "OK", data: deletedAdmin });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAll,
  get,
  create,
  update,
  destroy,
};
