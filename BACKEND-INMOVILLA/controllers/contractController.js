const contractService = require("../services/contractService");
const cloudinary = require("cloudinary").v2;
const path = require("path");

cloudinary.config({
  cloud_name: "dxnsmwmgv",
  api_key: "932146274449616",
  api_secret: "fXljMMXVvDRFHmO9179G1NZS1AA",
});

const getAll = async (req, res) => {
  try {
    const resp = await contractService.getAll();
    res.status(200).send({ status: "OK", data: resp });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const get = async (req, res) => {
  let id = req.params.id;
  try {
    const contract = await contractService.get(id);
    res.status(200).send({ status: "OK", data: contract });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const create = async (req, res) => {
  const data = req.body;
  const file = req.file;

  try {
    const filePath = path.join(__dirname, "..", "uploads", file.filename);

    const uploadOptions = {
      folder: `Constancias`,
    };

    const response = await cloudinary.uploader.upload(filePath, uploadOptions);
    const Constancia = {
      id: response.public_id,
      url: response.secure_url,
    };

    const newContract = await contractService.create(
      data.Fecha_Ini,
      data.Fecha_Fin,
      data.Vigencia,
      data.Cantidad_Habitantes,
      data.Precio,
      data.Fecha_Pago,
      data.Estado_Contrato,
      data.Servicios_Incluidos,
      Constancia,
      data.HomeId,
      data.OwnerContractId
    );
    // fs.unlinkSync(filePath);
    res.status(201).json(newContract);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  let id = req.params.id;
  const data = req.body;
  try {
    const contratoExistente = await contractService.get(id);
    const imagenAnteriorPublicId = contratoExistente.Constancia.id;

    const file = req.file;
    const filePath = path.join(__dirname, "..", "uploads", file.filename);
    const uploadOptions = {
      folder: `Constancias`,
    };
    const response = await cloudinary.uploader.upload(filePath, uploadOptions);

    const nuevaConstancia = {
      id: response.public_id,
      url: response.secure_url,
    };
    const updated = await contractService.update(
      id,
      data.Fecha_Ini,
      data.Fecha_Fin,
      data.Vigencia,
      data.Cantidad_Habitantes,
      data.Precio,
      data.Fecha_Pago,
      data.Estado_Contrato,
      data.Servicios_Incluidos,
      nuevaConstancia
    );

    // fs.unlinkSync(filePath);

    await cloudinary.uploader.destroy(imagenAnteriorPublicId);

    res.status(200).send({ status: "OK", data: updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const destroy = async (req, res) => {
  let id = req.params.id;
  try {
    const deletedContract = await contractService.destroy(id);
    res.status(204).send({ status: "OK", data: deletedContract });
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
