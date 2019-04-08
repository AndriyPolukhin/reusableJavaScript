/* Linked List */

function LinkedList() {
  // Variabels
  var length = 0;
  var head = null;

  // Define a Node
  var Node = function(element) {
    this.element = element;
    this.next = null;
  };

  // Methods
  // 1. Size
  this.size = function() {
    return length;
  };

  // 2. Head
  this.head = function() {
    return head;
  };

  // 3. Add
  this.add = function(element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      let currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    length++;
  };

  // 4. Remove
  this.remove = function(element) {
    let currentNode = head;
    let previousNode;
    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length--;
  };

  // 5. Empty
  this.isEmpty = function() {
    return length === 0;
  };
  // 6. IndexOf
  this.indexOf = function(element) {
    var currentNode = head;
    var index = -1;

    while (currentNode) {
      index++;
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }
    return -1;
  };

  // 7. Element At Index
  this.elementAt = function(index) {
    var currentNode = head;
    var count = 0;
    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode.element;
  };
  // 8. Add At a position
  this.addAt = function(index, element) {
    var node = new Node(element);

    var currentNode = head;
    var previousNode;
    var currentIndex = 0;

    if (index > length) {
      return false;
    }

    if (index === 0) {
      node.next = currentNode;
      head = node;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    length++;
  };
  // 9. Remove at a position
  this.removeAt = function(index) {
    var currentNode = head;
    var previousNode;
    var currentIndex = 0;
    if (index < 0 || index >= length) {
      return null;
    }
    if (index === 0) {
      head = currentNode.next;
    } else {
      while (currentNode < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      // previousNode.next = currentNode.next;
    }
    length--;
    return currentNode.element;
  };
}

var congo = new LinkedList();
congo.add("Kitten");
congo.add("Puppy");
congo.add("Dog");
congo.add("Cat");
congo.add("Fish");
console.log(congo.size());
console.log(congo.removeAt(3));
console.log(congo.elementAt(3));
console.log(congo.elementAt("Puppy"));
console.log(congo.size());
