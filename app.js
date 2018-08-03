const express = require('express');
const morgan = require('morgan');
const layout = require('./views/layout');
const models = require('./models');
const routesWiki = require('./routes/wiki');
const routesUsers = require('./routes/user');

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use('/wiki', routesWiki);
app.use('/user', routesUsers);

app.get('/', (req, res) => {
  res.send(layout(''));
});

const PORT = 3000;

const init = async () => {
  await models.db.sync({ force: true });
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
};

init();
