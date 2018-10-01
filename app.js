require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const port = process.env.PORT;

app.use(session({
    secret: '#!#!#SESSIONID#!#!#',
    resave: false,
    saveUninitialized: true
   }));
   
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true})
    .then(() => console.log('Successfully connected to mongodb'))
    .catch(e => console.error(e));


app.use('/accounts', require('./routes/accounts'));

app.listen(port, () => console.log(`Server listening on port ${port}`));

