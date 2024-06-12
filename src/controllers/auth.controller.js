const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const register = async (req, res, _next) => {
  const { nama_user, email, password } = req.body;

  try {
    if (!nama_user || !email || !password) {
      return res.status(400).send({
        message: "Bad request: All fields are required",
        data: null,
      });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).send({
        message: "Conflict: Email already in use",
        data: null,
      });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await User.create({
      nama_user,
      email,
      password: passwordHash,
    });

    return res.status(201).send({
      message: "User successfully registered",
      data: {
        id_user: user.id_user,
        nama_user: user.nama_user,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(500).send({
      message: "Internal server error",
      data: null,
    });
  }
};

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const login = async (req, res, _next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).send({
        message: "Bad request: Both email and password are required",
        data: null,
      });
    }

    console.log("Login attempt for email:", email);

    const user = await User.findOne({
      attributes: ["id_user", "nama_user", "email", "password"],
      where: { email },
    });

    if (!user) {
      console.log("User not found");
      return res.status(401).send({
        message: "Invalid email",
        data: null,
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log("Password invalid");
      return res.status(401).send({
        message: "Invalid password",
        data: null,
      });
    }

    const token = jwt.sign(
      { id_user: user.id_user, nama_user: user.nama_user, email: user.email },
      process.env.JWT_SECRET
    );

    return res.send({
      message: "User successfully logged in",
      data: { token },
    });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).send({
      message: "Internal server error",
      data: null,
    });
  }
};

module.exports = { register, login };
