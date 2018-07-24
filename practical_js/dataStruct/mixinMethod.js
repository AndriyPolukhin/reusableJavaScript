let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
};

let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  name: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);

bird.fly();
plane.fly();

let boat = {
  name: "Warrior",
  type: "race-boat"
};

let glideMixin = function(obj) {
  obj.glide = function() {
    return true;
  };
};

glideMixin(bird);
glideMixin(boat);

console.log(bird.glide());
console.log(boat.glide());
