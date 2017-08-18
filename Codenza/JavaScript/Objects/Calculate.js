// Calculate area and perimeter

function circle(radius) {
    this.radius = radius;
    // area method
    this.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    // perimeter method
    this.perimeter = function () {
        return 2 * Math.PI * this.radius;
    };
}

var c = new circle(3);
console.log('Area = ', c.area().toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2));

// Cylinder

function Cylinder(cyl_height, cyl_diameter) {
    this.cyl_height = cyl_height;
    this.cyl_diameter = cyl_diameter;
}

Cylinder.prototype.Volume = function () {
    var radius = this.cyl_diameter / 2;
    return this.cyl_height * Math.PI * radius * radius;
};

var cyl = new Cylinder(7, 4);
// Volume of the cylinder with four decimal places.
console.log('volume =', cyl.Volume().toFixed(4));

// Check does it have a specific property

function hasKey(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
}
console.log(hasKey({
    red: "#FF0000",
    green: "#00FF00",
    white: "#ffffff"
}, "green"));


// Is there a DOM element
function is_dom_element(obj) {
    return !!(obj && obj.nodeType === 1);
}

console.log(is_dom_element(jQuery('body')[0]));
