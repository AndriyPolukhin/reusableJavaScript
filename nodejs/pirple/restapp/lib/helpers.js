/*
* Helpers for various task
*
*/

// 1. Dependencies
const crypto = require('crypto');
const config = require('./config');
const https = require('https');
const querystring = require('querystring');

// 2. Container
const helpers = {};

// 3. Create a SHA hash
helpers.hash = (str) => {
  if (typeof (str) == 'string' && str.length > 0) {
    const hash = crypto.createHmac('sha256', config.hashingSecret).update(str).digest('hex');
    return hash;
  } else {
    return false;
  }
}

// 4. Takes a stirng and return an object or false
// Parse the json string to an object in all cases without throwing
helpers.parseJsonToObject = (str) => {
  try {
    const obj = JSON.parse(str);
    return obj;
  } catch (e) {
    return {};
  }
}


// 5. Create a string of random alphanumeric characters of a given length
helpers.createRandomString = (strLength) => {
  strLength = typeof (strLength) == 'number' && strLength > 0 ? strLength : false;
  if (strLength) {
    // 5.1 Define all the possible characters that can go into a string
    const possibleCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    // Start the final string
    let str = '';
    for (i = 1; i <= strLength; i++) {
      // 5.2 Get the random character from the possibleCharacters string
      let randomCharacter = possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
      // 5.3 Append this character to the final string
      str += randomCharacter;
    }
    // 5.4 Return string
    return str;
  } else {
    return false;
  }
}


// Send an SMS message via Twilio
helpers.sendTwilioSms = (phone, msg, callback) => {
  // validate the parameters
  phone = typeof (phone) == 'string' && phone.trim().length == 10
    ? phone.trim() : false;
  msg = typeof (msg) == 'string' &&
    msg.trim().length > 0 &&
    msg.trim().length <= 1600 ?
    msg.trim() : false;

  if (phone && msg) {
    // Configure the payload that going to be send to Twilio
    const payload = {
      'From': config.twilio.fromPhone,
      'To': '+1' + phone,
      'Body': msg
    };
    // Stirngify the payload
    const stringPayload = querystring.stringify(payload);

    // Configure the requrest details
    const requestDetails = {
      'protocol': 'https:',
      'hostname': 'api.twilio.com',
      'method': 'POST',
      'path': '/2010-04-01/Accounts/' + config.twilio.accountSid + '/Messages.json',
      'auth': config.twilio.accountSid + ':' + config.twilio.authToken,
      'headres': {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(stringPayload)
      }
    };

    // Instantiate a request object
    const req = https.request(requestDetails, (res) => {
      // Grab the  status of the send request
      const status = res.statusCode;
      // Callback successfully if the request went through
      if (status == 200 || status == 201) {
        callback(false);
      } else {
        callback('Status code returned was ' + status);
      }
    });

    // Bind to the error event so it doesn't get thrown
    req.on('error', (e) => {
      callback(e);
    });

    // Add the payload to the request
    req.write(stringPayload);

    // End the request
    req.end();


  } else {
    callback('Given parameters missing or invalid');
  }

}


// Export
module.exports = helpers;

