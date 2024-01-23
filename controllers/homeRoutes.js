const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render('homepage', {
      logged_in: req.session.logged_in,
    });

    res.redirect('/profile');
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', async (req, res) => {



    res.render('profile', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }

});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
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

router.get('/settings', (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
    res.render('settings');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
