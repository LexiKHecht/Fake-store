const router = require('express').Router();
const { Product } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const dbProductData = await Product.findAll({
      include: [{ model: Category }],
    });
    const products = dbProductData.map((product) =>
      product.get({ plain: true })
    );

    res.render('products', {
      products,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const dbProductData = await Product.findByPk(req.params.id, {
      include: [{ model: Category }],
    });
    if (!dbProductData) {
      res.status(404).json({ message: 'Product not found!' });
      return;
    }
    const product = dbProductData.get({ plain: true });
    res.render('product', { product });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
