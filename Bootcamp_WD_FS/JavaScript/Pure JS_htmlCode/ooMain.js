// Initiate functions that represent Type of weapons
function Sword(desc) {
    this.weaponType = "Sword";
    this.material = desc.material || "Steel";
    this.style = desc.style || "Longsword";
    this.hasMagic = desc.hasMagic || false;
}

function Bow(desc) {
    this.weaponType = "Bow";
    this.material = desc.material || "Wood";
    this.style = desc.style || "Longbow";
    this.hasMagic = desc.hasMagic || false;
}

// Here I've created a new function of Shield
// The function takes a description of an object that I want to create.
function Shield(desc) {
    // I assign a Type of the object
    this.weaponType = "Shield";
    // Here are some parameters holders
    // this are optional
    this.material = desc.material || "Steel";
    this.style = desc.style || "LongShield";
    // this one has boolean logic
    this.hasMagic = desc.hasMagic || false;
}

// Now for the creationo of the factory.
// Here I init a function for the Weapon Factory
function WeaponFactory() {};


// Here the modification of the prototype stars.
// First add some actual functions to make weapons
WeaponFactory.prototype.makeWeapon = function (desc) {
    // init a null variable
    var weaponClass = null;

    // logic to check for the type of weapon we are making
    if (desc.weaponType === "Sword") {
        // Set the class equal to Type
        weaponClass = Sword;

    } else if (desc.weaponType === "Bow") {
        weaponClass = Bow;
    } else if (desc.weaponType === "Shield") {
        weaponClass = Shield;
    } else {
        // nothing added this will give a false
        return false;
    }

    // so now we can return a new weapon class(desc) ???
    return new weaponClass(desc);
}

// Practice on an actual factory and variable.

// init a variable for factory
var myWeaponFact = new WeaponFactory();

// init an object for weapon
var bladeFist = myWeaponFact.makeWeapon({
    weaponType: "Sword",
    material: "Dark Iron",
    style: "Scythe",
    hasMagic: true
});

document.write(bladeFist.weaponType + "of type " + bladeFist.style + " crafted from " + bladeFist.material + "<br>");

var shieldWeaponFact = new WeaponFactory();

var superShield = shieldWeaponFact.makeWeapon({
    weaponType: "Shield",
    material: "Dragon Glass",
    style: "Two handed",
    hasMagic: true
});

document.write(superShield.weaponType + " of type " + superShield.style + " crafted from " + superShield.material + "<br>");
