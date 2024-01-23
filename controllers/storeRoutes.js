const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');
const apiUrl = process.env.API_URL;

router.get('/products', async (req, res) => {
  try {

    const products = [];
    fetch(apiUrl).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
          products = data;
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    });
    res.render('products', {
      ...products,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
