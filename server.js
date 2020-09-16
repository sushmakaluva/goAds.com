const express = require('express');
const exphbs = require('express-handlebars');
const db = require('./models');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 7500;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('public'));

// Set Handlebars as the default templating engine.
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Routes
// =============================================================
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

db.sequelize.sync({}).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
});
