const repoFactory = function() {
  const repos = this;
  const repoList = [
    { name: 'task', source: './taskRepository' },
    { name: 'user', source: './userRepository' },
    { name: 'project', source: './projectRepository' }
  ];

  repoList.forEach(function(repo) {
    repos[repo.name] = require(repo.source)();
  });
};

module.exports = new repoFactory;
