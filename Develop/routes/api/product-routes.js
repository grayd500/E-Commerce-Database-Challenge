const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// /api/products routes

// GET all products with their categories and tags
router.get('/', async (req, res) => {
  try {
    const productData = await Product.findAll({ include: [{ model: Category }, { model: Tag, through: ProductTag }] });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single product by ID with category and tags
router.get('/:id', async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, { include: [{ model: Category }, { model: Tag, through: ProductTag }] });
    if (!productData) res.status(404).json({ message: 'No product found with that id!' });
    else res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ➕ POST (create) a new product with tags
router.post('/', (req, res) => {
  Product.create(req.body)
    .then((product) => req.body.tagIds.length ? ProductTag.bulkCreate(req.body.tagIds.map(tag_id => ({ product_id: product.id, tag_id }))) : res.status(200).json(product))
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => res.status(400).json(err));
});

// PUT (update) a product by ID, including its tags
router.put('/:id', (req, res) => {
  Product.update(req.body, { where: { id: req.params.id } })
    .then(() => req.body.tagIds ? ProductTag.findAll({ where: { product_id: req.params.id } }) : res.json({ message: 'No tags to update' }))
    .then((productTags) => req.body.tagIds && productTags ? Promise.all([ProductTag.destroy({ where: { id: productTags.map(({ id }) => id).filter(id => !req.body.tagIds.includes(id)) } }), ProductTag.bulkCreate(req.body.tagIds.filter(tag_id => !productTags.map(({ tag_id }) => tag_id).includes(tag_id)).map(tag_id => ({ product_id: req.params.id, tag_id })))]): null)
    .then((updatedProductTags) => res.json(updatedProductTags))
    .catch((err) => res.status(400).json(err));
});

// ❌ DELETE a product by ID, including its tags
router.delete('/:id', async (req, res) => {
  try {
    const productData = await Product.destroy({ where: { id: req.params.id } });
    if (!productData) res.status(404).json({ message: 'No product found with that id!' });
    else {
      await ProductTag.destroy({ where: { product_id: req.params.id } });
      res.status(200).json(productData);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Exporting the router for the app to use
module.exports = router;
