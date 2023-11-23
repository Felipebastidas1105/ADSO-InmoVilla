const AuthController = require('../../../controllers/authController')
const { Router } = require('express');

//Definimos una instancia de Router para acceder a los verbos HTTP
const router = Router();

router.post('/auth/login', AuthController.login);

module.exports = router;