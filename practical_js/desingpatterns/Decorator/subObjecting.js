const Task = function (name) {
  this.name = name;
  this.completed = false;
}

Task.prototype.complete = function () {
  console.log('completing task: ' + this.name);
  this.completed = true;
};

Task.prototype.save = function () {
  console.log('saving Task: ' + this.name);
};

const myTask = new Task('Legacy Task');
// myTask.complete();
// myTask.save();

const UrgentTask = function (name, priority) {
  Task.call(this, name);
  this.priority = priority;
};

UrgentTask.prototype = Object.create(Task.prototype);

UrgentTask.prototype.notify = function () {
  console.log('notify important people');
};

UrgentTask.prototype.save = function () {
  this.notify();
  console.log('do special stuff before saving');
  Task.prototype.save.call(this);
};

const ut = new UrgentTask('This is urgent', 1);
ut.complete();
ut.save();
console.log(ut);