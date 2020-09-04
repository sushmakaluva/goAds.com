const db = require('../models');

module.exports = function (app) {
  // Get route for returning products which have deals
  app.get('api/deals', (req, res) => {
    db.Products.findAll({
      where: {
        category: req.params.category,
      },
    })
      .then((dbProduct) => {
        res.json(dbProduct);
      });
  });

  // GET route for returning products of a specific category
  app.get('/api/products/category/:category', (req, res) => {
    db.Products.findAll({
      where: {
        category: req.params.category,
      },
    })
      .then((dbProduct) => {
        res.json(dbProduct);
      });
  });

  // GET route for retrieving a single product
  app.get('/api/products/:product_id', (req, res) => {
    db.Post.findOne({
      where: {
        product_id: req.params.product_id,
      },
    })
      .then((dbProduct) => {
        res.json(dbProduct);
      });
  });

  // POST route for saving a new product
  app.post('/api/sell', (req, res) => {
    console.log(req.body);
    db.Products.create({
      product_name: req.body.product_name,
      price: req.body.price,
      category: req.body.category,
      description: req.body.description,
    })
      .then((dbProduct) => {
        res.json(dbProduct);
      });
  });

  // DELETE route for deleting products from cart
  app.delete('/api/products/:product_id', (req, res) => {
    db.Products.destroy({
      where: {
        product_id: req.params.product_id,
      },
    })
      .then((dbProduct) => {
        res.json(dbProduct);
      });
  });

  // PUT route for updating products in cart
  app.put('/api/products', (req, res) => {
    db.Products.update(req.body,
      {
        where: {
          product_id: req.body.product_id,
        },
      })
      .then((dbProduct) => {
        res.json(dbProduct);
      });
  });
};
