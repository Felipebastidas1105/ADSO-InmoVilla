const { Router } = require("express");
const homeController = require("../../../controllers/homeController");
const multer = require("multer");
const { authenticateJWT, authorize } = require('../../../middlewares/auth')
const roles = require('../../../utils/roles')

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

router.get("/", authenticateJWT, authorize([roles["ADMIN"]]), homeController.getAll);
router.get("/:id", authenticateJWT, authorize([roles["ADMIN"]]), homeController.get);
router.post("/", authenticateJWT, authorize([roles["ADMIN"]]), upload.array("Images"), homeController.create);
router.put("/:id", authenticateJWT, authorize([roles["ADMIN"]]), homeController.update);
router.delete("/:id", authenticateJWT, authorize([roles["ADMIN"]]), homeController.destroy);

module.exports = router;
