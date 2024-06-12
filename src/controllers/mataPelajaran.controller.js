const { MataPelajaran } = require("../models");

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const listMataPelajaran = async (req, res, _next) => {
  const { id_mode_pembelajaran } = req.params;

  try {
    if (!id_mode_pembelajaran) {
      return res.status(400).send({
        message: "Bad request: id_mode_pembelajaran is required",
        data: null,
      });
    }

    const mataPelajaran = await MataPelajaran.findAll({
      where: { id_mode_pembelajaran },
      attributes: [
        "id_mata_pelajaran",
        "nama_mata_pelajaran",
        "thumbnail_mata_pelajaran",
      ],
    });

    if (mataPelajaran.length === 0) {
      return res.status(404).send({
        message: "No mata pelajaran found for the given id_mode_pembelajaran",
        data: null,
      });
    }

    return res.status(200).send({
      message: "Success",
      data: mataPelajaran,
    });
  } catch (error) {
    console.error("Error fetching list of mata pelajaran:", error);
    return res.status(500).send({
      message: "Internal server error",
      data: null,
    });
  }
};

module.exports = { listMataPelajaran };
