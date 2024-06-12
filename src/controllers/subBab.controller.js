const { SubBab, Materi, Progres, Sequelize } = require("../models");

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const listSubBab = async (req, res, _next) => {
  const { id_bab } = req.params;

  try {
    if (!id_bab) {
      return res.status(400).send({
        message: "Bad request: id_bab is required",
        data: null,
      });
    }

    const userId = req.user.id_user;

    const subBab = await SubBab.findAll({
      where: { id_bab },
      attributes: [
        "id_sub_bab",
        "nama_sub_bab",
        "thumbnail_sub_bab",
        "is_free",
        [
          Sequelize.literal(`IFNULL(
            (
              SELECT SUM(CASE WHEN progres.status_progres THEN 1 ELSE 0 END) / COUNT(materi.id_materi)
              FROM materi AS materi
              LEFT JOIN progres AS progres ON materi.id_materi = progres.id_materi AND progres.id_user = ${userId}
              WHERE materi.id_sub_bab = SubBab.id_sub_bab
            ), 0
          )`),
          "progress",
        ],
      ],
      include: [
        {
          model: Materi,
          as: "materis",
          attributes: [],
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
        },
      ],
      group: [
        "SubBab.id_sub_bab",
        "SubBab.nama_sub_bab",
        "SubBab.thumbnail_sub_bab",
        "SubBab.is_free",
      ],
    });

    return res.status(200).send({
      message: "Success",
      data: subBab,
    });
  } catch (error) {
    console.error("Error fetching list of sub bab:", error);
    return res.status(500).send({
      message: "Internal server error",
      data: null,
    });
  }
};

module.exports = { listSubBab };
