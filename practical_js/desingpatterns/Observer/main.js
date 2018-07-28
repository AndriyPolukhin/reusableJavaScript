const Task = require('./task');

// Creating a service/observers
const notificationService = function () {
  const message = 'Notifying ';
  this.update = function (task) {
    console.log(`${message} ${task.user} for task ${task.name}`);
  }
};

const loggingService = function () {
  const message = 'Logging ';
  this.update = function (task) {
    console.log(`${message} ${task.user} for task ${task.name}`);
  }
};

const auditingService = function () {
  const message = 'Auditing';
  this.update = function (task) {
    console.log(`${message} ${task.user} for tasks ${task.name}`);
  }
};

// Creating Observerlist{}
function ObserverList() {
  this.observerList = [];
};

ObserverList.prototype.add = function (obj) {
  return this.observerList.push(obj);
};

ObserverList.prototype.get = function (index) {
  if (index > -1 && index < this.observerList.length) {
    return this.observerList[index];
  }
};

ObserverList.prototype.count = function () {
  return this.observerList.length;
};

ObserverList.prototype.removeAt = function (index) {
  this.observerList.splice(index, 1);
};
ObserverList.prototype.indexOf = function (obj, startIndex) {
  let i = startIndex;

  while (i < this.observerList.length) {
    if (this.observerList[i] === obj) {
      return i;
    }
    i++;
  }
  return -1;
};

// Creating an Observable Task
const ObservableTask = function (data) {
  Task.call(this, data);
  this.observers = new ObserverList();
};

ObservableTask.prototype.addObserver = function (observer) {
  this.observers.add(observer);
};

ObservableTask.prototype.removeObserver = function (observer) {
  this.observers.removeAt(this.observers.indexOf(observer, 0));
};

ObservableTask.prototype.notify = function (context) {
  let observerCount = this.observers.count();
  for (let i = 0; i < observerCount; i++) {
    this.observers.get(i)(context);
  }
};

ObservableTask.prototype.save = function () {
  this.notify(this);
  Task.prototype.save.call(this);
};

const task1 = new ObservableTask({
  name: 'create a demo for constructors',
  user: 'Andriy'
});

const not = new notificationService();
const ls = new loggingService();
const audit = new auditingService();


task1.addObserver(not.update);
task1.addObserver(ls.update);
task1.addObserver(audit.update);

task1.save();

task1.removeObserver(audit);
task1.save();