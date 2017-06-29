// Object.prototype
// The top of the [[Prototype]] chain is the object Object.prototype.

// This mean all objects in Javascript can access the methods in Object.prototype (apart from some host-specific extensions).

//For example toString() returns [object type]:

var obj = new Enki();
obj.toString(); // returns [object Enki]

//Linking objects
//It is possible to link objects in several ways.
//
//In ES5 you can use Object.create() to create a new object and link its internal [[Prototype]] to a different object. For example:
//
//Bar.prototype = Object.create(Foo.prototype)
//This means that the existing default Bar.prototype object is discarded.
//
//In ES6, you can modify the existing Bar.prototype object using Object.setPrototypeOf():
//
//Object.setPrototypeOf
//     (Bar.prototype, Foo.prototype);
//It is also possible to use:
//
//Bar.prototype = new Foo();
//This creates a new object using the Foo() constructor call. This can have unintended side effects from whatever is in the Foo() function.
//
//The following does not work:

Bar.prototype = Foo.prototype;
This just makes Bar.prototype a reference to Foo.prototype.


//Getter and setter methods
//Getter and setter methods return or set the value of a property of an object respectively.
//
//To define a getter or setter method, the method should be prefixed with either get or set. For example:

var o = {
  _val: 0,
  get val() {
    console.log('getting ' + this._val);
    return this._val;
  },
  set val(x) {
    console.log('setting ' + x);
    this._val = x;
  }
};
//In this example, val() is a getter method and val(x) is a setter method, both with the side effect of logging to console.
//
//These getters and setters can be used silently, as if o was a standard object with a val field:
o.val     //> getting 0
o.val = 3 //> setting 3
o.val     //> getting 3