const express = require('express');
const router = express.Router();
const session = require('express-session');
const flash = require('express-flash');

// Set up session middleware
router.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

// Set up express-flash middleware
router.use(flash());

// Sample user data
const userData = {
  email : 'mohammedarif@gmail.com',
  password: 'qwerty123'
};

//* Session validation middleware
const sessionValidationMiddleware = (req, res, next) => {
  if (req.session.isLoggedin) {
    // User is logged in, proceed to the next middleware/route handler
    next();
  } else {
    // User is not logged in, redirect to the login page
    res.redirect('/login');
  }
};

/* GET home page. */
router.get('/', sessionValidationMiddleware, (req, res) => {
  res.render('index', { title: 'homepage', email: userData.email });
});

router.get('/login', (req, res) => {
  if (req.session.isLoggedin) {
    res.redirect('/');
  } else {
    res.render('login');
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    req.flash('error', 'Please enter email and password.');
    res.redirect('/login');
    return;
  }

  if (!userData || userData.password !== password) {
    req.flash('error', 'Invalid email or password.');
    res.redirect('/login');
    return;
  }

  req.session.isLoggedin = true;
  res.redirect('/');
});


router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
});

module.exports = router;