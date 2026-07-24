const { Shayari, Category, Admin } = require("../models");

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

module.exports = {
  getDashboardStats,
};
