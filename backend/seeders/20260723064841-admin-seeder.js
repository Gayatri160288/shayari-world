"use strict";

const bcrypt = require("bcryptjs");

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("admins", [
      {
        name: "Administrator",
        email: "admin@shayari.com",
        password: await bcrypt.hash("123456", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("admins", null, {});
  },
};
