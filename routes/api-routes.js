const Sequelize = require('sequelize');
const db = require('../models');

module.exports = function (app) {
  // Get route for returning products which have deals
  app.get('/api/deals', (req, res) => {
    db.Products.findAll({
      order: Sequelize.literal('rand()'), limit: 3,
    })
      .then((dbProduct) => {
        res.json(dbProduct);
      });
  });

  // GET route for retrieving a single product
  app.get('/api/products/:product_id', (req, res) => {
    db.Products.findOne({
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

  // GET route to display all the products based on category
  app.get('/products', (req, res) => {
    const whereCondition = {};
    if (req.query.category) {
      whereCondition.category = req.query.category;
    }

    db.Products.findAll({
      where: whereCondition,
    })
      .then((dbProducts) => res.render('products', { products: dbProducts }));
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
