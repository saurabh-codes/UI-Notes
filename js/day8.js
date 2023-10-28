// JavaScript Function
// - JavaScript functions are defined with the function keyword.
// - You can use a function declaration or a function expression.


// Function Declarations
// - syntax
function functionName(parameters) {
  // code to be executed
}

// - Declared functions are not executed immediately. They are "saved for later use", and will be
//   executed later, when they are invoked (called upon).

// - i.e
function myFunction(a, b) {
  return a * b;
}

myFunction(2, 3);

// -------------------------------------------------------------------------------------------------

// Function Expressions
// - A JavaScript function can also be defined using an expression.
// - A function expression can be stored in a variable.
const x = function (a, b) {return a * b};

console.log(x(2, 3));


// - After a function expression has been stored in a variable, the variable can be used as a function.
const x = function (a, b) {return a * b};
let z = x(4, 3);

console.log(z);

// - The function above is actually an anonymous function (a function without a name).
// - Functions stored in variables do not need function names. They are always invoked 
//   (called) using the variable name.

// -------------------------------------------------------------------------------------------------

// i.e Printing Tables of 2.
function table(){

    for (i = 1; i <= 10; i++){
        document.write(`2 x ${i} = ${2 * i}`);
        document.write("<br>");
    }
    document.write("<br>");
    document.write("<br>");
}

table();

document.write("Hello world!");
document.write("<br>");
document.write("<br>");
    
table();

// ------------------------------------------------------------------------------------------------

// JavaScript Function Parameters
// - A JavaScript function does not perform any checking on parameter values (arguments).
function functionName(parameter1, parameter2, parameter3) {
    // code to be executed
}


// - Function parameters are the names listed in the function definition.
// - Function arguments are the real values passed to (and received by) the function.

// -------------------------------------------------------------------------------------------------

// - i.e Printing Tables for any number.
function table(num){  // Parameter ( num is parameter )

    for (i = 1; i <= 10; i++){
        document.write(`${num} x ${i} = ${num * i}`);
        document.write("<br>");
    }
    document.write("<br>");
    document.write("<br>");
}

table(2);  // Arguments ( 2 is arguments )

document.write("Hello world!");
document.write("<br>");
document.write("<br>");

table(5);  // Arguments ( 5 is arguments )

// -------------------------------------------------------------------------------------------

// Adding Multiple Numbers
function add() {

    if(arguments.length == 0) {
        console.log('No Arguments passed!');
    }else{
        let sum = 0;

        for(let i = 0; i < arguments.length; i++){
            sum = sum + arguments[i];
        }

        console.log(sum);
    }
}

add(5, 7, 10);  // 22

// ------------------------------------------------------------------------------------------------

// JavaScript return
// - The return statement stops the execution of a function and returns a value.
function myFunction() {
    return Math.PI;
}

myFunction();

// ------------------------------------------------------------------------------------------------

// Global and Local variables in JavaScript
// - A global variable is one that is “declared” outside of the functions in a program and can,
//   therefore, be accessed by any of the functions. A local variable is declared inside a specific
//   function and can only be accessed by the function in which it is declared.

// - i.e
let car = "Audi";  // Global Variable

function add(){

    let result = 33;  // Local Variable
    console.log(result);

    // console.log(car); --> It will run fine
}

add();

// console.log(result);  --> It will give error

console.log(car);

// ----------------------------------------------------------------------------------------------

// Anonymous Function 
// - It is a function that does not have any name associated with it.
let greet = function () {
    console.log("Hello World!");
};
  
greet();


// - i.e
function show(){
    console.log('Hello world!');
}

setTimeout(show, 3000);

// - using Anonymous function
setTimeout(function (){
    console.log('Hello world!');
}, 3000);

// -----------------------------------------------------------------------------------------------

    // Immediately Invoked Function Expression
// - An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined
(function (){
    console.log('Hello World!');
})();

// -----------------------------------------------------------------------------------------------

// JavaScript Objects
// - In JavaScript, almost "everything" is an object.
// - A JavaScript object is a collection of related data and/or functionality.
// - Objects have two values.
// - 1. Properties
// - 2. Action or function

// - Objects Properties (Name, Height, Mobile No, Address, Weight) --> Human
// - Objects Properties (Brand, Model, Varient) --> Car

// - Object Action or function (Eat, Walk, Talk, Run, Study) --> Human
// - Object Action or function (Drive, Park, Servicing) --> Car

// - Object in Programming
// - 1. Student, Teacher, Course in Learning Managenment System.
// - 2. Account, Account Holder, Cashier, Bank Manager etc in Banking System.
// - 3. Book, Department etc in Library Management System.

// ---------------------------------------------------------------------------------------------

// JavaScript Object Properties
// - A JavaScript property is a member of an object that associates a key with a value. 
// - A JavaScript object is a data structure that stores a collection of properties.
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

console.log(person['firstName']);
console.log(person.firstName);


// - i.e
const person = {};
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";


// - i.e
const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";


// - i.e
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

person.firstName = "Justin"
console.log(person.firstName);


// - i.e
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

delete person.firstName;
console.log(person);


// - in Operator in Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
// in operator
console.log('height' in person);  // false
console.log('age' in person);  // true


// - for-in loop in Obeject
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

