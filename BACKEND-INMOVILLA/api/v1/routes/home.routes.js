const { Router } = require("express");
const homeController = require("../../../controllers/homeController");
const multer = require("multer");
const verify = require('../../../middlewares/jwt')

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

router.get("/", /*verify,*/homeController.getAll);
router.get("/:id",/*verify,*/ homeController.get);
router.post("/", /*verify,*/upload.array("Images"), homeController.create);
router.put("/:id",/*verify,*/ homeController.update);
router.delete("/:id",/*verify,*/ homeController.destroy);

module.exports = router;
