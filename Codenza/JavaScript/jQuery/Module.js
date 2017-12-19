/* lib/module.js */

class ShoppingDataType {
    constructor() {
        // private properties.
        this.shoppingList = ['coffee', 'chicken', 'pizza'];
    }
    // public methods
    getShoppingList() {
        return this.shoppingList.join(", ");
    }

    addItem(item) {
        this.shoppingList.push(item)
    }
}

export default ShoppingDataType;


/* main.js */
import SHoppingDataType from 'lib/module.js';

var shopping = new ShoppingDataType;
console.log(shopping.getShoppingList());
