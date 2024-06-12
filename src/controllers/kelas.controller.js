const { Kelas, ModePembelajaran } = require("../models");

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const listKelas = async (_req, res, _next) => {
  try {
    const kelas = await Kelas.findAll({
      include: [
        {
          model: ModePembelajaran,
          as: "mode_pembelajarans",
          attributes: ["nama_mode_pembelajaran"],
        },
      ],
      attributes: ["nama_kelas"],
    });

    if (!kelas.length) {
      return res.status(404).send({
        message: "No kelas found",
        data: null,
      });
    }

    return res.status(200).send({
      message: "Success",
      data: kelas,
    });
  } catch (error) {
    console.error("Error fetching list of kelas:", error);
    return res.status(500).send({
      message: "Internal server error",
      data: null,
    });
  }
};

module.exports = { listKelas };
