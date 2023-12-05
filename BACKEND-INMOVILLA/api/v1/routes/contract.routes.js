const { Router } = require("express");
const multer = require("multer");
const contractController = require("../../../controllers/contractController");
const { authenticateJWT, authorize } = require("../../../middlewares/auth");
const roles = require("../../../utils/roles");

const storage = multer.memoryStorage({
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

router.get(
  "/",
  //   authenticateJWT,
  //   authorize([roles["ADMIN"]]),
  contractController.getAll
);
router.get(
  "/:id",
  //   authenticateJWT,
  //   authorize([roles["ADMIN"]], [roles["AGENT"]], [roles["USER"]]),
  contractController.get
);
router.post(
  "/",
  upload.single("PDF"),
  //   authenticateJWT,
  //   authorize([roles["ADMIN"]], roles["AGENT"]),
  contractController.create
);
router.put(
  "/:id",
  upload.single("PDF"),
  //   authenticateJWT,
  //   authorize([roles["ADMIN"]], [roles["AGENT"]]),
  contractController.update
);
router.delete(
  "/:id",
  //   authenticateJWT,
  //   authorize([roles["ADMIN"]], [roles["AGENT"]]),
  contractController.destroy
);

module.exports = router;
