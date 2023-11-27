const User = require("../models").User;
const jwt = require("jsonwebtoken"); // Se incluye la librería de JWT
const { authenticateUser } = require('../middlewares/auth');
const blacklistedTokens = require('../utils/blackListed');

const login = async (req, res) => {
  const { email, password } = req.body;
  const secret = process.env.JWT_SECRET;
  try {
      const token = await authenticateUser(email, password);
      //save token in cookie and serialize using cookie express method
      const payload = jwt.verify(token, secret)
      res.status(200).send({ status: 200, data: token, user: payload });
  } catch (error) {
      res.status(error.status || 500).send({ status: "FAILED", data: error.message });
  }
}

module.exports = {login}

// module.exports = {
//   // Definimos el método authenticate, que recibe el email y password del usuario
//   authenticate: async function (req, res) {
//     try {
//       // Se llama a la función login del modelo User, que permite autenticar al usuario
//       let data = await User.login(req.body.email, req.body.password);
//       if (data.user) {
//         // Si el usuario es autenticado, se genera un token con la información del usuario
//         let token = jwt.sign({ Rol: data.user.Rol.nombre }, process.env.JWT_SECRET, {
//           // El token expira en 24 horas (86400 segundos) después de su creación 
//           expiresIn: 60 * 60 * 24,
//         });
//         // return res.status(200).json({ token, rol: data.user.rol });
//         return res.status(200).json({token});
//       }
//       return res.status(data.status).json(data);
//     } catch (error) {
//       console.log(error);
//       return res.status(500).json(error);
//     }
//   },
//   // Definimos el método getUserAuthenticated, que permite obtener el usuario autenticado
//   getUserAuthenticated: async function (req, res) {
//     try {
//       // Se obtiene el token enviado en el header de la petición HTTP 
//       let data = req.headers.authorization.split(" ");
//       // Se verifica que el token sea enviado junto a Bearer
//       if (data[0] === "Bearer") {
//         // data[1] contiene el token enviado por el usuario en el header de la petición HTTP 
//         let isValidToken = jwt.verify(data[1], process.env.JWT_SECRET);
//         // Si el token es válido, se retorna el usuario autenticado
//         if (isValidToken) {
//           return res.status(200).json({
//             user: isValidToken.user,
//           });
//         }
//       } else {
//         return res.status(400).json({
//           message: "El token debe ser enviado junto a Bearer",
//         });
//       }
//     } catch (error) {
//       return res.status(500).json(error);
//     }
//   },
// };