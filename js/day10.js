// Input Events
// {<form action="">
// <input type="text" id="input1">
// </form>}

let txt = document.getElementById("input1");

txt.addEventListener("focus", focus1);
txt.addEventListener("blur", blur1);


txt.addEventListener("change", function(){
    console.log(this.value);
});

txt.addEventListener("input", function(){
    console.log(this.value);
});

function focus1(){
    txt.style.background = "yellow";
}

function blur1(){
    txt.style.background = "white";
}

// --------------------------------------------------------------------------------------

// Event Bubbling or Event Capturing
// - In bubbling the inner most element's event is handled first and then the outer.
// - In capturing the outer most element's event is handled first and then the inner.
// - Syntax --> addEventListener(event, function, useCapture);

// - (useCapture) flase --> Bubbling
// - (useCapture) true --> Capturing

// - The default value is false, which will use the bubbling propagation, when the value is set 
//   to true, the event uses the capturing propagation.
body{
    padding: 100px;
    background-color: rebeccapurple;
}

#div{
    padding: 50px;
    background-color: blue;
}

<div id="div">
<button id="btn">Click Me!</button>
</div>

let elm = document.getElementById("div");
let elm1 = document.getElementById("btn");

elm1.addEventListener("click", btnClick, true);
elm.addEventListener("click", divClick, true);
document.body.addEventListener("click", bodyClick, true);

function btnClick(){
    console.log("Button Clicked...");
}

function divClick(){
    console.log("Div Clicked...");
}

function bodyClick(){
    console.log("Body Clicked...");
}

// --------------------------------------------------------------------------------------

// Prevent Default
// - The preventDefault() method cancels the event if it is cancelable, meaning that the default
//   action that belongs to the event will not occur.
<a href="https://www.google.com" id="link">Click Me!</a>

let link = document.getElementById("link");

link.addEventListener("click", function(e){
    console.log("Link Clicked...");
    e.preventDefault();
});


// - i.e ( Clicking on a "Submit" button, prevent it from submitting a form. )
{/* <form action="" id="form">
<input type="text">
<input type="submit">
</form> */}

let form = document.getElementById("form");

form.addEventListener("submit", function(e){
    e.preventDefault();
});

// ---------------------------------------------------------------------------------

// Browser Object Model (BOM)
// - The Browser Object Model (BOM) allows JavaScript to "talk to" the browser.


// Window Object
// - The window object is supported by all browsers. It represents the browser's window.
// - All global JavaScript objects, functions, and variables automatically become members of the window object.
// - Global variables are properties of the window object.
// - Global functions are methods of the window object.
// - Even the document object (of the HTML DOM) is a property of the window object.
window.document.getElementById("header");

// - is the same as:->

document.getElementById("header");


// - i.e
var x = "Hello!";
console.log(window.x);


// - i.e ( window.open() - open a new window )
<button id="btn1">Google</button>

let btn = document.getElementById("btn1");
let url = "https://www.google.com"
let features = "height=500, width=500";

btn.addEventListener("click", function(){
    window.open(url, "Google", features);  // (url, name, features)
});


// - i.e ( It will change the popup window google to amazon. )
<button id="btn1">Google</button>
<button id="btn2">Amazon</button>

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

let url1 = "https://www.google.com";
let url2 = "https://www.amazon.com";

let features = "height=500, width=500";

btn1.addEventListener("click", function(){
    window.open(url1, "Google", features);  // (url, name, features)
});

btn2.addEventListener("click", function(){
    window.open(url2, "Google", features);  // (url, name, features)
});


// - i.e ( Closing the popup window )
<button id="btn1">Google</button>
<button id="btn2">Close</button>

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

let url1 = "https://www.google.com";

let win;

let features = "height=500, width=500";

btn1.addEventListener("click", function(){
    win = window.open(url1, "Google", features);  // (url, name, features)
});

btn2.addEventListener("click", function(){
    win.close();
});

// --------------------------------------------------------------------------------

// setTimeout and setInterval
// - The setTimeout Javascript method is used to call a function after a certain period of time.
// - The setInterval Same as setTimeout(), but repeats the execution of the function continuously.
// - Syntax
setTimeout(function, milliseconds);


// - i.e
setTimeout(hello, 5000);

function hello(){
    alert("Hello World...");
}


// - i.e ( setInterval )
<button id="btn">Clear</button>

let time = setInterval(fun, 2000);

function fun(){
    console.log("Hello World...");
}

let btn1 = document.getElementById("btn");

// - The clearInterval() method stops the executions of the function specified in the setInterval() method.
btn1.addEventListener("click", function(){
    clearInterval(time);
});

// -------------------------------------------------------------------------------------------

// Window Location
// - The window.location object can be used to get the current page address (URL) and to redirect
//   the browser to a new page.

console.log(location.href); // The location.href property returns the URL of the current page.
console.log(location.pathname); // The location.pathname property returns the pathname of the current page.
console.log(location.protocol); // The location.protocol property returns the web protocol of the page.


// Location Assign
// - The location.assign() method loads a new document.
<button id="btn1">Redirect to Google</button>

let btn = document.getElementById("btn1");

btn.addEventListener("click", function(){
    location.assign("https://www.google.com");
});


// - The replace() method replaces the current document with a new one.
<button id="btn1">Redirect to Google</button>

let btn = document.getElementById("btn1");

btn.addEventListener("click", function(){
    location.replace("https://www.google.com");
});

// --------------------------------------------------------------------------------------

