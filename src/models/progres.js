"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Progres extends Model {
    static associate(models) {
      Progres.belongsTo(models.User, {
        foreignKey: "id_user",
        as: "user",
      });
      Progres.belongsTo(models.Materi, {
        foreignKey: "id_materi",
        as: "materi",
      });
    }
  }
  Progres.init(
    {
      id_progres: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_user: DataTypes.INTEGER,
      id_materi: DataTypes.INTEGER,
      status_progres: DataTypes.BOOLEAN,
      xp: DataTypes.INTEGER,
      gold: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Progres",
      tableName: "progres",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Progres;
};
