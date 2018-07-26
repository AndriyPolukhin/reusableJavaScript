const repo = function() {
  const db = {};

  const get = function(id) {
    console.log('Getting project ' + id);
    return {
      name: 'New project'
    };
  };

  const save = function(project) {
    console.log('saving ' + project.name + ' to the db');
  };

  return {
    get: get,
    save: save
  };
};

module.exports = repo;
