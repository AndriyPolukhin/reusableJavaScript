/* HASH TABLE */

// HASH
var hash = (string, max) => {
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % max;
};

// HASH TABLE FUNCTION
let HashTable = function() {
  // Variables
  let storage = [];
  const storageLimit = 4;

  // Methods

  // 1. Print the storage
  this.print = function() {
    console.log(storage);
  };

  // 2. Add Function
  this.add = function(key, value) {
    var index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      storage[index] = [[key, value]];
    } else {
      var inserted = false;
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        storage[index].push([key, value]);
      }
    }
  };

  // 3. Remove Function
  this.remove = function(key) {
    var index = hash(key, storageLimit);
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (var i = 0; i < storage[index]; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  };

  // 4. Look up function
  this.lookup = function(key) {
    var index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  };
};

// console.log(hash("andriy", 10));

let ht = new HashTable();
ht.add("beau", "person");
ht.add("fido", "dog");
ht.add("rex", "dinosaur");
ht.add("tux", "penguin");
// console.log(ht.lookup("tux"));
ht.print();
