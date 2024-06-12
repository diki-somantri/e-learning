"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ModePembelajaran extends Model {
    static associate(models) {
      ModePembelajaran.belongsTo(models.Kelas, {
        foreignKey: "id_kelas",
        as: "kelas",
      });
      ModePembelajaran.hasMany(models.MataPelajaran, {
        foreignKey: "id_mode_pembelajaran",
        as: "mata_pelajarans",
      });
    }
  }
  ModePembelajaran.init(
    {
      id_mode_pembelajaran: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nama_mode_pembelajaran: DataTypes.STRING,
      deskripsi_mode_pembelajaran: DataTypes.TEXT,
      id_kelas: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ModePembelajaran",
      tableName: "mode_pembelajaran",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return ModePembelajaran;
};
