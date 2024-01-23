const router = require('express').Router();
const { Cart } = require('../../models');

// We should only need to get carts by ID
router.get('/:id', async (req, res) => {
  try {
    const dbCartData = await Cart.findByPk(req.params.id, {
      include: [
        { 
          model: Product,
          attributes: [
            'id',
            'product_name',
            'description',
            'stock',
            'category_id',
            'cart_id',
          ],
        },
      ],
    });

    if (!dbCartData) {
      res.status(404).json({ message: 'No cart found!' });
      return;
    }
    const cart = dbCartData.get({ plain: true });
    res.render('cart', { cart });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
