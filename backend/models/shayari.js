"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Shayari extends Model {
    static associate(models) {
      Shayari.belongsTo(models.Category, {
        foreignKey: "categoryId",
        as: "category",
      });
    }
  }

  Shayari.init(
    {
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      text: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      author: {
        type: DataTypes.STRING,
      },

      status: {
        type: DataTypes.STRING,
        defaultValue: "published",
      },
    },
    {
      sequelize,
      modelName: "Shayari",
      tableName: "shayaris",
    },
  );

  return Shayari;
};
