const router = require('express').Router();
const { Cart } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const cartData = await Cart.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(cartData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const cartData = await Cart.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!cartData) {
      res.status(404).json({ message: 'No cart found!' });
      return;
    }
    res.status(200).json(cartData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
