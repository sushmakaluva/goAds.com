const path = require('path');

module.exports = function (app) {
  // index route loads view.html

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

  app.get('/postProduct', (req, res) => {
    res.render('postProduct');
  });

  app.get('/logIn', (req, res) => {
    res.render('logIn');
  });
  app.get('/contact', (req, res) => {
    res.render('contact');
  });

  app.get('/categories', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/categories.html'));
  });
};
