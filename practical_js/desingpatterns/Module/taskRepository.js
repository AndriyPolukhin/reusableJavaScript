const repo = function() {
  const db = {};

  const get = function(id) {
    console.log(`Getting task ${id}`);
    return {
      name: 'new task from db'
    };
  };

  const save = function(task) {
    console.log(`Saving ${task.name} to the db`);
  };

  console.log('newing up task repo');
  return {
    get: get,
    save: save
  };
};

module.exports = repo();
