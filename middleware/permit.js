const jwt      = require('jsonwebtoken');
const firebase = require('firebase');
const secret   = 'chachacha14e';

function getObjects(obj, key, val) {
  var OBJ = [];
  for (var i in obj) {
      if (!obj.hasOwnProperty(i)) continue;
      if (typeof obj[i] == 'object') {
          OBJ = OBJ.concat(getObjects(obj[i], key, val));    
      } else {
          if (i == key && obj[i] == val || i == key && val == '') { OBJ.push(obj); }
          else{ 
              if (obj[i] == val && key == ''){
                  if (OBJ.lastIndexOf(obj) == -1){ OBJ.push(obj); }
              }
          }
      }
  }
  return OBJ;
}


// Initialize Firebase
// var config = {
//   apiKey: "AIzaSyBV_h7rbmZfztTuJ7lS3PAc2zrinCZKFLE",
//   authDomain: "washwashapp.firebaseapp.com",
//   databaseURL: "https://washwashapp.firebaseio.com",
//   projectId: "washwashapp",
//   storageBucket: "washwashapp.appspot.com",
//   messagingSenderId: "670106402499"
// };
// firebase.initializeApp(config);
// const firestore = firebase.firestore();
// const settings = {timestampsInSnapshots: true};
// firestore.settings(settings);

const withPermit = function(req, res, next) {
  // req.body.token
  // req.query.token
  // req.headers['x-access-token']
  // req.cookies.token;
  // req.cookies['X-auth-token']
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('content-type', 'application/json');
  console.log(req.cookies['X-auth-token'])
  if (!req.cookies['X-auth-token']) {
    res.status(401).send('Unauthorized: No token provided');
  } else {
    jwt.verify(req.cookies['X-auth-token'], 'chachacha14e', function(err, result) {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      } else {
        firebase.firestore().collection('wash').doc('users').get().then(doc => {
            let data = doc.data();
            let target = getObjects(data, 'id', '242855540');
            let user = target[0];
            // console.log(result)
            // res.send(result)
            if(target.length === 1) { res.send('ok') }
            else{ res.send('no') }
        })
        next();
      }
    });
  }
}

module.exports = withPermit;