"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Materi extends Model {
    static associate(models) {
      Materi.belongsTo(models.SubBab, {
        foreignKey: "id_sub_bab",
        as: "sub_bab",
      });
      Materi.hasMany(models.Progres, {
        foreignKey: "id_materi",
        as: "progres",
      });
    }
  }
  Materi.init(
    {
      id_materi: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nama_materi: DataTypes.STRING,
      thumbnail_materi: DataTypes.TEXT,
      tipe_materi: DataTypes.ENUM(
        "video",
        "end_quiz",
        "single_quiz",
        "summary"
      ),
      id_sub_bab: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Materi",
      tableName: "materi",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Materi;
};
