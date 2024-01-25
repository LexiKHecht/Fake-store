const router = require('express').Router();
//const { User } = require('../models');
const withAuth = require('../utils/auth');
const apiUrl = process.env.API_URL || 'https://fakestoreapi.com/products';

// Get all products from Fake Store API
router.get('/products', async (req, res) => {
  try {
    let products = [];
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
    // console.log(products);

    res.render('products', {
      ...products,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get one product from Fake Store API
router.get('/products/:id', async (req, res) => {
  try {
    let product = '';
    fetch(apiUrl + '/' + req.params.id).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    });
    res.render('product', {
      ...product,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get all categories from Fake Store API
router.get('products/categories', async (req, res) => {
  try {
    const categories = [];
    fetch(apiUrl + '/categories').then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
          categories = data;
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    });
    res.render('categories', {
      ...categories,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/products/category/:category_name', async (req, res) => {
  try {
    let products = [];
    fetch(apiUrl + '/category/' + req.params.category_name).then(function (
      response
    ) {
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
