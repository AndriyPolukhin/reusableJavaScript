// OBSERVOR PATTERN


// initialte and Observalbe function.
var Observable = function () {

    // here I add what I observe
    this.subscribers = [];
}


// Create a prototype with different functions
Observable.prototype = {

    // how to subsribe
    subscribe: function (subscriber) {
        // I just push the data into an Array
        this.subscribers.push(subscriber);
    },

    // how to unsubscribe 
    unsubscribe: function (unsubscriber) {

        // in order ot exclude data I need to find it inArray via the for loop
        for (i = 0; i < this.subscribers.length; i++) {


            // So first of all the loop checks is the [i] is in the Array
            if (this.subscribers[i] === unsubscriber) {
                // after the [i] is found it is excluded via splice(i,1)
                this.subscribers.splice(i, 1);

                // also the function retuns what it did
                return unsubscriber.name;
            }
        }
    },


    // in order to send data to all of the subscribers we use this function
    publish: function (data) {

        // we use a loop to cycle thorugh them
        for (i = 0; i < this.subscribers.length; i++) {
            // adda funciton that sends the provided data
            this.subscribers[i].receiveData(data);
        }
    }
};

var OrganFanny = {
    name: "Organ Fanny",
    receiveData: function (data) {
        document.write(this.name + " received your info " + data + "<br>");
    }
}

var BoldmanYaks = {
    name: "Boldman Yaks",
    receiveData: function (data) {
        document.write(this.name + " received your info " + data + "<br>");
    }
}


observable = new Observable();

observable.subscribe(OrganFanny);
observable.subscribe(BoldmanYaks);


observable.publish("IBM AT $ 145.39");

document.write(observable.unsubscribe(OrganFanny) + "unsubscribed<br>");

observable.publish("IBM AT $ 145.87");
