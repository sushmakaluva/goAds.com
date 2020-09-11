const path = require('path');

module.exports = function (app) {
  // index route loads view.html
  app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/subscription', (req, res) => {
    res.render('subscription');
  });

  app.get('/cart', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/cart.html'));
  });

  // blog route loads blog.html
  app.get('/categories', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/categories.html'));
  });
};
