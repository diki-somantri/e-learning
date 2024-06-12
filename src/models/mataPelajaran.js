"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MataPelajaran extends Model {
    static associate(models) {
      MataPelajaran.belongsTo(models.ModePembelajaran, {
        foreignKey: "id_mode_pembelajaran",
        as: "modePembelajaran",
      });
      MataPelajaran.hasMany(models.Bab, {
        foreignKey: "id_mata_pelajaran",
        as: "babs",
      });
    }
  }
  MataPelajaran.init(
    {
      id_mata_pelajaran: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nama_mata_pelajaran: DataTypes.STRING,
      thumbnail_mata_pelajaran: DataTypes.TEXT,
      id_mode_pembelajaran: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "MataPelajaran",
      tableName: "mata_pelajaran",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return MataPelajaran;
};
