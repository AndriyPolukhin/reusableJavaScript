// Creating a reusable module

let motionModule = (function() {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, whoosh!");
      };
    }
  };
})();

function Bird() {}

let duck = new Bird();

motionModule.glideMixin(duck);
let a = duck.glide();
console.log(a);

let funModule = (function() {
  return {
    isCureMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("singing to an awesome tune");
      };
    }
  };
})();

function Dog() {}
let beagle = new Dog();

funModule.singMixin(beagle);
let b = beagle.sing();
console.log(b);
