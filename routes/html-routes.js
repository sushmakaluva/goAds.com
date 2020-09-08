const path = require('path');

module.exports = function (app) {
  // index route loads view.html
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/homepage.html'));
  });

  app.get('/cart', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/cart.html'));
  });

  // blog route loads blog.html
  app.get('/categories', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/categories.html'));
  });
};
