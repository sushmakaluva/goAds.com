const express = require('express');
const exphbs = require('express-handlebars');
// const routes = require('./controllers/<>.js');
const db = require('./models');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// app.use(routes);

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

db.sequelize.sync({}).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
});
