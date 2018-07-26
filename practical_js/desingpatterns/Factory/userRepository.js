const repo = function() {
  const db = {};

  const get = function(id) {
    console.log('Getting user ' + id);
    return {
      name: 'Andriy Polukhin'
    };
  };

  const save = function(user) {
    console.log('Saving ' + user.name + ' to the db');
  };

  return {
    get: get,
    save: save
  };
};

module.exports = repo;
