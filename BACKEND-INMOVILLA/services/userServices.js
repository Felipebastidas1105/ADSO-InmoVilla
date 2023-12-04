const db = require("../models");
const jwt = require("jsonwebtoken");
// const User = require('../models/User');

const getAll = async () => {
  try {
    let admins = await db.User.findAll();
    return admins;
  } catch (error) {
    throw { status: 400, message: error.message || "failed to get users" };
  }
};

const get = async (id) => {
  try {
    let admin = await db.User.findByPk(id);
    return admin;
  } catch (error) {}
};

const create = async (
  nombres,
  apellidos,
  cedula,
  fechaNac,
  telefono,
  email,
  password,
  role
) => {
  try {
    const secret = process.env.JWT_SECRET;
    let newUser = await db.User.create({
      nombres,
      apellidos,
      cedula,
      fechaNac,
      telefono,
      email,
      password,
      role,
    });

    const token = jwt.sign(
      {
        id: newUser.id,
        role: newUser.role,
        names: newUser.nombres,
        email: newUser.email,
        iat: Math.floor(Date.now() / 1000),
      },
      secret,
      { expiresIn: "30h" }
    );

    return { newUser, token }; // Cambiado de user a newUser
  } catch (error) {
    throw { status: 400, message: error.message || "failed to create user" };
  }
};

const update = async (
  id,
  nombres,
  apellidos,
  cedula,
  fechaNac,
  telefono,
  email,
  password
) => {
  try {
    const admin = await db.User.update(
      {
        nombres,
        apellidos,
        cedula,
        fechaNac,
        telefono,
        email,
        password,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return admin;
  } catch (error) {
    throw { status: 400, message: error.message || "failed to update admin" };
  }
};

const destroy = async (id) => {
  try {
    let deletedAdmin = await db.User.destroy({
      where: {
        id: id,
      },
    });
    return deletedAdmin;
  } catch (error) {
    throw { status: 400, message: error.message || "failed to delete admin" };
  }
};

module.exports = {
  getAll,
  get,
  create,
  update,
  destroy,
};
