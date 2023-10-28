// Break Statement
// - The break statement can also be used to jump out of a loop

// - i.e
for (let counter = 1; counter <= 10; counter++) {

    // if (counter == 5){
    //     break;
    // }

    document.write(counter, "Hello World");
    document.write('<br>');
}

// ----------------------------------------------------------------------------------------

// Continue Statement
// - The continue statement breaks one iteration (in the loop), if a specified condition occurs, 
//   and continues with the next iteration in the loop.

// - i.e
for (let counter = 1; counter <= 10; counter++) {

    // if (counter == 5){
        // continue;
    // }

    document.write(counter, " Hello World");
    document.write('<br>');
}

// -----------------------------------------------------------------------------------------

// alert
// - It shows a message and waits for the user to press “OK”.

// - i.e
alert("I am an alert box!");

// -------------------------------------------------------------------------------------------

// confirm
// - shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.

// - i.e
let isBoss = confirm("Are you the boss?");
alert( isBoss ); // true if OK is pressed

// --------------------------------------------------------------------------------------------

// prompt
// - shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is clicked, null.

// - i.e
let age = prompt('How old are you?', 100);
alert(`You are ${age} years old!`); // You are 100 years old!


// All these methods are modal: they pause script execution and don’t allow the visitor to interact with the rest
//  of the page until the window has been dismissed.

// -------------------------------------------------------------------------------------------------

// typeof operator
// - You can use the typeof operator to find the data type of a JavaScript variable.

// - i.e
typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object"

// - i.e
let type = 'Hello!';
console.log(typeof type);

// ------------------------------------------------------------------------------------------------

// Converting data types
// - i.e
let type = 4;
console.log(typeof type);   // Number

let newType = String(type);
console.log(typeof newType);   //String


// - i.e
let type = true;
console.log(typeof type);   // bool

let newType = Number(type);
console.log(typeof newType);  // Number


// - i.e
let type = 0;
console.log(typeof type);   // Number

let newType = Boolean(type);
console.log(typeof newType);  // bool

// -------------------------------------------------------------------------------------

// JavaScript Strings
// - JavaScript strings are for storing and manipulating text.
let text = "John Doe";
let carName2 = 'Volvo XC60'; 


// - You can use quotes inside a string, as long as they don't match the quotes surrounding the string.
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';


// - To find the length of a string, use the built-in length property.
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;


// - Escape Character
// - Because strings must be written within quotes, JavaScript will misunderstand this string.
let text = "We are the so-called "Vikings" from the north.";

// - The solution to avoid this problem, is to use the backslash escape character.
// - The backslash (\) escape character turns special characters into string characters:

//      Code	    Result	Description
//      \'	'	    Single quote
//      \"	"	    Double quote
//      \\	\	    Backslash

// - i.e
let text = "We are the so-called \"Vikings\" from the north.";


// - i.e
let text= 'It\'s alright.';


// - i.e
let text = "The character \\ is called backslash.";


// - You can also break up a code line within a text string with a single backslash.
<p id="demo"></p>
document.getElementById("demo").innerHTML = "Hello \ Dolly!";


// - i.e  New Line
<p id="demo"></p>
document.getElementById("demo").innerHTML = "Hello \n Dolly!";


// - i.e  Horizontal Tabulator
<p id="demo"></p>
document.getElementById("demo").innerHTML = "Hello \t Dolly!";


// - i.e
let a = "Hello";
let b = "World";

console.log(a + b);
console.log(a + " " + b);  //Creating Space b/w a and b.

// -------------------------------------------------------------------------------------------

// String concat()
// - concat() joins two or more strings.
let a = "Hello";
let b = "World";
let c = a.concat(" ", b);

console.log(c);

// ------------------------------------------------------------------------------------------

// String slice()
// - slice() extracts a part of a string and returns the extracted part in a new string.
// - The method takes 2 parameters: start position, and end position (end not included).
let text = "Apple, Banana, Kiwi";
let part = text.slice(7,13);

console.log(part);

// JavaScript counts positions from zero.
// First position is 0.
// Second position is 1.

// ------------------------------------------------------------------------------------------

// String substring()
// - substring() is similar to slice().
// - The difference is that start and end values less than 0 are treated as 0 in substring().
let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);

console.log(part);

// ---------------------------------------------------------------------------------------------

// String substr()
// - substr() is similar to slice().
// - The difference is that the second parameter specifies the length of the extracted part.
let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6);

console.log(part);

// ---------------------------------------------------------------------------------------------

// Replacing String Content
// - The replace() method replaces a specified value with another value in a string.
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "Google");

console.log(newText);

// ----------------------------------------------------------------------------------------------

// String indexOf()
// - The indexOf() method returns the index (position) the first occurrence of a string in a string.
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");

console.log(index);


// - i.e Index searching will start after 10 Position.
let text = "This is Javascript Tutorial. It is a good Tutorial";
let index = text.indexOf("is", );

console.log(index);

// ------------------------------------------------------------------------------------------------

// String lastIndexOf()
// - The lastIndexOf() method returns the index of the last occurrence of a specified text in a string.
let text = "Please locate where 'locate' occurs!";
let index = text.lastIndexOf("locate");

console.log(index);

// --------------------------------------------------------------------------------------------------

// String trim()
// - The trim() method removes whitespace from both sides of a string.
let text1 = "      Hello World!      ";
let text2 = text1.trim();

console.log(text2);


// trimStart()
// - The trimStart() method works like trim(), but removes whitespace only from the start of a string.
let text1 = "      Hello World!      ";
let text2 = text1.trimStart();

