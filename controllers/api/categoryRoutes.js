const router = require('express').Router();
const { Category } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const dbCategoryData = await Category.findAll({
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
    const categories = dbCategoryData.map((category) =>
      category.get({ plain: true })
    );

    res.render('categories', {
      categories,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const dbCategoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!dbCategoryData) {
      res.status(404).json({ message: 'Category not found!' });
      return;
    }
    const category = dbCategoryData.get({ plain: true });
    res.render('category', { category });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
