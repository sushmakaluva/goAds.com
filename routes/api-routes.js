const Sequelize = require("sequelize");
const db = require("../models");

module.exports = function (app) {
  // Get route for returning products which have deals
  app.get("/deals", (req, res) => {
    db.Products.findAll({
      order: Sequelize.literal("rand()"),
      limit: 5,
    }).then((dbProduct) => {
      console.log(dbProduct);
      // res.json(dbProduct);
      res.render("deals", { dbProduct });
    });
  });

  // GET route for retrieving a single product
  app.get("/api/products/:product_id", (req, res) => {
    db.Products.findOne({
      where: {
        product_id: req.params.product_id,
      },
    }).then((dbProduct) => {
      res.json(dbProduct);
    });
  });

  // POST route for saving a new product
  app.post("/api/sell", (req, res) => {
    console.log(req.body);
    db.Products.create({
      product_name: req.body.product_name,
      price: req.body.price,
      category: req.body.category,
      description: req.body.description,
    }).then((dbProduct) => {
      res.json(dbProduct);
    });
  });

  // POST route for ADD TO CART
  app.post("/api/cart", (req, res) => {
    console.log(req.body);
    db.Cart.create({
      product_name: req.body.product_name,
      price: req.body.price,
    }).then((dbCart) => {
      res.json(dbCart);
    });
  });

  // DELETE route for deleting PRODUCTS FROM CART
  app.delete("/api/cart/:cart_id", (req, res) => {
    db.Cart.destroy({
      where: {
        cart_id: req.params.cart_id,
      },
    })
      .then((dbCart) => {
        res.json(dbCart);
      })
      .catch((error) => res.json(error));
  });

  // GET ROUTE FOR DISPLAYING ALL ITEMS IN CART
  app.get("/cart", (req, res) => {
    db.Cart.findAll({ raw: true }).then((dbCart) => {
      console.log(dbCart[0]);
      res.render("cart", { cartItems: dbCart });
    });
  });

  //   // FIND ONE PRODUCT IN CART
  //   app.get('/api/cart/:product_id', (req, res) => {
  //     db.Cart.findOne({
  //       where: {
  //         product_id: req.params.product_id,
  //       },
  //     })
  //       .then((dbCart) => {
  //         res.json(db);
  //       });
  //   });

  // GET route to display all the products based on category
  app.get("/products", (req, res) => {
    const whereCondition = {};
    if (req.query.category) {
      whereCondition.category = req.query.category;
    }

    db.Products.findAll({
      where: whereCondition,
    }).then((dbProducts) => {
      const result = [];
      let temp = [];
      for (let i = 0; i < dbProducts.length; i++) {
        temp.push(dbProducts[i]);
        if (temp.length === 3) {
          result.push(temp);
          temp = [];
        }
      }
      if (temp.length > 0) {
        result.push(temp);
      }
      res.render("products", { products: result });
    });
  });

  // GET route to display recent Ads
  app.get("/api/recent-ads", (req, res) => {
    db.Products.findAll({
      limit: 3,
      order: [["product_id", "DESC"]],
    }).then((dbProduct) => {
      res.json(dbProduct);
    });
  });

  // GET route
  app.get("/search", (req, res) => {
    db.Products.findAll({
      limit: 10,
      where: {
        product_name: {
          [Sequelize.Op.like]: `%${req.body.query}%`,
        },
      },
    }).then((dbProduct) => {
      res.json(dbProduct);
    });
  });

  // PUT route for updating products in cart
  app.put("/api/products", (req, res) => {
    db.Products.update(req.body, {
      where: {
        product_id: req.body.product_id,
      },
    }).then((dbProduct) => {
      res.json(dbProduct);
    });
  });
};
