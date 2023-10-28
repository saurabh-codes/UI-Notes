// Introduction

// We use javascript to create interactive websites.
// - Cilent side Validation
// - Popup
// - Event on Click
// - and many more...

// ------------------------------------------------------------------------

// ECMA International
// - An organization that creates standreds for technologies.

// ECMAScript
// - ECMAScript provides the rules, details and guidelines that a scripting language
//   must observe.

// -------------------------------------------------------------------------

// What is ES6, ES7, and so on....?
// - ES6, ES2015, and ECMAScript 2015.
// - they are different names for the same thing.

// ------------------------------------------------------------------------

// Hello World
// - Js code run krne ke liye hame bs browser and ek code editor cahiye. (chrome, vs-code)

// 1- alert
alert("Hello World");

// 2- <h1 id="h1">JavaScript</h1>
document.getElementById('h1').innerHTML = 'Hello World';

// 3-
document.write('Hello World');

// 4- for debugging only
console.log('Hello World');

// --------------------------------------------------------------------------

// Statement and Comments
// - Computer program is a list of instructions, also called as Statement.
// - Every statement is executed one by one.
// - End with semicolon.
// - i.e.
var a;  // declare a variable
a = 2;  // assign the value 2 to a
alert(a);


// Comments
// - Single Line Comment.
// - Muiti-line comment.

/* 
This 
is
Multi
line
comment 
*/

// -----------------------------------------------------------------------------

// JS Variables

// - Variables are Containers for Storing Data
// - JavaScript Variables can be declared by 'let', 'var', 'const'.
// - const used for the constant value.
// - we use let, because Variables defined with let cannot be Redeclared.
// - we don't use var, because Variables defined with var can be Redeclared.

let digit = 5; // (let = variable, digit = variable name, assign the value 5 to digit) = statement

alert(digit);


// The general rules for constructing names for variables are:
// - Names can contain letters, digits, underscores, and dollar signs.
// - Names must begin with a letter.
// - Names can also begin with $ and _ (but we will not use it in this tutorial).
// - Names are case sensitive (y and Y are different variables).
// - Reserved words (like JavaScript keywords) cannot be used as names.

// -------------------------------------------------------------------------------

// Value = undefined

// - A variable declared without a value will have the value undefined.
// - i.e.

let carName;
console.log(carName);  // undefined

// --------------------------------------------------------------------------------

// JavaScript Const

// - A const variable cannot be reassigned.
// - i.e.
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error

// -----------------------------------------------------------------------------------

// JavaScript Operators

// Assignment Operator (=)
// - i.e. Assign the value 5 to x
x = 5;
let y = 3;
let x = y;  //Assign the value y to x
console.log(x);

// -----------------------------------------------------------------------------------

// Addition Operator (+)
// - The Addition Operator adds numbers.
let x = 5;
let y = 2;
let z = x + y;

// -----------------------------------------------------------------------------------

// Multiplication Operator (*)
// - The Multiplication Operator multiplies numbers.
let x = 5;
let y = 2;
let z = x * y;

// ------------------------------------------------------------------------------------

// Modulus (Division Remainder) Operator (%)
let x = 5;
let y = x % 2;


// x = x + y;
// is same as
// x += y;

// +	Addition
// -	Subtraction
// *	Multiplication
// **	Power
// /	Division
// %	Modulus (Division Remainder)
// ++	Increment
// --	Decrement

// ---------------------------------------------------------------------------------------

// i.e.
let x = 5; // Number
let y = '5'; // String

console.log(x + y); // 55

// i.e.
let x = 5;
let y = 5;
console.log(x + y); // 10

// -----------------------------------------------------------------------------------------

// JavaScript Data Types
// - Primitive data type
// - Non-primitive (reference) data type

// - There are five types of primitive data types in JavaScript.
//   String	   represents sequence of characters e.g. "hello"
//   Number	   represents numeric values e.g. 100
//   Boolean	   represents boolean value either false or true
//   Undefined   represents undefined value
//   Null	       represents null i.e. no value at all

// - Non-primitive (reference) data type are
//   Object	  represents instance through which we can access members
//   Array	  represents group of similar values


// String
let x = 'hel"lo';

let y = "hel'lo";

// Number
let x = 34;

// Boolean (true or false)
let x = 2>3;
console.log(x);

let x = 2<3;
console.log(x);

// ---------------------------------------------------------------------------------------

// Template Literals (`${}`)

// ----------------------------------------------------------------------------------------

// Comparison and Logical Operators

// - Comparison
//   Operator  Description
//   ==	       equal to
//   ===	   equal value and equal type
//   !=	       not equal
//   !==	   not equal value or not equal type
//   >	       greater than
//   <	       less than
//   >=	       greater than or equal to
//   <=	       less than or equal to
//   ?	       ternary operator


// - Logical
//   Operator	Description
//   &&	        logical and
//   ||	        logical or
//   !	        logical not

// ---------------------------------------------------------------------------------------

// ==	equal to

// - 5 == 5 --> True
// - 6 == 5 --> False
// - 5 == '5' --> True


// ===	equal value and equal type

// - 5 === 5 --> True
// - 6 === 5 --> False
// - 5 === '5' --> False

// ----------------------------------------------------------------------------------------

// !=  not equal

// - 8 != 5 --> True
// - 5 != 5 --> False


// !==	not equal value or not equal type

