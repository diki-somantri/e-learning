const { User } = require("../models");

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} _next
 */
const index = async (_req, res, _next) => {
  try {
    const users = await User.findAll({
      attributes: ["id_user", "nama_user", "email"],
    });

    if (users.length === 0) {
      return res.status(404).send({
        message: "No users found",
        data: [],
      });
    }

    return res.status(200).send({
      message: "Success",
      data: users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).send({
      message: "Internal server error",
      data: null,
    });
  }
};

module.exports = { index };
