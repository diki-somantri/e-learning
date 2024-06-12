const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Bab extends Model {
    static associate(models) {
      Bab.belongsTo(models.MataPelajaran, {
        foreignKey: "id_mata_pelajaran",
        as: "mata_pelajaran",
      });
      Bab.hasMany(models.SubBab, {
        foreignKey: "id_bab",
        as: "sub_babs",
      });
    }
  }
  Bab.init(
    {
      id_bab: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nama_bab: DataTypes.STRING,
      thumbnail_bab: DataTypes.TEXT,
      id_mata_pelajaran: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Bab",
      tableName: "bab",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Bab;
};
