const { Sequelize, Materi, Progres } = require("../models");

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const listMateri = async (req, res, _next) => {
  const { id_sub_bab } = req.params;

  try {
    if (!id_sub_bab) {
      return res.status(400).send({
        message: "Bad request: id_sub_bab is required",
        data: null,
      });
    }

    const userId = req.user.id_user;

    const materi = await Materi.findAll({
      where: { id_sub_bab },
      attributes: [
        "id_materi",
        "nama_materi",
        "thumbnail_materi",
        "tipe_materi",
        [Sequelize.literal(`IFNULL(progres.xp, 0)`), "xp"],
        [Sequelize.literal(`IFNULL(progres.gold, 0)`), "gold"],
        [
          Sequelize.literal(`IFNULL(progres.status_progres, 0)`),
          "status_progres",
        ],
      ],
      include: [
        {
          model: Progres,
          as: "progres",
          attributes: [],
          where: {
            id_user: userId,
          },
          required: false,
        },
      ],
    });

    if (materi.length === 0) {
      return res.status(404).send({
        message: "No materi found for the given id_sub_bab",
        data: null,
      });
    }

    return res.status(200).send({
      message: "Success",
      data: materi,
    });
  } catch (error) {
    console.error("Error fetching list of materi:", error);
    return res.status(500).send({
      message: "Internal server error",
      data: null,
    });
  }
};

module.exports = { listMateri };