console.log(text2);


// trimEnd()
// - The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
let text1 = "      Hello World!      ";
let text2 = text1.trimEnd();

console.log(text2);

// ----------------------------------------------------------------------------------------------------

// String toUpperCase()
// - A string is converted to upper case with toUpperCase().
let text1 = "Hello World!";
let text2 = text1.toUpperCase();

console.log(text2);


// String toLowerCase()
// - A string is converted to lower case with toLowerCase().
let text1 = "Hello World!";
let text2 = text1.toLowerCase();

console.log(text2);

// --------------------------------------------------------------------------------------------------

// String includes()
// - The includes() method returns true if a string contains a specified value.
//   Otherwise it returns false.
let text = "Hello world, welcome to the universe.";
text.includes("world");

console.log(text);

// ---------------------------------------------------------------------------------------------------

// JavaScript Arrays
// - An array is a special variable, which can hold more than one value.
const cars = ["Saab", "Volvo", "BMW"];


// - Why Use Arrays?
// - If you have a list of items (a list of car names, for example), storing the cars in single variables could 
//   look like this.
let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";


// - It is a common practice to declare arrays with the const keyword.
// - Spaces and line breaks are not important. A declaration can span multiple lines.
const cars = [
    "Saab",
    "Volvo",
    "BMW"
  ];


// - You can also create an array, and then provide the elements.
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";


// - Using the JavaScript Keyword new
const cars = new Array("Saab", "Volvo", "BMW");


// - You access an array element by referring to the index number.
const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];
console.log(car)

// Note: Array indexes start with 0.
//       [0] is the first element. [1] is the second element.


// - Changing an Array Element
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
console.log(cars)


// - The length property of an array returns the length of an array (the number of array elements).
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;


// - Accessing the First Array Element
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[0];


// - Accessing the Last Array Element
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length - 1];

// ----------------------------------------------------------------------------------------

// Adding Array Elements
// - The easiest way to add a new element to an array is using the push() method.
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");  // Adds a new element (Lemon) to fruits


// Array toString()
// - The JavaScript method toString() converts an array to a string of (comma separated) array values.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let str = fruits.toString();
console.log(str);

// ----------Continue-----------

// -----------------------------------------------------------------------------------------

// JavaScript Array pop()
// - The pop() method removes the last element from an array.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let array = fruits.pop();

console.log(array);


// JavaScript Array push()
// - The push() method adds a new element to an array (at the end).
const fruits = ["Banana", "Orange", "Apple", "Mango"];  
let length = fruits.push("Kiwi");

console.log(length);

// ---------------------------------------------------------------------------------------------

// JavaScript Array shift()
// - The shift() method removes the first array element and "shifts" all other elements to a lower index.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.shift();
console.log(fruit); 


// JavaScript Array unshift()
// - The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.unshift("Lemon");
console.log(fruit);

// ----------------------------------------------------------------------------------------------------

// Merging (Concatenating) Arrays
// - The concat() method creates a new array by merging (concatenating) existing arrays.
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);


// - The concat() method does not change the existing arrays. It always returns a new array.
// - The concat() method can take any number of array arguments.
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];

const myChildren = arr1.concat(arr2, arr3);
console.log(myChildren);

// -----------------------------------------------------------------------------------------------------

// Array splice()
// - The splice() method can be used to add new items to an array by removing old items.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

// - The first parameter (2) defines the position where new elements should be added (spliced in).
// - The second parameter (0) defines how many elements should be removed.
// - The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

// ----------------------------------------------------------------------------------------------------

// Array.isArray()
// - The isArray() method returns true if an object is an array, otherwise false.
let text = "W3Schools";
let result = Array.isArray(text);

console.log(result);

// ---------------------------------------------------------------------------------------------------

// JavaScript String split()
// - The split() method splits a string into an array of substrings.
// - The split() method returns the new array.
// - The split() method does not change the original string.
// - If (" ") is used as separator, the string is split between words.
let text = "How are you doing today?";
const myArray = text.split(" ");

console.log(myArray);  // (5) ['How', 'are', 'you', 'doing', 'today?']


// - i.e
let text = "How are you doing today?";
const myArray = text.split("o");  // (5) ['H', 'w are y', 'u d', 'ing t', 'day?']

console.log(myArray);

// --------------------------------------------------------------------------------------------------

// Array join()
// - The join() method returns an array as a string.
// - The join() method does not change the original array.
// - Any separator can be specified. The default is comma (,).
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join();

console.log(text);  // Banana,Orange,Apple,Mango


// - i.e
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join(" and ");

console.log(text);  // Banana and Orange and Apple and Mango

// --------------------------------------------------------------------------------------------------

// JavaScript Multidimensional Array
// - A multidimensional array is an array that contains another array.
const data = [[1, 2, 3], [1, 3, 4], [4, 5, 6]];


// - Access Elements of an Array
let x = [
    ['Jack', 24],
    ['Sara', 23], 
    ['Peter', 24]
    ];
    
    // - access the first item 
    console.log(x[0]); // ["Jack", 24]
    
    // - access the first item of the first inner array
    console.log(x[0][0]); // Jack
    
    // - access the second item of the third inner array
    console.log(x[2][1]); // 24

// -----------------------------------------------------------------------------------------------

// Using Loop in An Array
// - i.e
let book = ["Math", "Physics", "Bio", "Computer Science"];

let bookLength = book.length;

for (i = 0; i < bookLength; i++) {
    console.log(`Element ${i} is ${book[i]} \n`);
}