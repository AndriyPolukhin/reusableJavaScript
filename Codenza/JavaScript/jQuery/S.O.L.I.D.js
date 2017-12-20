// S.O.L.I.D.

// **Single Reasponsibility Principle**
// One reason to change

// Bad
class UserSettings {
    constructor(user) {
        this.user = user;
    }
    changeSettings(settings) {
        if (this.verifyCredentials()) {
            // ..
        }
    }
    verifyCredentials() {
        //..
    }
}

// Good

class UserAuth {
    constructor(user) {
        this.user = user;
    }
    verifyCredentials() {

    }
}


class UserSettings {
    constructor(user) {
        this.user = user;
        this.auth = new UserAuth(user);
    }
    changeSettings(settings) {
        if (this.auth.verifyCredentials()) {
            //..
        }
    }
}


// **Open/Closed Principle **
// SOftware entities should be open for extention and closed for modification


// BAD

var iceCreamFlavors = ["clicolate", "vanilla"];
var iceCreamMaker = {
    makeIceCream(flavor) {
        if (iceCreamFlavors.indexOf(flavor) > -1) {
            console.log("Great success. You now have ice cream.");
        } else {
            console.log("Epic fail. No ice cream for you.");
        }
    }
}
export default iceCreamMaker;

// GOOD
// adding extra function

var iceCreamFlavors = ["chocolate", "vanilla"];
var iceCreamMaker = {
    makeIceCream(flavor) {
        if (iceCreamFlavors.indexOf(flavor) > -1) {
            console.log("Great success. You now have ice cream.");
        } else {
            console.log("Epic fail. No ice cream for you.");
        }
    }
    addFlavor(flavor) {
        iceCreamFlavors.push(flavor);
    }
}
export default iceCreamMaker;


// **Liskov Substitution Principle**
// Derived object or types must be substetutable for their base
// BAD

class Rectangle {
    constructor() {
        this.width = 0;
        this.height = 0;
    }

    setColor(color) {
        // ..
    }
    render(area) {
        // ..
    }

    setWidth(width) {
        this.width = width;
    }

    setHeight(height) {
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}


class Square extends Rectangle {
    setWidth(width) {
        this.width = width;
        this.height = width;
    }
    setHeight(height) {
        this.width = height;
        this.height = height;
    }
}

function renderLargeRectangles(rectangles) {
    rectangles.forEach((rectangle) => {
        rectangle.setWidth(4);
        rectangle.setHeight(5);
        const area = rectangle.getArea();
        rectangle.render(area);
    });
}

const rectangles = [new Rectangle(), new Rectangle(), new Square()];
renderLargeRectangles(rectangles);




// GOOD

class Shape {
    stColor(color) {
        //...
    }

    render(area) {
        //..
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}

class Square extends Shape {
    constructor(length) {
        super();
        this.length = length;
    }

    getArea() {
        return this.length * this.length;
    }
}

function renderLargeShapes(shapes) {
    shapes.forEach((shape) => {
        const area = shape.getArea();
        shape.render(area);
    });
}

const shapes = [new Rectangle(4, 5), new Rectangle(4, 5), new Square(5)];
renderLargeShapes(shapes);



// **Interface Segregation Principle**
// A client should not be dependent on interfaces that he doesn't use

// Bad

class DOMTraverser {
    constructor(settings) {
        this.settings = settings;
        this.setup();
    }

    setup() {
        this.rootNode = this.settings.rootNode;
        this.animationModule.setup();
    }

    traverse() {
        //..
    }
}

const $ = new DOMTraverser({
    rootNode: document.getElementByTagName('body'),
    animationModule() {} // mos if the itme, we ewon't need to animate when traversing
    //...
});


/// Good

class DOMTraverser {
    constructor(settings) {
        this.settings = settings;
        this.options = settings.options;
        this.setup();
    }

    setup() {
        this.rootNode = this.settings.rootNode;
        this.setupOptions();
    }

    setupOptions() {
        if (this.options.animationModule) {
            //..
        }
    }

    traverse() {
        //...
    }
}

consts $ - new DOMTraverser({
    rootNode: document.getElementByTagName('body'),
    options: {
        animationModule() {}
    }
});

// ** Dependency Inversion Principle**

// high level modules should not depend on low level modules , they both should depend on abstractions
// Abstractions sholuld not depend on details, details should depend on abstractions
//BAD

class InventoryRequester {
    constructor() {
        this.REQ_METHODS = ['HTTP'];
    }

    requestItem(item) {
        // ....
    }
}

class InventoryTracker {
    constructor(items) {
        this.items = items;

        // BAD: we have created a dependency an a specific request implementation
        // We sholud just have requestItems depend on a request method: `request`
        this.requester = new InventoryRequester();
    }

    requestItems() {
        this.items.forEach((item) => {
            this.requester.requestItem(item);
        });
    }
}


const inventoryTracker = new InventoryTracker(['applies', 'bananas']);
inventoryTracker.requestItems();




// Good

class InventoryTracker {
    constructor(items, requester) {
        this.items = items;
        this.requester = requester;
    }

    requestItems() {
        this.items.forEach((item) => {
            this.requester.requestItem(item);
        });
    }
}

class InventoryRequesterV1 {
    constructor() {
        this.REQ_METHODS = ['HTTP'];
    }

    requestItem(item) {
        //...
    }
}

class InventoryRequestorV2 {
    constructor() {
        this.REQ_METHODS = ['WS'];
    }

    requestItem(item) {
        //...
    }
}


// By constructing our dependencies externally and injecting them, we can easily
// usbstitute our request module for a fancy new one that uses WebSokets.

const inventoryTracker = new InventoryTracker(['apples', 'bananas'], new InventoryRequestorV2());
inventoryTracker.requestItems();
