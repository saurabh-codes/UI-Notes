// DOM (Document Object Model)
// - With the HTML DOM, JavaScript can access and change all the elements of an HTML document.
// - With the object model, JavaScript gets all the power it needs to create dynamic HTML.

    // JavaScript can change all the HTML elements in the page
    // JavaScript can change all the HTML attributes in the page
    // JavaScript can change all the CSS styles in the page
    // JavaScript can remove existing HTML elements and attributes
    // JavaScript can add new HTML elements and attributes
    // JavaScript can react to all existing HTML events in the page
    // JavaScript can create new HTML events in the page


// - In the DOM, all HTML elements are defined as objects.

//---------------------------------------------------------------------------------------

// Finding HTML Element by Id
<p id="demo"></p>

const element = document.getElementById("intro");
console.log(element);

// - If the element is found, the method will return the element as an object (in element).
// - If the element is not found, element will contain null.

// ---------------------------------------------------------------------------------------------

// Finding HTML Elements by Tag Name
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>

const element = document.getElementsByTagName("p");
console.log(element);

// -----------------------------------------------------------------------------------------------

// Finding HTML Elements by Class Name
<p class="para">Hello World</p>
<p class="para">Hello World</p>

const element = document.getElementsByClassName("para");
console.log(element);

// -------------------------------------------------------------------------------------------------

// Finding HTML Elements by CSS Selectors
<p class="para">Hello World from Class</p>
<p id="para1">Hello World from ID</p>
<p>Hello World from Element</p>

const ele1 = document.querySelectorAll("p.para");

// ------------------------------------------------------------------------------------------------------

// Select Parent Element
<ul>
<li id="list">List 1</li>
<li>List 2</li>
<li>List 3</li>
<li>List 4</li>
</ul>

let elm = document.getElementById("list");
let parent = elm.parentElement;
console.log(parent);


// Select Child Element
<ul id="ul-list">
<li>List 1</li>
<li>List 2</li>
<li>List 3</li>
<li>List 4</li>
</ul>

let elm = document.getElementById("ul-list");
let child = elm.firstElementChild;
let child1 = elm.lastElementChild;
let childs = elm.children;

console.log(child);
console.log(child1);
console.log(childs);


// Select Sibbiling Element
<ul>
<li id="list">List 1</li>
<li>List 2</li>
<li>List 3</li>
<li>List 4</li>
</ul>

let elm = document.getElementById("list");
let node = elm.previousElementSibling;
let node1 = elm.nextElementSibling;

console.log(node);
console.log(node1);

// ------------------------------------------------------------------------------------

// innerHTML
<ul>
<li id="list">List 1</li>
<li>List 2</li>
<li>List 3</li>
<li>List 4</li>
</ul>

let elm = document.getElementById("list");
let node = elm.innerHTML;

console.log(node);  // List 1


// - i.e
<ul>
<li id="list">List 1</li>
<li>List 2</li>
<li>List 3</li>
<li>List 4</li>
</ul>

let elm = document.getElementById("list");
elm.innerHTML = "<h1>Hello World</h1>"

// ------------------------------------------------------------------------------------

// Create and Append Element
<div id="intro">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

let elm = document.getElementById("intro");

let h1 = document.createElement("h1");

// - Adding class or Id in the new Element
// h1.className = "heading-1";
// h1.id = "heading";

let text = document.createTextNode("This is Heading 1.");  // Adding content using method.
h1.appendChild(text);

elm.appendChild(h1);


// - i.e
<div id="intro">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

let elm = document.getElementById("intro");

let h1 = document.createElement("h1");

h1.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";  // Adding content using property.

elm.appendChild(h1);  // Adding element in div.
// --------------- OR ----------------- 
document.body.appendChild(h1);  // Adding element direct in Html Body.


// - i.e  Adding Fifth list Item.
<ul id="list">
<li>List 1</li>
<li>List 2</li>
<li>List 3</li>
<li>List 4</li>
</ul>

let list1 = document.getElementById("list");

let item = document.createElement("li");
item.textContent = "List 5";

list1.appendChild(item);

// --------------------------------------------------------------------------------------------

// Insert Before
// - The appendChild() method append the new element as the last child of the parent.
// - If you don't want that you can use the insertBefore() method.
<ul id="list">
<li>List 1</li>
<li>List 2</li>
<li>List 3</li>
<li>List 4</li>
</ul>

let list1 = document.getElementById("list");

let item = document.createElement("li");
item.textContent = "List 5";

let position = list1.firstElementChild;

list1.insertBefore(item, position);
          // new element, position          


