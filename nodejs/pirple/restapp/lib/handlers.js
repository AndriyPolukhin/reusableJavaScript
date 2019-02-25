/*
* REQUEST HANDLERS
*
*/

// 1. Dependencies
const _data = require('./data');
const helpers = require('./helpers');
const config = require('./config');
// 2. Handlers Container

const handlers = {};

// 3. Ping Handler
handlers.ping = function (data, callback) {
  callback(406, { ping: 'ping ping ping' });
};

// 4. Not found handler
handlers.notFound = function (data, callback) {
  callback(404);
};



//  Users handler
handlers.users = (data, callback) => {
  const acceptableMethods = ['post', 'get', 'put', 'delete'];
  if (acceptableMethods.indexOf(data.method) > -1) {
    handlers._users[data.method](data, callback);
  } else {
    callback(405);
  }
};

//  Container for the users sub methods
handlers._users = {};

// user - post
// @Required data: firstName, lastName, phone, password, tosAgreement
// @Optional data: none
handlers._users.post = (data, callback) => {
  //  Check if all the required fields are filled out
  const firstName = typeof (data.payload.firstName) === 'string'
    && data.payload.firstName.trim().length > 0 ?
    data.payload.firstName.trim() : false;
  const lastName = typeof (data.payload.lastName) === 'string'
    && data.payload.lastName.trim().length > 0 ?
    data.payload.lastName.trim() : false;
  const phone = typeof (data.payload.phone) === 'string'
    && data.payload.phone.trim().length == 10 ?
    data.payload.phone.trim() : false;
  const password = typeof (data.payload.password) === 'string'
    && data.payload.password.trim().length > 0 ?
    data.payload.password.trim() : false;
  const tosAgreement = !!(typeof (data.payload.tosAgreement) == 'boolean'
    && data.payload.tosAgreement == true);
  //  Check if all of the data is present before continue
  if (firstName, lastName, phone, password, tosAgreement) {
    // Make sure that the user already exist (based on the phone number included in user file)
    _data.read('users', phone, (err, data) => {
      if (err) {
        //  Password should be hashed
        const hashedPassword = helpers.hash(password);
        //  Create the user object
        if (hashedPassword) {
          const userObject = {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            hashedPassword: hashedPassword,
            tosAgreement: true
          };

          // 5.2.6 Store the user
          _data.create('users', phone, userObject, (err) => {
            if (!err) {
              callback(200);
            } else {
              console.log(err);
              callback(500, { Error: 'Colud not create the new user' });
            }
          });
        } else {
          callback(500, { Error: 'Could not hash the user\'s password' });
        }
      } else {
        callback(400, { Error: 'A user with that phone number already exist' });
      }
    });
  } else {
    callback(400, { Error: 'Missing Required fields' });
  }
};

// user - get
// @Required data: phone
// @Optional data: none
// @TODO : Only let authenticated user access their object, don't let them access anyone else's
handlers._users.get = (data, callback) => {
  //  Check that the phone number is valid
  const phone = typeof (data.queryStringObject.phone) === 'string'
    && data.queryStringObject.phone.trim().length == 10 ?
    data.queryStringObject.phone.trim() : false;

  if (phone) {
    //  GET THE TOKEN FROM THE HEADERS
    const token = typeof (data.headers.token) === 'string' ? data.headers.token : false;
    //  Verify that the given token is valid for the phone number
    handlers._tokens.verifyToken(token, phone, (tokenIsValid) => {
      if (tokenIsValid) {
        // Look up the user
        _data.read('users', phone, (err, data) => {
          if (!err && data) {
            // 5.3.2. Remove the hashed password from the user object before returning to the requester
            delete data.hashedPassword;
            callback(200, data);
          } else {
            callback(404);
          }
        });
      } else {
        callback(403, { Error: 'Missing required token and header or token is invalid' });
      }
    });
  } else {
    callback(400, { Error: 'Missing Required field' });
  }
};

