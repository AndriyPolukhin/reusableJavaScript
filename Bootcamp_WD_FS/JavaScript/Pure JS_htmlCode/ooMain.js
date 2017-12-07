// Here I initiate a Pizza object

function Pizza(price) {
    this.price = price || 10;
}

// I add to the function via prototype my function get price
Pizza.prototype.getPrice = function () {
    return this.price;
}

// Here I modify the pizza with extra adds
// Just add some cheese
function ExtraCheese(pizza) {
    var prevPrice = pizza.price;

    pizza.price = prevPrice + 1;
}

var myPizza = new Pizza(14);

ExtraCheese(myPizza);

document.write("Cost of Pizza : $" + myPizza.price + "<br>");
