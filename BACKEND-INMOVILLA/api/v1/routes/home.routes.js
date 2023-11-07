const { Router } = require("express");
const homeController = require("../../../controllers/homeController");
const multer = require("multer");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const fecha = new Date().toISOString().replace(/[^0-9]/g, "");
    const nuevoNombre = `${fecha}_${file.originalname}`;
    cb(null, nuevoNombre);
  },
});

const upload = multer({ storage: storage });

const router = Router();

router.get("/", homeController.getAll);
router.get("/:id", homeController.get);
router.post("/", upload.single("Imagen"), homeController.create);
router.put("/:id", homeController.update);
router.delete("/:id", homeController.destroy);

module.exports = router;