// User - put
// @Required data: phone
// @Optional data: firstName, lastName, password (at least  one must be specified)
// @TODO Only authenticated users can update their user object, and not anyone else's
handlers._users.put = (data, callback) => {
  // Check for the required field
  const phone = typeof (data.payload.phone) === 'string'
    && data.payload.phone.trim().length == 10 ?
    data.payload.phone.trim() : false;

  //  Check for optional fields
  const firstName = typeof (data.payload.firstName) === 'string'
    && data.payload.firstName.trim().length > 0 ?
    data.payload.firstName.trim() : false;
  const lastName = typeof (data.payload.lastName) === 'string'
    && data.payload.lastName.trim().length > 0 ?
    data.payload.lastName.trim() : false;
  const password = typeof (data.payload.password) === 'string'
    && data.payload.password.trim() > 0 ?
    data.payload.password.trim() : false;

  //  Error if the phone is invalid
  if (phone) {
    // Error if there's nothing to update
    if (firstName || lastName || password) {
      // Verify token
      const token = typeof (data.headers.token) === 'string' ? data.headers.token : false;
      handlers._tokens.verifyToken(token, phone, (tokenIsValid) => {
        if (tokenIsValid) {
          // Look up the user
          _data.read('users', phone, (err, userData) => {
            if (!err && userData) {
              //  Update the fields necessary
              if (firstName) {
                userData.firstName = firstName;
              }
              if (lastName) {
                userData.lastName = lastName;
              }
              if (password) {
                userData.hashedPassword = helpers.hash(password);
              }
              // Store the new updates
              _data.update('users', phone, userData, (err) => {
                if (!err) {
                  callback(200);
                } else {
                  console.log(err);
                  callback(500, { Erorr: 'Could not update the user' });
                }
              });
            } else {
              callback(400, { Error: 'The specified usre doesn\'t exist' });
            }
          });
        } else {
          callback(403, { Error: 'Missing required token in header, or token is expired ' });
        }
      });

    } else {
      callback(400, { Error: 'Missing fields to update' });
    }
  } else {
    callback(400, { Error: 'Missing Required Field' });
  }

};

// user - delete
// @Required data: phone
// @Optional data: none
// @TODO Only authenticated users can update their user object, and not anyone else's
// @TODO Delete any other files associated with the user
handlers._users.delete = (data, callback) => {
  //  Check that the user exists
  const phone = typeof (data.queryStringObject.phone) === 'string'
    && data.queryStringObject.phone.trim().length == 10 ?
    data.queryStringObject.phone.trim() : false;

  if (phone) {
    // Token Validation
    const token = typeof (data.headers.token) === 'string' ? data.headers.token : false;
    handlers._tokens.verifyToken(token, phone, (tokenIsValid) => {
      if (tokenIsValid) {
        // Look up the user
        _data.read('users', phone, (err, data) => {
          if (!err && data) {
            _data.delete('users', phone, (err) => {
              if (!err) {
                // Delete the cehcks associated with the user
                const userChecks = typeof (data.checks) === 'object' &&
                  data.checks instanceof Array ? data.checks : [];
                const checksToDelete = userChecks.length;
                if (checksToDelete > 0) {
                  let checksDeleted = 0;
                  let deletionErrors = false;
                  // Loop throw the checks
                  userChecks.forEach((checkId) => {
                    // Delete a check
                    _data.delete('checks', checkIdd, (err) => {
                      if (err) {
                        deletionErrors = true;
                      }
                      checksDeleted++;
                      if (checksDeleted == checksToDelete) {
                        if (!deletionErrors) {
                          callback(200);
                        } else {
                          callback(500, { Error: 'Errors encountered while attempting to delete users checks, not all deleted successfully' });
                        }
                      }
                    })
                  });
                } else {
                  callback(200);
                }
              } else {
                callback(500, { Error: 'Could not delete the specified user' });
              }
            });
          } else {
            callback(400, { Error: 'Could not find the specified user' });
          }
        });
      } else {
        callback(403, { Error: 'Missing required token in header, or token is expired ' });
      }
    });

  } else {
    callback(400, { Error: 'Missing required filed' });
  }
};

// 6. TOKENS HANDLERS
handlers.tokens = (data, callback) => {
  const acceptableMethods = ['post', 'get', 'put', 'delete'];
  if (acceptableMethods.indexOf(data.method) > -1) {
    handlers._tokens[data.method](data, callback);
  } else {
    callback(405);
  }
};

