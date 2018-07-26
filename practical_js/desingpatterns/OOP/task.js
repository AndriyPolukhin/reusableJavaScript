const task = {
  title: 'My task',
  description: 'My Description'
};

Object.defineProperty(task, 'toString', {
  value() {
    return `${this.title} ${this.description}`;
  },
  writable: false,
  enumerable: false,
  configurable: false
});

const urgentTask = Object.create(task);
Object.defineProperty(urgentTask, 'toString', {
  value() {
    return `${this.title} is urgent`;
  },
  writeable: false,
  enumerable: false,
  configurable: false
});

console.log(Object.keys(task));
console.log(urgentTask.toString());
