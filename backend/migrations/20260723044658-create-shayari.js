"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("shayaris", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,

        references: {
          model: "categories",
          key: "id",
        },

        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },

      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      text: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      author: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      status: {
        type: Sequelize.ENUM("draft", "published"),
        defaultValue: "published",
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("shayaris");
  },
};
