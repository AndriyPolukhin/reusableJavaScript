function Bird() {
  let hatchedEgg = 10;

  this.getHatchedEggCount = function() {
    return hatchedEgg;
  };

  let weight = 15;

  this.getWeight = function() {
    return weight;
  };
}

let ducky = new Bird();
let a = ducky.getHatchedEggCount();
console.log(a);
