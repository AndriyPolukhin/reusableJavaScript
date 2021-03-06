/**
 * USERS SERVICE (server/services/v1/users/users.js)
 */

const express = require('express');
const userModel = require('../../../models/user');

const getUserDetails = async (req, res, next) => {
  const { userId } = req.params;

  const user = await userModel.findById(userId).select('name, email');

  if (!user) {
    return res.status(404).json({
      'errors': [{
        'msg': ' no user found'
      }]
    })
  }

  return res.status(200).json({
    'success': [{
      'msg': ' user fetched successfully',
      'data': user
    }]
  })

};


module.exports = {
  getUserDetails
}