/* Queues */

// 1. SIMPLE QUEUE
function Queue() {
  collection = [];
  this.print = function() {
    console.log(collection);
  };
  this.enqueue = function(element) {
    collection.push(element);
  };
  this.dequeue = function() {
    return collection.shift();
  };
  this.front = function() {
    return collection[0];
  };
  this.size = function() {
    return collection.length;
  };
  this.isEmpty = function() {
    return collection.length === 0;
  };
}

/*
var q = new Queue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.print();
q.dequeue();
console.log(q.front());
q.print();
 */

// 2. PRIORITY QUEUE
function PriorityQueue() {
  var collection = [];
  this.printCollection = function() {
    console.log(collection);
  };
  this.enqueue = function(element) {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      var added = false;
      for (var i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };
  this.dequeue = function() {
    var value = collection.shift();
    return value[0];
  };
  this.front = function() {
    return collection[0];
  };
  this.size = function() {
    return collection.length;
  };
  this.isEmpty = function() {
    return collection.length === 0;
  };
}

var pq = new PriorityQueue();
pq.enqueue(["Andriy Polukhin", 2]);
pq.enqueue(["Anastasia Tsukrova", 1]);
pq.enqueue(["Anastasia Tsukrova", 1]);
pq.enqueue(["Olga Polukhina", 3]);
pq.printCollection();
pq.dequeue();
console.log(pq.front());
pq.printCollection();
