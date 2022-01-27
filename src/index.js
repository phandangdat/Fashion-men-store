const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
var methodOverride = require('method-override');
var session = require('express-session');
const path = require('path');
const app = express();
const port = 3000;

const route = require('./routes');
const database = require('./config/database');

//Connect to database
database.connect();

//HTTP logger
app.use(morgan('combined'));
//Template engine
app.engine(
    'handlebars',
    handlebars({
        helpers: {
            sum: (a, b) => a + b,
            multiplication: (a, b) => a * b,
        },
    })
);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views'));
app.set('trust proxy', 1);
//static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride('_method'));

app.use(express.json());
app.use(express.urlencoded());

app.use(
    session({
        secret: 'some secret',
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 60000 },
    })
);
//Route init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
