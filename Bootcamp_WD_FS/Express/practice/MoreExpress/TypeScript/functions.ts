// 1. Func: that return only numbers
function getSum(num1:number, num2:number):number {
    return num1 + num2;
    // return 'Hello'; 
}

// console.log(getSum(4,4));

// 2. Func: that return num, but takes any parameter
let mySum = function(num1:any, num2:any):number {
    if(typeof num1 == "string") {
        num1 = parseInt(num1);
    }
    if(typeof num2 == "string") {
        num2 = parseInt(num2);
    }
    return num1 + num2;
}

// console.log(mySum('3', 5));

// 3. Func: that return only strings 
function getName(firstName: string, lastName?: string):string {
    
    if(lastName == undefined) {
        return firstName;
    }
    return firstName + " " + lastName;

}
// console.log(getName("Andriy", "Polukhin"));
// console.log(getName("Anastasia"));

// 4. Func: taht return a Void
function myVoid():void {
    return; 
}