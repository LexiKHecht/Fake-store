const router = require('express').Router();
const { Category } = require('../../models');

router.get('/', async (req, res) => {
  try {
    // const CategoryData = await Category.findAll({});
    // res.render('category');
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
