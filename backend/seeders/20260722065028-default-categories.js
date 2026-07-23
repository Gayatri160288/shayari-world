"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Love",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sad",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Friendship",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Motivation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
