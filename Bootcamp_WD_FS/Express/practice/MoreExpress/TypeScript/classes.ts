interface UserInterface {
    name: string;
    email: string;
    age: number;
    register();
    payInvoice();
}


class User implements UserInterface {
    name: string;
    email: string;
    age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('User created: ' + this.name);
    }

    register(){
        console.log(this.name + " is now Registered");
    }

    payInvoice() {
        console.log(this.name+' paid invoice');
    }
}



class Member extends User {
    id: number;
    constructor(id: number, name: string, email: string, age: number) {
        super(name, email, age);
        this.id = id;
    }

    payInvoice() {
        super.payInvoice()
    }
}


// let andriy = new User('Andriy', 'andriy.polukhin@gmail.com', 32);

// console.log(andriy.age);

// andriy.register();

let anastasia = new Member(1, "Anastasia Tsukrova", "nastenka@gmail.com", 28);
anastasia.payInvoice();