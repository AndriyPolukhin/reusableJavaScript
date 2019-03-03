/**
 * AUTH GUARD (server/middlewares/authgaurd.js)
 */

const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config/env_config/config');

const authClientToken = async (req, res, next) => {
  const token = req.headers['x-access-token'];

  if (!token) {
    return res.status(400).json({
      errors: [{
        msg: ' No Token provided'
      }]
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        'errors': [{
          'msg': 'Invalid Token'
        }]
      });
    }
    return next();
  });
};

module.exports = {
  authClientToken
};
