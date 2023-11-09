const jwt = require("jsonwebtoken");
module.exports = function(req, res, next) {
    try {
        // Se obtiene el token enviado en el header de la petición HTTP
        if (req.headers.authorization) {
            // Se verifica que el token sea enviado junto a Bearer 
            let data = req.headers.authorization.split(' ');
            if (data[0] === "Bearer") {
                // Se envía el token para verificar si es válido y se envía la llave secreta
                let isValidToken = jwt.verify(data[1], process.env.JWT_SECRET);
                if (isValidToken) {
                    req.user = isValidToken.user;
                    // llamado a función next para que se continúe con la siguiente instrucción
                    next();
                }
            } else {
                return res.status(400).json({
                    message: 'El token debe ser enviado junto a Bearer'
                });
            }
        }else{
          return res.status(401).json({
            message:'El token es requerido'
          });
        }
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
};