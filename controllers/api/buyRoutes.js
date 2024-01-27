const router = require('express').Router();
const apiUrl = process.env.API_URL || 'https://fakestoreapi.com/products';
const withAuth = require('../../utils/auth');
const { Product } = require('../../models');

router.get('/:id', withAuth, async (req, res) => {
  try {
    fetch(apiUrl).then(function (response) {
      if (response.ok) {
        response.json().then(async function (data) {
          const singleProductData = data.find(
            (item) => item.id == req.params.id
          );

          console.log(singleProductData);

          const purchasedProduct = await Product.create({
            product_name: singleProductData.title,
            product_img: singleProductData.image,
            product_price: singleProductData.price,
            user_id: req.session.user_id,
          });

          const simplifiedPurchasedProduct = purchasedProduct.get({
            plain: true,
          });

          console.log(simplifiedPurchasedProduct);

          res.render('purchased', {
            ...simplifiedPurchasedProduct,
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
