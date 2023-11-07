'use strict';
const bcrypt =require("bcryptjs")
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: DataTypes.INTEGER,
    password: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  
  // Función login que permite autenticar al usuario según email y password
User.login = async function (email, password) {
  let user = await User.findOne({
    where: {
      email: email,
    },
    // Se especifican los campos que se desean excluir de la consulta
    // attributes: { exclude: ['personal_email','birthdate','phone','phone_ip','PositionId', 'profession', 'grade', 'isBossArea', 'last_academic_level', 'createdAt', 'updatedAt', 'token', 'photo'] }, 
    // include: ["rol"],
  });
  if (!user) return { status: 404, message: "User no encontrado" };
  let valid = await user.authenticatePassword(password);
  user.password = '';
  // si la contraseña es válida, se retorna el usuario, de lo contrario,
  // se retorna un mensaje de error
  return valid
    ? {
      status: 200,
      user,
    }
    : { status: 401, message: "Contraseña invalida" };
};

User.prototype.authenticatePassword = async function (password) {
  try {
    // Se compara la contraseña enviada por el usuario con la que está 
    // en la base de datos a través del método compare de bcrypt
    let valid = await bcrypt.compare(password, this.password);
    return valid;
  } catch (error) {
    return error;
  }
};

// Función que permite crear un usuario con contraseña encriptada a través de bcrypt 
User.beforeCreate(async function (user, options) {
  if (user.password) {
    // Se utiliza el método hash de bcrypt para encriptar la contraseña
    user.password = await bcrypt.hash(user.password, 10);
    return;
  }
});

return User;
};
