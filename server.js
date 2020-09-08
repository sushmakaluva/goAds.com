const express = require('express');
const exphbs = require('express-handlebars');
// const routes = require('./controllers/<>.js');
const db = require('./models');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 7500;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(routes);

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
// require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);


db.sequelize.sync({}).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
});