// 6.1 Container for the tokens sub methods
handlers._tokens = {};
// 6.2. TOKEN POST
// @Requited data: phone, password
// @Optional data: none
handlers._tokens.post = (data, callback) => {
  const phone = typeof (data.payload.phone) === 'string' &&
    data.payload.phone.trim().length == 10 ?
    data.payload.phone.trim() : false;
  const password = typeof (data.payload.password) === 'string' &&
    data.payload.password.trim().length > 0 ?
    data.payload.password.trim() : false;
  if (phone && password) {
    // 6.2.1 Look up the user who matches that phone number
    _data.read('users', phone, (err, userData) => {
      if (!err && userData) {
        // 6.2.2. Hash the send password and compare it to the password sotred in the user object
        const hashedPassword = helpers.hash(password);
        if (hashedPassword == userData.hashedPassword) {
          // 6.2.3 If valid createa a new token with a random name and set the exparation date one hour in the future
          // Random string of letter as id for the token
          const tokenId = helpers.createRandomString(20);
          // Expires
          const expires = Date.now() + 1000 * 60 * 60;
          // Token Object
          const tokenObject = {
            phone: phone,
            id: tokenId,
            expires: expires
          };

          // 6.2.4. Store the token
          _data.create('tokens', tokenId, tokenObject, (err) => {
            if (!err) {
              callback(200, tokenObject);
            } else {
              callback(500, { Error: 'Could not create the new token' });
            }
          });
        } else {
          callback(400, { Error: 'Password did not match the specified users stored password' });
        }
      } else {
        callback(400, { Error: 'Could not find the specified usre' });
      }
    });
  } else {
    callback(400, { Error: 'Missing Required Fields' });
  }
};
// 6.3. TOKEN GET
// @Required data: id
// @Optional data: none

handlers._tokens.get = (data, callback) => {
  // 6.3.1. Check that the id is valid
  const id = typeof (data.queryStringObject.id) === 'string' &&
    data.queryStringObject.id.trim().length == 20 ?
    data.queryStringObject.id.trim() : false;
  if (id) {
    // Look up user
    _data.read('tokens', id, (err, tokenData) => {
      // Remove the hashed password from the user object before returning it.
      if (!err && tokenData) {
        callback(200, tokenData);
      } else {
        callback(404);
      }
    });
  } else {
    callback(400, { Error: 'Missing required field, or field invalid' });
  }
};


// 6.4 TOKEN PUT
// @Required data: id, extend
// @Optional data: none
handlers._tokens.put = (data, callback) => {
  const id = typeof (data.payload.id) === 'string' &&
    data.payload.id.trim().length == 20 ?
    data.payload.id.trim() : false;
  const extend = !!(typeof (data.payload.extend) == 'boolean' &&
    data.payload.extend == true);
  if (id && extend) {
    // 6.4.1. Look up the token
    _data.read('tokens', id, (err, tokenData) => {
      if (!err && tokenData) {
        // 6.4.2. Check if the token is not expired yet
        if (tokenData.expires > Date.now()) {
          // 6.4.3. Set the exparation from hour from now
          tokenData.expires = Date.now() + 1000 * 60 * 60;
          // 6.4.4. Store the new updates
          _data.update('tokens', id, tokenData, (err) => {
            if (!err) {
              callback(200);
            } else {
              callback(500, { Error: 'Could not update the token\'s exparation' });
            }
          });
        } else {
          callback(400, { Error: 'The token has already expired and cannot be extended' });
        }
      } else {
        callback(400, { Error: 'Specified token do not exist' });
      }
    });
  } else {
    callback(400, { Error: 'Missing Required Filed(s) or field(s) are invalid' });
  }
};
// 6.5 TOKEN DELETE
// @Required data: id
// @Optional data: none
handlers._tokens.delete = (data, callback) => {
  // 6.5.1 Check that id is valid
  const id = typeof (data.queryStringObject.id) === 'string' &&
    data.queryStringObject.id.trim().length == 20 ?
    data.queryStringObject.id.trim() : false;
  if (id) {
    // Look up the token
    _data.read('tokens', id, (err, tokenData) => {
      if (!err && tokenData) {
        _data.delete('tokens', id, (err) => {
          if (!err) {
            callback(200);
          } else {
            callback(500, { Error: 'Could not delete the specified token' });
          }
        });
      } else {
        callback(400, { Error: 'Could not find the specified token' });
      }
    });
  } else {
    callback(400, { Error: 'Missing Required Fields' });
  }
};


// 7. VERIFICATION FUNCTION
// Verify if a given token id is currently valid for a given user
handlers._tokens.verifyToken = (id, phone, callback) => {
  // 7.1 Look up the token
  _data.read('tokens', id, (err, tokenData) => {
    if (!err && tokenData) {
      // 7.2 Check that the token is for the given user and has not expiried
      if (tokenData.phone == phone && tokenData.expires > Date.now()) {
        callback(true);
      } else {
        callback(false);
      }
    } else {
      callback(false);
    }
  });
};

