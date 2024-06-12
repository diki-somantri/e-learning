const { Sequelize, Bab, SubBab, Materi, Progres } = require("../models");

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const listBab = async (req, res, _next) => {
  try {
    const { id_mata_pelajaran } = req.params;

    if (!id_mata_pelajaran) {
      return res.status(400).send({
        message: "Bad request: id_mata_pelajaran is required",
        data: null,
      });
    }

    const userId = req.user.id_user;

    const bab = await Bab.findAll({
      where: { id_mata_pelajaran },
      attributes: [
        "id_bab",
        "nama_bab",
        "thumbnail_bab",
        [
          Sequelize.literal(`(
            SELECT COUNT(id_sub_bab)
            FROM sub_bab
            WHERE sub_bab.id_bab = Bab.id_bab AND sub_bab.is_free = 1
          )`),
          "total_sub_bab_gratis",
        ],
        [
          Sequelize.fn(
            "COUNT",
            Sequelize.fn("DISTINCT", Sequelize.col("sub_babs.id_sub_bab"))
          ),
          "total_sub_bab",
        ],
        [
          Sequelize.literal(`IFNULL(
            SUM(CASE WHEN \`sub_babs->materis->progres\`.\`status_progres\` THEN 1 ELSE 0 END) / 
            NULLIF(COUNT(DISTINCT \`sub_babs->materis\`.\`id_materi\`), 0), 0)`),
          "progress",
        ],
      ],
      include: [
        {
          model: SubBab,
          as: "sub_babs",
          attributes: [],
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
        },
      ],
      group: ["Bab.id_bab", "Bab.nama_bab", "Bab.thumbnail_bab"],
    });

    if (!bab.length) {
      return res.status(404).send({
        message: "Not found: No bab found for the given id_mata_pelajaran",
        data: null,
      });
    }

    return res.send({
      message: "Success",
      data: bab,
    });
  } catch (error) {
    console.error("Error fetching list of bab:", error);
    return res.status(500).send({
      message: "Internal server error",
      data: null,
    });
  }
};

module.exports = { listBab };
