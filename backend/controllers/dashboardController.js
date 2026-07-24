const { Shayari, Category, Admin, Sequelize } = require("../models");

const getDashboardStats = async (req, res) => {
  try {
    const totalShayaris = await Shayari.count();

    const totalCategories = await Category.count();

    const totalAdmins = await Admin.count();

    res.json({
      totalShayaris,
      totalCategories,
      totalAdmins,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getRecentShayaris = async (req, res) => {
  try {
    const shayaris = await Shayari.findAll({
      include: [
        {
          model: Category,
          as: "category",
          attributes: ["name"],
        },
      ],
      order: [["createdAt", "DESC"]],
      limit: 5,
    });

    res.json(shayaris);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getCategoryStats = async (req, res) => {
  try {
    const data = await Category.findAll({
      attributes: [
        "name",
        [Sequelize.fn("COUNT", Sequelize.col("shayaris.id")), "count"],
      ],
      include: [
        {
          model: Shayari,
          as: "shayaris",
          attributes: [],
        },
      ],
      group: ["Category.id"],
      order: [["name", "ASC"]],
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardStats,
  getRecentShayaris,
  getCategoryStats,
};