// -i.e Adding child element after first position.
<ul id="list">
<li>List 1</li>
<li>List 2</li>
<li>List 3</li>
<li>List 4</li>
</ul>

let list1 = document.getElementById("list");

let item = document.createElement("li");
item.textContent = "List 5";

let position = list1.firstElementChild.nextElementSibling;
//  Adding child element after First position.
let position = list1.firstElementChild.nextElementSibling.nextElementSibling;
//  Adding child element after Second position.

list1.insertBefore(item, position);
          // new element, position


// - i.e Adding element outside of parent element.
<ul id="list">
<li>List 1</li>
<li>List 2</li>
<li>List 3</li>
<li>List 4</li>
</ul>

let parent = document.body;

let elm = document.createElement("h1");
elm.textContent = "This is New Heading"

let list = document.getElementById("list");

parent.insertBefore(elm, list);

// ------------------------------------------------------------------------------------

// Remove Child Element
<ul id="menu">
<li>Home</li>
<li>Product</li>
<li>About Us</li>
</ul>

let parent = document.getElementById("menu");
let elm = parent.firstElementChild;

parent.removeChild(elm);  // Home list will be remove.


// - i.e
<ul id="menu">
<li>Home</li>
<li>Product</li>
<li>About Us</li>
</ul>

let parent = document.getElementById("menu");
let elm = parent.firstElementChild.nextElementSibling;

parent.removeChild(elm);  // Product list will be remove.

// document.body.removeChild(parent);  --> [ Parent Element will be remove.]

// ------------------------------------------------------------------------------------

// Clone Element
<ul id="menu">
<li>Home</li>
<li>Product</li>
<li>About Us</li>
</ul>

let parent = document.getElementById("menu");

let cloneElm = parent.cloneNode(true);
cloneElm.id="moblie-menu"; // It will be change the Id of clone element.
console.log(cloneElm);

document.body.appendChild(cloneElm);

// -----------------------------------------------------------------------------------

// Replace Element
<ul id="menu">
<li>Home</li>
<li>Product</li>
<li>About Us</li>
</ul>

let parent = document.getElementById("menu");

let item = document.createElement("li");
item.textContent = "Services";  // Creating new List named Services.

let replace = parent.firstElementChild.nextElementSibling;  // Selecting Product List.

parent.replaceChild(item, replace);  // (first parameter is new item, and second parameter is replace item.)

// -------------------------------------------------------------------------------------------

// Insert AdjacentHTML

{/* beforebegin */}
  <div class="intro">      {/* Selected Element */}
    {/*  afterbegin */}
    <h1>This is Heading.</h1>
    <p>This is Paragraph.</p>
    {/* beforeend */}
 </div>
// <!-- afterend -->

let elm = document.getElementById("intro");

let html = "<h1>This is new Heading.</h1>";

elm.insertAdjacentHTML('beforebegin', html);    // (Position, Element)

// -------------------------------------------------------------------------------------------

// Add Attributes
<button id="btn">Send</button>

let btn = document.getElementById("btn");

btn.setAttribute("name", "form1");   // (Attribute name, Attribute value)


// - Get Attributes
<button id="btn" name="form1">Send</button>

let btn = document.getElementById("btn");

let value = btn.getAttribute("name");
console.log(value);


// - Remove Attributes
<button id="btn" name="form1">Send</button>

let btn = document.getElementById("btn");

let value = btn.removeAttribute("name");


// - Checking Attributes
<button id="btn" name="form1">Send</button>

let btn = document.getElementById("btn");

let value = btn.hasAttribute("name");
console.log(value);

// -----------------------------------------------------------------------------------

// Inline Style
<button id="btn">Send</button>

let btn = document.getElementById("btn");

btn.style.cssText = "background-color: red; color: white;";
// - It will remove existing Inline css.


// - i.e 
<button id="btn">Send</button>

let btn = document.getElementById("btn");

btn.setAttribute("style", "color: white; background-color: red;");
// - It will remove existing Inline css.


// - i.e 
<button id="btn">Send</button>

let btn = document.getElementById("btn");

btn.style.color = "red";

// ------------------------------------------------------------------------------------------

// - i.e Internal CSS
<style>
      #btn{
        background-color: red;
        color: white;
      }
</style>

<button id="btn">Send</button>

let btn = document.getElementById("btn");


// - Get Internal CSS
<style>
      #btn{
        background-color: red;
        color: white;
      }
</style>

<button id="btn">Send</button>

let btn = document.getElementById("btn");

let sty = getComputedStyle(btn);
console.log(sty.color);


// - CSS Classes (Adding classes in HTML Element)
.color{
  background-color: cornflowerblue;
  color: darkolivegreen;
}

