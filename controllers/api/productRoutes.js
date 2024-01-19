const router = require('express').Router();
const { Product } = require('../../models');

router.get('/', async (req, res) => {
  try {
    // const CategoryData = await Category.findAll({});
    // res.render('product');
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
