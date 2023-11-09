const AuthController = require('../../../controllers/authController')
const { Router } = require('express');

//Definimos una instancia de Router para acceder a los verbos HTTP
const router = Router();

// Definimos las rutas para la autenticación, /authenticate y /authenticated
// /authenticate: recibe el email y password del usuario y retorna un token
router.post('/authenticate', AuthController.authenticate);
// /authenticated: verifica que el token sea válido y retorna el usuario autenticado
router.get('/authenticated', AuthController.getUserAuthenticated);

module.exports = router;