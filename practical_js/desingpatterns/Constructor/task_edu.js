const Task = function(name) {
  this.name = name;
  this.completed = false;

  // this.complete = () => {
  //   console.log(`completing task : ${this.name}`);
  //   this.completed = true;
  // };

  // this.save = () => {
  //   console.log(`saving Task : ${this.name}`);
  // };
};

// ClassName.prototype.methodName = function(arguments) {};

Task.prototype.complete = function() {
  console.log(`completing task : ${this.name}`);
  this.completed = true;
};

Task.prototype.save = function() {
  console.log(`saving task : ${this.name}`);
};

const task1 = new Task('create a demo for constructor');
const task2 = new Task('create a demo for modules');
const task3 = new Task('create a demo for singletons');
const task4 = new Task('create a demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();
