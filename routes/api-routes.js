const db = require('../models');

app.get('/deals', (req, res) => {
  db.Products.findAll({})
    .then((dbProduct) => {
      res.json(dbProduct);
    });
});
