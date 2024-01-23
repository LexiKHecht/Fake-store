const router = require('express').Router();
const { Product } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const productData = await Product.findAll({
      include: [{ model: Category }],
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [{ model: Category }],
    });
    if (!productData) {
      res.status(404).json({ message: 'Product not found!' });
      return;
    }
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
