const Task = require('./task');
const taskRepo = require('./taskRepository');
const userRepo = require('./userRepository');
const projectRepo = require('./projectRepository');

const task1 = new Task(taskRepo.get(1));

const user = userRepo.get(1);
const project = projectRepo.get(1);

task1.user = user;
task1.project = project;

console.log(task1);
task1.save();