// - 8 !== 5 --> True
// - 5 !== 5 --> False
// - 5 !== "5" --> True

// -----------------------------------------------------------------------------------------

//   >	 greater than
// - 5 > 8 --> False


//   <	 less than
// - 5 < 8 --> True

// -----------------------------------------------------------------------------------------

//   >=	  greater than or equal to
// - 8 >= 8 --> True


//   <=	  less than or equal to
// - 8 <= 8 --> True

// ----------------------------------------------------------------------------------------

//   ?	 ternary operator

// Input: let result = (10 > 0) ? true : false;
// Output: true

// Input: let message = (20 > 15) ? "Yes" : "No";
// Output: Yes

// ------------------------------------------------------------------------------------------

// &&	logical and

// - (5 < 10 && 6 > 1) --> True
// - (5 > 10 && 6 > 1) --> False


//   ||	  logical or

// - (5 == 5 || 6 == 5) --> True
// - (7 == 5 || 6 == 5) --> False


//   !	 logical not
// - !(6 == 5) --> True

// ------------------------------------------------------------------------------------------

// Conditions in JavaScript

// - Conditional statements are used to perform different actions based on different conditions.
// - In JavaScript we have the following conditional statements
// - if
// - else
// - else if
// - switch

// ---------------------------------------------------------------------------------------

// if
// - syntax
if (condition) {
    //  block of code to be executed if the condition is true
}

// - i.e
let age = 14;

if(age>=14){
    alert('You can vote'); // You can vote
}

// - i.e
let age = 12;

if(age>=14){
    alert('You can vote'); // Nothing Shows (false condition)
}

// -------------------------------------------------------------------------------------

// else
// - syntax
if (condition) {
    //  block of code to be executed if the condition is true
  } else {
    //  block of code to be executed if the condition is false
}

// - i.e
let age = 12;

if(age>=14){
    alert('You can vote'); 
}else{
    alert('You can not vote'); // You can not vote
}

// ------------------------------------------------------------------------------------

// else if
// - syntax
    if (condition1) {
        //  block of code to be executed if condition1 is true
    } else if (condition2) {
        //  block of code to be executed if the condition1 is false and condition2 is true
    } else {
        //  block of code to be executed if the condition1 is false and condition2 is false
    }

// - i.e
let age = 15;
let hasVoterId = "No";

if(age>=14 && hasVoterId == 'Yes'){
    alert('You can vote.'); 
} else if(age>=14 && hasVoterId != 'Yes'){
    alert('Get Your Voter Id.') // Get Your Voter Id.
}
else{
    alert('You can not vote.');
}

// -------------------------------------------------------------------------------

// switch
// - syntax
switch(expression) {
    case x:
      // code block
      break;
    case y:
      // code block
      break;
    default:
      // code block
}


// - Problem --> if input = 1, "y", "yes" output = Continue
//               if input = 0, "n", "no" output = End

// - i.e
let input = 1;

switch(input){
    case 1:
        document.write('continue');
        break;
    case "y":
        document.write('continue');
        break;
    case "yes":
        document.write('continue');
        break;
    case 0:
        document.write('end');
        break;
    case "n":
        document.write('end');
        break;
    case "no":
        document.write('end');
        break;
    default:
        document.write('wrong input');                        
}

// -----------------------------------------------------------------------------------

// loop in JavaScript
// - Loops can execute a block of code a number of times.

// --------------------------------------------------------------------------------------

// While Loop
// - Syntax
while (condition){
    // code block to be executed
}

// - i.e
let counter = 1;

while (counter <= 10){
    document.write("Hello World");
    // counter = counter + 1;
        //or
        counter++;    
}


// - i.e  Adding Sum Numbers from 0 to 1000
let counter = 1;
// let sum = 0;

while (counter <= 1000){
    if (counter % 2 == 0){
        sum = sum + counter
    }
    counter++;
}

document.write(sum);

// ------------------------------------------------------------------------------------------

// Do While Loop
// - The example below uses a do while loop. The loop will always be executed at least once, even 
//   if the condition is false, because the code block is executed before the condition is tested.
// - Syntax
do {
  // code block to be executed
}
while (condition);


// - i.e
let counter = 12;

do {
    document.write("Hello World");
    counter++;
} while (counter <= 10);

// -------------------------------------------------------------------------------------------

// For Loop
// - syntax
for (expression 1; expression 2; expression 3) {
    // code block to be executed
}

// - Expression 1 is executed (one time) before the execution of the code block.
// - Expression 2 defines the condition for executing the code block.
// - Expression 3 is executed (every time) after the code block has been executed.

// - i.e
for (let counter = 1; counter <= 10; counter++) {
    document.write("Hello World");
}

// ------------------------------------------------------------------------------------------

// Nested For Loop
// - i.e
for (let counter = 1; counter <= 10; counter++) {
    document.write(counter, "Hello World");
    document.write('<br>');

    for (let counter2 = 1; counter2 < 3; counter2++){
        document.write('Hello!');
        document.write('<br>');
    }
}


// - i.e
for (let counter = 1; counter <= 10; counter++) {
    document.write(counter, "Hello World");
    document.write('<br>');
    
    for (let counter2 = 1; counter2 < 3; counter2++){

        if (counter == 3){
            break;
        }

        document.write('Hello!');
        document.write('<br>');
    }
}