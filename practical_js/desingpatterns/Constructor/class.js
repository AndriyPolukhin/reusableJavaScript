'use strict';

class Task {
  constructor(name) {
    this.name = name;
    this.completed = false;
  }
  complete() {
    console.log(`completing task : ${this.name}`);
    this.completed = true;
  }
  save() {
    console.log(`saving task : ${this.name}`);
  }
}

const task1 = new Task('create a demo for constructor');
const task2 = new Task('create a demo for modules');
const task3 = new Task('create a demo for singletons');
const task4 = new Task('create a demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();