.dim{
  border: 1px solid red;
  padding: 100px;
}

<div id="box" class="color"></div>

let box1 = document.getElementById("box");

box1.className += " dim";


// - i.e
.color{
  background-color: cornflowerblue;
  color: darkolivegreen;
}

.dim{
  border: 1px solid red;
  padding: 100px;
}

<div id="box" class="color"></div>

let box1 = document.getElementById("box");

box1.classList.add("dim");

// ---------------------------------------------------------------------------------------

// Removing Classes
.color{
  background-color: cornflowerblue;
  color: darkolivegreen;
}

.dim{
  border: 1px solid red;
  padding: 100px;
}

<div id="box" class="color dim"></div>

let box1 = document.getElementById("box");

box1.classList.remove("dim");

// --------------------------------------------------------------------------------

// Replacing Classes
.color{
  background-color: cornflowerblue;
  color: darkolivegreen;
}

.dim{
  border: 1px solid red;
  padding: 100px;
}

<div id="box" class="color"></div>

let box1 = document.getElementById("box");

box1.classList.replace("color", "dim");  // (Old Class, New Class)

// --------------------------------------------------------------------------------

// Checking Class
.color{
  background-color: cornflowerblue;
  color: darkolivegreen;
}

.dim{
  border: 1px solid red;
  padding: 100px;
}

<div id="box" class="color"></div>

let box1 = document.getElementById("box");

let result = box.classList.contains("color");  // true
console.log(result);

// -----------------------------------------------------------------------------------

// Toggle
// - If class name is exist then it will remove and if not then it will add class name.
.color{
  background-color: cornflowerblue;
  color: darkolivegreen;
}

.dim{
  border: 1px solid red;
  padding: 100px;
}

<div id="box" class="color"></div>

let box1 = document.getElementById("box");

let result = box.classList.toggle("color");  // true
console.log(result);

// ----------------------------------------------------------------------------------------

// Width and Height of an Element
.color{
  background-color: cornflowerblue;
  color: darkolivegreen;
}

.dim{
  border: 1px solid red;
  padding: 100px;
}

<div id="box" class="color dim"></div>

let box1 = document.getElementById("box");

let width = box1.offsetWidth;
let height = box1.offsetHeight;

console.log(width);
console.log(height);


// - It will remove border width from height and width size.
let width = box1.clientWidth;
let height = box1.clientHeight;

console.log(width);
console.log(height);

// -----------------------------------------------------------------------------------

// DOM Events
// - HTML DOM allows JavaScript to react to HTML events.
// - Examples of HTML events.

// - When a user clicks the mouse
// - When a web page has loaded
// - When an image has been loaded
// - When the mouse moves over an element
// - When an input field is changed
// - When an HTML form is submitted
// - When a user strokes a key

// ---------------------------------------------------------------------------------------

// - i.e ( Using Inline Property )
<button id="btn" onclick="click()">Click Me</button>

function click() {
  alert("Button was Clicked!");
}


// - i.e
<button id="btn">Click Me</button>

function clickBtn(){
  alert("Button was Clicked!");
}

let btn = document.getElementById("btn");

btn.addEventListener("click", clickBtn);  // ("Event Name", function name);
//             --------------OR-----------------
// - Using Anonymous Function
btn.addEventListener("click", function(){
  alert("Button was Clicked!");
});

// -------------------------------------------------------------------------------------------

// Using Multiple Events on Element
<button id="btn">Click Me</button>

let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
  console.log("Button was Clicked!");
});

btn.addEventListener("mouseover", function(){
  console.log("mouseover is activated");
});

btn.addEventListener("mouseout", function(){
  console.log("mouseout is activated");
});

// -------------------------------------------------------------------------------------------

// Remove EventListener
<button id="btn">Click Me</button>

let btn = document.getElementById("btn");

function click1(){
  console.log("Clicked 1");
}

function click2(){
  console.log("Clicked 2");
}

btn.addEventListener("click", click1);
btn.addEventListener("click", click2);

btn.removeEventListener("click", click2);  // removing event listener

// ------------------------------------------------------------------------------------------

// Mouse Events
#box{
  height: 100px;
  width: 100px;
  background-color: peru;
}

<div id="box" onclick="fun()"></div>

function fun(){
  alert("Clicked");
}


// - i.e
#box{
  height: 100px;
  width: 100px;
  background-color: peru;
}

<div id="box" oncontextmenu="fun()"></div>

function fun(){
  alert("Right Clicked");
}


// - i.e
#box{
  height: 100px;
  width: 100px;
  background-color: peru;
}

<div id="box" ondblclick="fun()"></div>

function fun(){
  alert("Double Clicked");
}

