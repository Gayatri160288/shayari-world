const { Shayari, Category } = require("../models");

// GET ALL
const getShayaris = async (req, res) => {
  try {
    const shayaris = await Shayari.findAll({
      include: [
        {
          model: Category,
          as: "category",
          attributes: ["id", "name"],
        },
      ],
      order: [["createdAt", "DESC"]],
    });

    res.json(shayaris);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET ONE
const getShayariById = async (req, res) => {
  try {
    const shayari = await Shayari.findByPk(req.params.id, {
      include: [
        {
          model: Category,
          as: "category",
          attributes: ["id", "name"],
        },
      ],
    });

    if (!shayari) {
      return res.status(404).json({
        message: "Shayari not found",
      });
    }

    res.json(shayari);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// CREATE
const createShayari = async (req, res) => {
  try {
    const { categoryId, title, text, author, status } = req.body;

    const category = await Category.findByPk(categoryId);

    if (!category) {
      return res.status(404).json({
        message: "Category not found",
      });
    }

    const shayari = await Shayari.create({
      categoryId,
      title,
      text,
      author,
      status,
    });

    res.status(201).json(shayari);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// UPDATE
const updateShayari = async (req, res) => {
  try {
    const shayari = await Shayari.findByPk(req.params.id);

    if (!shayari) {
      return res.status(404).json({
        message: "Shayari not found",
      });
    }

    await shayari.update(req.body);

    res.json(shayari);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE
const deleteShayari = async (req, res) => {
  try {
    const shayari = await Shayari.findByPk(req.params.id);

    if (!shayari) {
      return res.status(404).json({
        message: "Shayari not found",
      });
    }

    await shayari.destroy();

    res.json({
      message: "Shayari deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getShayaris,
  getShayariById,
  createShayari,
  updateShayari,
  deleteShayari,
};
