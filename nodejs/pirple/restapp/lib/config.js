/**
 * Create and export configuration variabels
 */

// Container for all environments
const environments = {};

// Staging (default) env
environments.staging = {
  'httpPort': 3000,
  'httpsPort': 3001,
  'envName': 'staging',
  'hashingSecret': 'thisIsASecret',
  'maxChecks': 5,
  'twilio': {
    'accountSid': 'ACf1db38ad8fd72a8193702476839c7db2',
    'authToken': '28b63165f7bc2713049f668bd7f07a7d',
    'fromPhone': '+15005550006'
  }
};

// Production env
environments.production = {
  'httpPort': 5000,
  'httpsPort': 5001,
  'envName': 'production',
  'hashingSecret': 'thisIsAlsoSecret',
  'maxChecks': 5,
  'twilio': {
    'accountSid': '',
    'authToken': '',
    'fromPhone': ''
  }
};

// Determine which env was passed as a command-line argument
const currentEnvironment = typeof (process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// Check that the current ENv is one of the env above, if not, default to staging
const environmentToExport = typeof (environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.staging;

// export the module
module.exports = environmentToExport;