for(let key in person){
    console.log(key);
    console.log(person[key]);  // dot notation will not work here.
}

// ------------------------------------------------------------------------------------

// Object Methods
// - JavaScript methods are actions that can be performed on objects.
// - A JavaScript method is a property containing a function definition.
// - Methods are functions stored as object properties.
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

person.sayHello = function (){
    console.log('Hello World!');
}

person.sayHello();


// - i.e
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

function greet() {
    console.log('Hello World!');
}

person.sayHello = greet;
person.sayHello();


// - i.e
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    sayHello: function() {
        console.log('Hello World!');
    }
};

person.sayHello();

// ---------------------------------------------------------------------------------------

// this in Object
// - In JavaScript, the this keyword refers to an object.
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    sayHello: function() {
        console.log("Hello! I am " + person.firstName + " and I have a " + car.brand + " car.");
        // console.log("Hello! I am " + this.firstName + " and I have a " + car.brand + " car.");
    }
};

let car = {
    brand: "Ford",
    model: "Mustang"
};

person.sayHello();

// --------------------------------------------------------------------------------------------

// Math Object
// - The JavaScript Math object allows you to perform mathematical tasks on numbers.

// - i.e
console.log(Math.PI);  //  3.141592653589793


// Number to Integer
// - There are 4 common methods to round a number to an integer.

    Math.round(x)	// Returns x rounded to its nearest integer
    Math.ceil(x)	// Returns x rounded up to its nearest integer
    Math.floor(x)	// Returns x rounded down to its nearest integer
    Math.trunc(x)	// Returns the integer part of x (new in ES6)

// - i.e
let x = Math.round(4.7);
console.log(x); // 5 


// - i.e
let x = Math.round(4.5);
console.log(x); // 5


// - i.e
let x = Math.round(4.4);
console.log(x); // 4


// - i.e Math.ceil
Math.ceil(4.9);  // 5
Math.ceil(4.7);  // 5
Math.ceil(4.4);  // 5
Math.ceil(4.2);  // 5
Math.ceil(-4.2);  // -4


// - i.e Math.trunc
Math.trunc(4.9);  // 4
Math.trunc(4.7);  // 4
Math.trunc(4.4);  // 4
Math.trunc(4.2);  // 4
Math.trunc(-4.2);  // -4


// - i.e Math.floor
Math.floor(4.9);  // 4
Math.floor(4.7);  // 4
Math.floor(4.4);  // 4
Math.floor(4.2);  // 4
Math.floor(-4.2)  // -5;


// Math.pow()
// - Math.pow(x, y) returns the value of x to the power of y.
Math.pow(8, 2);  // 64


// Math.sqrt()
// - Math.sqrt(x) returns the square root of x.
Math.sqrt(64);  // 8


// Math.abs()
// - Math.abs(x) returns the absolute (positive) value of x.
Math.abs(-4.7);  // 4.7


// Math.min() and Math.max()
// - Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments.
Math.min(0, 150, 30, 20, -8, -200);  // -200
Math.max(0, 150, 30, 20, -8, -200);  // 150


// Math.random()
// - Math.random() returns a random number between 0 (inclusive), and 1 (exclusive).
Math.random();

// - Math.random() always returns a number lower than 1.


// JavaScript Random Integers
// - Math.random() used with Math.floor() can be used to return random integers.
Math.floor(Math.random() * 10);  // Returns a random integer from 0 to 9.

Math.floor(Math.random() * 11);  // Returns a random integer from 0 to 10.

Math.floor(Math.random() * 10) + 1;  // Returns a random integer from 1 to 10.

// ---------------------------------------------------------------------------------------------

// JavaScript Object Constructors
// - i.e (JavaScript Object without Constructors)
let student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    eyeColor: "blue"
}

console.log(student1);

// - i.e 
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

console.log(myFather);
console.log(myMother);

// - i.e Adding properties
myFather.nationality = "Indian";

myFather.name = function() {
    return this.firstName + " " + this.lastName;
}

console.log(myFather);
console.log(myFather.name());

// --------------------------------------------------------------------------------------

// JavaScript Object Prototypes
// - All JavaScript objects inherit properties and methods from a prototype.
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

// - The JavaScript prototype property allows you to add new properties to object constructors.
Person.prototype.nationality = "English";

// - The JavaScript prototype property also allows you to add new methods to objects constructors.
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
  
Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
};

// ----------------------------------------------------------------------------------------------

// Nested Object
let user = {
    id: 101,
    email: "john@gmail.com",
    personalInfo: {
        name: "John",
        address: {
            street: "1287 Larkin Underpass",
            city: "East Janischester",
            country: "Austria"
        }
    }
}

console.log(user);
console.log(user.personalInfo);
console.log(user.personalInfo.address);
console.log(user.personalInfo.address.country);

// ---------------------------------------------------------------------------------------------

// JavaScript Hoisting
// - Hoisting is JavaScript's default behavior of moving declarations to the top.
hello();

function hello(){
    console.log("Hello World");
}

// ---------------------------------------------------------------------------------------------

// Use Strict
// - "use strict"; Defines that JavaScript code should be executed in "strict mode".
"use strict";
x = 3.14;       // This will cause an error because x is not declared


// - i.e
"use strict";
myFunction();

function myFunction() {
  y = 3.14;   // This will also cause an error because y is not declared
}


