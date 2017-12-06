var Observable = function () {
    this.subscribers = [];

}

Observable.prototype = {
    subscribe: function (subscriber) {
        this.subscribers.push(subscriber);
    },

    unsubscribe: function (unsubscriber) {
        for (i = 0; i < this.subscribers.length; i++) {
            if (this.subscribers[i] === unsubscriber) {
                this.subscribers.splice(i, 1);

                return unsubscriber.name;
            }
        }
    },

    publish: function (data) {
        for (i = 0; i < this.subscribers.length; i++) {
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


var observable = new Observable();

observable.subscribe(OrganFanny);
observable.subscribe(BoldmanYaks);


observable.publish("IBM at $ 15" + "<br>");


document.write(observable.unsubscribe(OrganFanny) + "<br>");

observable.publish("IBM at $ 25" + "<br>");