// CHECKS SERVICE
handlers.checks = (data, callback) => {
  const acceptableMethods = ['post', 'get', 'put', 'delete'];
  if (acceptableMethods.indexOf(data.method) > -1) {
    handlers._checks[data.method](data, callback);
  } else {
    callback(405);
  }
};

// COntainer for checks methods
handlers._checks = {};

// Checks - post
// Required data: protocol, url, method, successCodes, timeoutSeconds
// Optional data: none
handlers._checks.post = (data, callback) => {
  // Validate inputs
  const protocol = typeof (data.payload.protocol) === 'string' &&
    ['http', 'https'].indexOf(data.payload.protocol) > -1 ?
    data.payload.protocol : false;
  const url = typeof (data.payload.url) === 'string' &&
    data.payload.url.trim().length > 0 ?
    data.payload.url.trim() : false;
  const method = typeof (data.payload.method) === 'string' &&
    ['post', 'get', 'put', 'delete'].indexOf(data.payload.method) > -1 ?
    data.payload.method : false;
  const successCodes = typeof (data.payload.successCodes) === 'object' &&
    data.payload.successCodes instanceof Array &&
    data.payload.successCodes.length > 0 ?
    data.payload.successCodes : false;
  const timeoutSeconds = typeof (data.payload.timeoutSeconds) === 'number' &&
    data.payload.timeoutSeconds % 1 === 0 &&
    data.payload.timeoutSeconds >= 1 &&
    data.payload.timeoutSeconds <= 5 ?
    data.payload.timeoutSeconds : false;

  if (protocol && url && method && successCodes && timeoutSeconds) {
    // Get the roken from the headres
    const token = typeof (data.headers.token) === 'string' ?
      data.headers.token : false;
    // Look up the user by reading the token
    _data.read('tokens', token, (err, tokenData) => {
      if (!err && tokenData) {
        const userPhone = tokenData.phone;

        // Look up the user
        _data.read('users', userPhone, (err, userData) => {
          if (!err && userData) {
            const userChecks = typeof (userData.checks) === 'object' &&
              userData.checks instanceof Array ? userData.checks : [];
            // Verify that the user has less than the maxChecks per user
            if (userChecks.length < config.maxChecks) {
              // Create a random id for the checks
              const checkId = helpers.createRandomString(20);
              // Create the check object and include the user phone
              const checkObject = {
                id: checkId,
                userPhone,
                protocol,
                url,
                method,
                successCodes,
                timeoutSeconds
              };
              // Sqave the object
              _data.create('checks', checkId, checkObject, (err) => {
                if (!err) {
                  // Add the check it to the user obgject
                  userData.checks = userChecks;
                  userData.checks.push(checkId);
                  // save the new user data
                  _data.update('users', userPhone, userData, (err) => {
                    if (!err) {
                      // Return the data about the new check
                      callback(200, checkObject);
                    } else {
                      callback(500, { Error: 'Could not update the user with the new cehck' });
                    }
                  })
                } else {
                  callback(500, { Errro: 'Could not create the new cehck' });
                }
              })
            } else {
              callback(400, { Error: `The user already has the maximum number of checks: (${config.maxChecks})` });
            }
          } else {
            callback(403);
          }
        });
      } else {
        callback(403);
      }
    });
  } else {
    callback(400, { Error: 'Missing required inputs, or inputs are invalid' });
  }
};

// Checks - get
// Required data: id
// Optional data: none
handlers._checks.get = (data, callback) => {
  // check if the id is valid
  const id = typeof (data.queryStringObject.id) == 'string' &&
    data.queryStringObject.id.trim().length == 20 ?
    data.queryStringObject.id.trim() : false;
  if (id) {
    _data.read('checks', id, (err, checkData) => {
      if (!err && checkData) {
        const token = typeof (data.headers.token) == 'string' ? data.headers.token : false;
        handlers._tokens.verifyToken(token, checkData.userPhone, (tokenIsValid) => {
          if (tokenIsValid) {
            callback(200, checkData);
          } else {
            callback(403, { Error: 'Missing required token in header, or token is invalid' });
          }
        });
      } else {
        callback(404);
      }
    });
  } else {
    callback(400, { Error: 'Missing required filed' });
  }
};

