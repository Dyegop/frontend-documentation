/*
DOCUMENT OBJECT MODEL
    -Every element in a browser is a different javascript object, like window, html, etc
    -JavaScript can access and change all this elements and using the Document Object Model (DOM)
    -DOM connects web pages to scripts or programming languages with a logical tree:
        -Each branch of the tree ends in a node
        -Each node contains objects
    -A node is an interface that is implemented by multiple other objects (document, element, etc)
    -We usually grab the HTML element we want to work with as a variable and use those variables in our code

DOCUMENT OBJECT MODEL - INTERFACES
    -Attr         -> any HTML attribute
    -Comment:     -> textual notations within markup
    -Document     -> a web page loaded in the browser
    -Element      -> an HTML element (p, div, table, a, etc)
    -EventTarget  -> an interface implemented by objects that can receive events and may have listeners (mainlyElement, Document, and Window)
    -NamedNodeMap -> a collection of Attr objects that can be accessed by name or by index
    -Node         -> an abstract base class upon which many other are based (mainly Document, Element, and DocumentFragment)
    -Window       -> represent a window containing a DOM document
*/


// DOCUMENT

// Properties
// [any html tag] -> any html tag (a, body, html, form, head, img, area, script, title, etc)
// URL            -> URL of the document
const p = document.p

// Methods
// getElementById(id)           -> return the element with the id
// getElementsByClassName(elem) -> return an array of all elements belonging to a class
// getElementsByTagName(elem)   -> return an HTMLCollection of all elements with the tag 
// createElement(elem)	        -> create an HTML element
// removeChild(elem)	        -> remove an HTML element
// appendChild(elem)	        -> add an HTML element
// replaceChild(new, old)	    -> replace an HTML element
// querySelector()              -> return the first object matching the CSS style selector
// querySelectorAll()           -> return all objects matchin the CSS style selector
// write()                      -> write directly to the HTML output stream (Never use it after the document is loaded)
document.getElementById("url").textContent = document.URL;
const newDiv = document.createElement("div");
document.querySelector('#foo\\\\bar');





// ELEMENT/HTML ELEMENT

// Properties
// id        -> id of an element
// innerHTML -> represent the content of an element
// innerText -> represent the "rendered" text content of an element
//    -the difference with textContent is that innerText is aware of the rendered appearance of text


// Methods
// click()            -> simulate a mouse-click on an element
// querySelector()    -> return the first object matching the CSS style selector
// querySelectorAll() -> return all objects matchin the CSS style selector
var el = document.body.querySelector("style[type='text/css'], style:not([type])");





// EVEN TARGET

// Methods
// addEventListener(type, listener) -> sets up a function that will be called whenever the specified event is delivered to the target
const el = document.getElementById("outside");
el.addEventListener("click", modifyText, false);





// NAMED NODE MAP

// Methods
// getNamedItem()    -> return a Attr, corresponding to the given name
// item()	         -> return the attribute node at a specified index
// length	         -> return the number of attribute nodes
// removeNamedItem() -> remove a specified attribute node
// setNamedItem()    -> replace or adds the specified attribute node by name





// NODE

// Properties
// childNodes  -> return a live NodeList containing all the children of this node
// textContent -> represent the text content of the node and its descendants





// WINDOW

// Properties

// Methods
// alert(str)                  -> display an alert dialog
// close()                     -> close current window
// confirm()                   -> display a dialog with a message that the user needs to respond to
// find(str)                   -> find str in a window
// open(url, Name, [Features]) -> open a new window
// prompt(str)                 -> accept prompt inputs
// scroll(x-coord, y-coord)    -> scroll the window to a particular place
// setInterval(func, ms)       -> call a function repeatedly every ms (using eval() under the hood)
// stop()                      -> stop window loading
alert("Hello world!");
confirm("Do you really want to leave?");
open('moreinfo.htm');
setInterval(myCallback, 500, 'Parameter 1', 'Parameter 2');
scroll({top: 100, left: 100, behavior: 'smooth'});