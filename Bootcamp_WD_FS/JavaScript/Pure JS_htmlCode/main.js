function Customer(name, street, city, state, email, balance) {
    this.name = name;
    this.street = street;
    this.city = city;
    this.state = state;
    this.email = email;
    this.balance = balance;


    this.payDown = function (amtPaid) {
        this.balance -= amtPaid;
    };
    this.addToBal = function (amtCharged) {
        this.balance += amtCharged;
    };

}


var cust1 = new Customer("Andriy Polukhin", "Achtern Hoagen 2", "Hamburg", "Rossengaten", "andriy.polukhin@gmail.com", 8000000.00);


var cust2 = new Customer("Anastasia Tsukrova", "Achtern Hoagen 2", "Hamburg", "Rossengaten", "stasy@bigmir.net", 2000000.00);

cust2.addToBal(15.50);

Customer.prototype.isCreditAvail = true;

Customer.prototype.toString = function () {
    return this.name + " lives at " + this.street + " in " + this.city + " " + this.state + " email : " + this.email + " and has a balance of $" + this.balance.toFixed(2) + " Creditworthy : " + this.isCreditAvail + "<br>";
};

document.write(cust1.toString());
document.write(cust2.toString());
