const router = require('express').Router();
const { Category, Product } = require('../../models');

// Setting up routes for /api/categories

// GET all categories + their products
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({ include: [{ model: Product }] });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single category by ID + its products
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, { include: [{ model: Product }] });
    if (!categoryData) res.status(404).json({ message: 'No category found with that id!' });
    else res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ➕ POST (create) a new category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT (update) a category by ID
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, { where: { id: req.params.id } });
    if (!categoryData) res.status(404).json({ message: 'No category found with that id!' });
    else res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ❌ DELETE a category by ID
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({ where: { id: req.params.id } });
    if (!categoryData) res.status(404).json({ message: 'No category found with that id!' });
    else res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Exporting the router for the app to use
module.exports = router;
