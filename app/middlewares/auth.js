require('dotenv').config();
const secret = process.env.JWT_TOKEN;

const  jwt = require('jsonwebtoken');
const User = require('../models/user')

const WithAuth = (req, res, next) => {
  const token = req.headers['access-token']
  if(!token)
    res.status(401).json({error: 'Unautorized: no token provided.'})
  else {
    jwt.verify(token, secret, (err, decoded) => {
      if(err)
        res.status(401).json({error: 'Unautorized: token invalid!'})
      else {
        req.email = decoded.email;
        console.log(user);
        User.findOne({email: decoded.mail})
        .then(user => {
          req.user = user;
          next();
        })
        .catch(err => {
          res.status(401).json({error: err})
        })
      }
    })
  }
}

module.exports = WithAuth;