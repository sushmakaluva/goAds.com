const path = require('path');
const upload = require('../middleware/upload');

module.exports = function (app) {
  // index route loads view.html
  app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/subscription', (req, res) => {
    res.render('subscription');
  });

  app.get('/cart', (req, res) => {
    res.render('cart');
  });

  app.get('/checkout', (req, res) => {
    res.render('checkout');
  });

  app.get('/confirmation', (req, res) => {
    res.render('orderConfirmation');
  });

  app.get('/postAd', (req, res) => {
    res.render('postAd');
  });

  app.get('/logIn', (req, res) => {
    res.render('logIn');
  });

  app.get('/categories', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/categories.html'));
  });
};
