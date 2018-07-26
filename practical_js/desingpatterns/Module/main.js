const Task = require('./task');
const Repo = require('./taskRepository');

const task1 = new Task(Repo.get(1));
const task2 = new Task({ name: 'create a demo for modules' });
const task3 = new Task({ name: 'create a demo for singletons' });
const task4 = new Task({ name: 'create a demo for prototypes' });

task1.complete();
task2.save();
task3.save();
task4.save();
