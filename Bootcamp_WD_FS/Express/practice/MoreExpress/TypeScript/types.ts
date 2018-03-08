// To compile ts to js use: tsc <name of the file>
// To run a compiler in a watch mode use: tsc <name of the file> -w Ex: tsc file.ts -w

// 1. Setting a type of a variable
let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

/*
// VERSION ONE of defining Arrays:
let strArr: string[];
let numArr: number[];
let boolArr: boolean[];
*/

// VERSION TWO of definning Arrays:

let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;

let strNumTuple: [string, number];


// VARIABLES DATA SET
myString = "Hello".slice(0, 3);
myNum = 10;
myBool = false;
myVar = true;

strArr = ["HELLO", "WORLD"];
numArr = [1, 2, 3];
boolArr = [true, false, true];

strNumTuple = ["hello", 4];

let myVoid: void = undefined;
let myNull: null  = null;
let myundefined: undefined = null;


// LOGING TO THE CONSOLE
console.log(myString);
console.log(myNum);
console.log(myVar);
console.log(boolArr);
console.log(strNumTuple);
console.log(myVoid);


