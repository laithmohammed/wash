const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('./modules/users');
const withPermit = require('./middleware/permit');

const app = express();

const secret = 'washapp123';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

const mongo_uri = 'mongodb://admin:admin123@ds145359.mlab.com:45359/express-react';
mongoose.connect(mongo_uri, { useNewUrlParser: true }, function(err) {
  if (err) { throw err;
  } else { console.log(`\x1b[36m%s\x1b[0m`,`successfully connected to Mongoose`);}
});

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/register', function(req, res) {
    const { username, phone, email, password, repassword } = req.body;
    const user = new User({ username, phone, email, password });
    user.save(function(err) {
        if (err) {
        console.log(err);
        res.status(500).send("Error registering new user please try again.");
        } else {
        req.body.token = jwt.sign('hello',secret);
        res.status(200).redirect("http://localhost:3000/startup");
        }
    });
});

app.get('/checkPermit', function(req, res) {
  res.sendStatus(200);
});
app.post('/checkPermit', function(req, res) {
    res.sendStatus(200);
  });

app.listen(8080);
// app.listen(process.env.PORT || 8080);
