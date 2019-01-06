const express       = require('express');
const bodyParser    = require('body-parser');
const cookieParser  = require('cookie-parser');
const path          = require('path');
const jwt           = require('jsonwebtoken');
const firebase      = require('firebase');
const withPermit    = require('./middleware/permit');
const registerRoute = require('./route/register')
const app = express();

const secret = 'washapp123';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
// app.use(express.cookieParser());

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBV_h7rbmZfztTuJ7lS3PAc2zrinCZKFLE",
  authDomain: "washwashapp.firebaseapp.com",
  databaseURL: "https://washwashapp.firebaseio.com",
  projectId: "washwashapp",
  storageBucket: "washwashapp.appspot.com",
  messagingSenderId: "670106402499"
};
firebase.initializeApp(config);
const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);
var firebaseRef = firebase.firestore().collection('wash');

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) { res.sendFile(path.join(__dirname, 'public', 'index.html')); });

app.use('/register', registerRoute);

app.get('/checkPermit', withPermit, function(req, res) {  });
app.post('/checkPermit', withPermit, function(req, res) {  });

app.listen(5678);
// app.listen(process.env.PORT || 8080);

