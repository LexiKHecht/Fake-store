const router = require('express').Router();
const apiUrl = process.env.API_URL || 'https://fakestoreapi.com/products';
const withAuth = require('../../utils/auth');

router.get('/:id', withAuth, async (req, res) => {
  try {
    fetch(apiUrl).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          const singleProduct = data.find((item) => item.id == req.params.id);
          res.render('product', {
            isSingleProduct: true,
            singleProduct,
          });
        });
      } else {
        res.status(404).json({ message: 'Product not found!' });
      }
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
