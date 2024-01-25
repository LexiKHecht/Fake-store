const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');
const apiUrl = process.env.API_URL || 'https://fakestoreapi.com/products';

// router.get('/', async (req, res) => {
//   try {
//     // Pass serialized data and session flag into template
//     res.render('homepage', {
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });
    const user = userData.get({
      plain: true,
    });
    console.log(user);

    res.render('profile', {
      user: user,
      name: 'help me',
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    let products = [];
    fetch(apiUrl).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          // console.log(data);
          products = data;
          // console.log('products', products);
          res.render('homepage', {
            logged_in: req.session.logged_in,
            products,
          });
        });
      } else {
        console.log('Error: ' + response.statusText);
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  try {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
    res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signup', (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
    res.render('signup');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
