"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Kelas extends Model {
    static associate(models) {
      Kelas.hasMany(models.ModePembelajaran, {
        foreignKey: "id_kelas",
        as: "mode_pembelajarans",
      });
    }
  }
  Kelas.init(
    {
      id_kelas: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nama_kelas: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Kelas",
      tableName: "kelas",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Kelas;
};
