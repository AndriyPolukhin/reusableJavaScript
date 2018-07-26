const repoFactory = function() {
  this.getRepo = function(repoType) {
    if (repoType === 'task') {
      const taskRepo = require('./taskRepository')();
      return taskRepo;
    }
    if (repoType === 'user') {
      const userRepo = require('./userRepository')();
      return userRepo;
    }
    if (repoType === 'project') {
      const projectRepo = require('./projectRepository')();
      return projectRepos;
    }
  };
};

module.exports = new repoFactory();
