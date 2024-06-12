"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SubBab extends Model {
    static associate(models) {
      SubBab.belongsTo(models.Bab, {
        foreignKey: "id_bab",
        as: "bab",
      });
      SubBab.hasMany(models.Materi, {
        foreignKey: "id_sub_bab",
        as: "materis",
      });
    }
  }
  SubBab.init(
    {
      id_sub_bab: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nama_sub_bab: DataTypes.STRING,
      thumbnail_sub_bab: DataTypes.TEXT,
      is_free: DataTypes.BOOLEAN,
      id_bab: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "SubBab",
      tableName: "sub_bab",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return SubBab;
};