// Checks - put
// Required: id
// Optional data: protocol, url, method, successCodes, timeoutSeconds (one must be sent)
handlers._checks.put = (data, callback) => {
  const id = typeof (data.payload.id) == 'string' &&
    data.payload.id.trim().length == 20 ?
    data.payload.id.trim() : false;
  const protocol = typeof (data.payload.protocol) === 'string' &&
    ['http', 'https'].indexOf(data.payload.protocol) > -1 ?
    data.payload.protocol : false;
  const url = typeof (data.payload.url) === 'string' &&
    data.payload.url.trim().length > 0 ?
    data.payload.url.trim() : false;
  const method = typeof (data.payload.method) === 'string' &&
    ['post', 'get', 'put', 'delete'].indexOf(data.payload.method) > -1 ?
    data.payload.method : false;
  const successCodes = typeof (data.payload.successCodes) === 'object' &&
    data.payload.successCodes instanceof Array &&
    data.payload.successCodes.length > 0 ?
    data.payload.successCodes : false;
  const timeoutSeconds = typeof (data.payload.timeoutSeconds) === 'number' &&
    data.payload.timeoutSeconds % 1 === 0 &&
    data.payload.timeoutSeconds >= 1 &&
    data.payload.timeoutSeconds <= 5 ?
    data.payload.timeoutSeconds : false;

  // Check if id is valid
  if (id) {
    // Check for optional fields
    if (protocol || url || method || timeoutSeconds || successCodes) {
      _data.read('checks', id, (err, checkData) => {
        if (!err && checkData) {
          const token = typeof (data.headers.token) === 'string' ? data.headers.token : false;
          handlers._tokens.verifyToken(token, checkData.userPhone, (tokenIsValid) => {
            if (tokenIsValid) {
              // Update the check where neccessary
              if (protocol) {
                checkData.protocol = protocol;
              }
              if (url) {
                checkData.url = url;
              }
              if (method) {
                checkData.method = method;
              }
              if (successCodes) {
                checkData.successCodes = successCodes;
              }
              if (timeoutSeconds) {
                checkData.timeoutSeconds = timeoutSeconds;
              }
              // Store the updates
              _data.update('checks', id, checkData, (err) => {
                if (!err) {
                  callback(200);
                } else {
                  callback(500, { Error: 'Could not update the check' });
                }
              })
            } else {
              callback(403);
            }
          });
        } else {
          callback(400, { Error: 'Check ID did not exists' });
        }
      });
    } else {
      callback(400, { Error: 'Missing optional fields to update' });
    }
  } else {
    callback(400, { Error: 'Missing required field' });
  }
};

// Checks - delete
// Required = id
// Optional - none
handlers._checks.delete = (data, callback) => {
  // 5.5.1 Check that the user exists
  const id = typeof (data.queryStringObject.id) === 'string'
    && data.queryStringObject.id.trim().length == 20 ?
    data.queryStringObject.id.trim() : false;

  if (id) {

    // Look up the chekc for deletion
    _data.read('checks', id, (err, checkData) => {
      if (!err && checkData) {
        // Token Validation
        const token = typeof (data.headers.token) === 'string' ? data.headers.token : false;
        handlers._tokens.verifyToken(token, checkData.userPhone, (tokenIsValid) => {
          if (tokenIsValid) {
            // Delete the check data
            _data.delete('checks', id, (err) => {
              if (!err) {
                //  Look up the user
                _data.read('users', checkData.userPhone, (err, userData) => {
                  if (!err && userData) {
                    const userChecks = typeof (userData.checks) === 'object' &&
                      userData.checks instanceof Array ? userData.checks : [];

                    // Remove the deleted check from the list of checks
                    const checkPosition = userChecks.indexOf(id);
                    if (checkPosition > -1) {
                      userChecks.splice(checkPosition, 1);
                      // Resave the user data

                      _data.update('users', checkData.userPhone, userData, (err) => {
                        if (!err) {
                          callback(200);
                        } else {
                          callback(500, { Error: 'Could not update the specified user' });
                        }
                      });
                    } else {
                      callback(500, { Error: 'COuld not find the check on the user object, and could not remove it' });
                    }
                  } else {
                    callback(500, { Error: 'Could not find the specified user who created the check so could not delete the check ' });
                  }
                });
              } else {
                callback(500, { Error: 'Could not delete the check data' });
              }
            });
          } else {
            callback(403, { Error: 'Missing required token in header, or token is expired ' });
          }
        });
      } else {
        callback(400, { Error: 'The specified check id do not exists' })
      }
    });
  } else {
    callback(400, { Error: 'Missing required filed' });
  }
};


// Export handlers
module.exports = handlers;
