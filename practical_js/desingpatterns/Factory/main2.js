const Task = require('./task');
const repoFactory = require('./repoFactorywCache');

const task1 = new Task(repoFactory.getRepo('task').get(1));
const task2 = new Task(repoFactory.getRepo('task').get(2));

const user = repoFactory.getRepo('user').get(1);
const project = repoFactory.getRepo('project').get(1);

task1.user = user;
task1.project = project;

// console.log(task1);
task1.save();
