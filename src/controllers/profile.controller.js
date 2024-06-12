const { User } = require("../models");

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const profile = async (req, res, _next) => {
  const { id_user } = req.user;

  try {
    const user = await User.findOne({
      where: { id_user },
      attributes: ["id_user", "nama_user", "email"],
    });

    if (!user) {
      return res.status(404).send({
        message: "User not found",
        data: null,
      });
    }

    return res.status(200).send({
      message: "Success",
      data: user,
    });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return res.status(500).send({
      message: "Internal server error",
      data: null,
    });
  }
};

module.exports = { profile };
