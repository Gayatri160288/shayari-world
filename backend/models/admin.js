"use strict";

module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define(
    "Admin",
    {
      name: DataTypes.STRING,

      email: DataTypes.STRING,

      password: DataTypes.STRING,
    },
    {
      tableName: "admins",
    },
  );

  return Admin;
};
