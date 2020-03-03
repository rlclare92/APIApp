const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const app = express();

const routes = require('./routes/router');
require('dotenv').config();


app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', routes);

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: '.hbs',
}));

app.set('view engine', '.hbs');

app.listen(process.env.PORT || 8080);