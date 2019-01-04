const jwt = require('jsonwebtoken');
const secret = 'washapp123';

const withPermit = function(req, res, next) {
  const token = 
      req.body.token ||
      req.query.token ||
      req.headers['x-access-token'] ||
      req.cookies.token;

  if (!token) {
    res.status(401).send('Unauthorized: No token provided');
  } else {
    jwt.verify(token, secret, function(err, decoded) {
      // console.log(err)
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      } else {
        // res.email = decoded.email;
        res.status(200).send('authorized: token');
        next();
      }
    });
  }
}

module.exports = withPermit;