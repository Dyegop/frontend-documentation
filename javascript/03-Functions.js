/*
FUNCTIONS
    -Creating functions:
        function functionName(opt_parameter1, opt_parameter2, opt_parameterN) {
            // code to be executed
        }
        
    -We can add default optional values as well as return values:
        function formal(name="Sam",title="Sir"){
            return title+" "+name;
        }
    -Functions that doesn't have a return value defaults to undefined
    -Refering function vs calling function to be executed:
        -refering functions  -> funcName
        -calling a function  -> funcName()

CONSTRUCTOR FUNCTIONS
    -Constructor functions are the equivalent of classes in many programming languages
    -They are functions that defines an object and are invoked using "new" keyword
    -Constructor functions start with capital letter by convention
    -Example:
        function Person(name) {
            this.name = name;
            this.position = position;
            this.hi = function () {
                console.log(`Hi! My name is ${this.name}.`);
            };
        }
        const eminem = new Person('Slim Shady');

ARROW FUNCTIONS
    -Declaring arrow function: 
        var arrowFunc = (Arguments) => Expression;
    -With arrow functions there are no binding of "this" keyword
    -Example: let sum = (a, b) => a + b;
*/


// GENERIC FUNCTIONS

// eval(srt)   -> evaluates JavaScript code represented as a string
// If the string represents an expression, eval() evaluates the expression
eval(new String('2 + 2'));   // returns a String object containing "2 + 2"
eval('2 + 2');               // returns 4
eval(('2 + 2').toString());  // returns 4





// CONSOLE FUNCTIONS

// console.log(msg)   -> log a message to the console (messages can be of any type)
// console.clear()    -> clear console
// console.error(err) -> write an error to the console (errors can be strings or objects)
console.log("Hello world");
console.clear()
console.error({ firstname : "John", lastname : "Doe" });





// STRING FUNCTIONS

// search(str)                   -> return the index of the first occurrence for a string
// indexOf/lastIndexOf(str, int) -> return the index of the first/last occurrence of a string, or -1 if not str found
// int: optional parameter, starting position to search
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");
var pos = str.lastIndexOf("locate", 15);

// slice(start, end)     -> return part of string from start to end (optional)
// substring(start, end) -> return part of string from start to end (optional), but it can't take negative values
// substr(start, length) -> return part of string from start to an specific length
var str = "Apple, Banana, Kiwi";
var res = str.slice(7);
var res = str.substring(7, 13);
var res = str.substr(7, 6);

// replace() -> replace a specified value with another value in a string
str = "Please visit Microsoft and Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
var n = str.replace(/MICROSOFT/i, "W3Schools"); // regex for case insensitive replacement (with /i flag)
var n = str.replace(/Microsoft/g, "W3Schools"); // regex for global replacement (with /g flag)

// toUpperCase/toLowerCase() -> convert string to upper/lower case
var text1 = "Hello World!";
var text2 = text1.toUpperCase();
var text2 = text1.toLowerCase();

// concat(value, str) -> join two or more strings using value
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);

// trim() -> remove whitespace from both sides of a string
var str = "       Hello World!        ";
alert(str.trim());

// charAt() -> return the character at a specified index (position) in a string
var str = "HELLO WORLD";
str.charAt(0);

// split(value) -> split string into an array by value
var txt = "a,b,c,d,e";
txt.split(","); // split by ","
var txt = "Hello";
txt.split("") // split by characters





// ARRAY FUNCTIONS

// pop()     -> remove the last element from an array
// push()    -> append new elements at the end of an array and return the new array length
// shift()   -> remove the first array element and return it
// unshift() -> add a new element at the beginning of an array and return the new array length
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
fruits.push("Kiwi");
fruits.shift();
fruits.unshift("Lemon");

// splice(start, deleteCount, itemN) -> method changes the contents of an array by removing or replacing existing elements and/or adding new elements
// deleteCount: indicate the number of elements in the array to remove from start; if it is 0, no elements will be removed
// itemN: elements to add to the array
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); // inserts at index 1
months.splice(4, 1, 'May'); // replaces 1 element at index 4

// slice(start, end) -> slices out a piece of an array into a new array from start to end (optional)
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(3);
var others = fruits.slice(1, 3);

// indexOf() -> return the first index at which a given element can be found or -1 if it is not present
var numbers = ['one', 'two', 'three'];
numbers.indexOf('one')

// includes(elem, forIndex) -> return true if the array contains the element, and false if not
// forIndex: position in this array at which to begin searching
var arr = ['a', 'b', 'c']
arr.includes('c', 3) // false

// forEach(function) -> perform the specified action for each element in an array
var myArr = ['one','two','three'];
myArr.forEach(alert);





// OBJECT FUNCTIONS

// create(obj) -> create a new object using existing one
var person = {
    isHuman: false,
    printIntroduction: function() {console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`); }
};
var me = Object.create(person);
me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

// entries(obj) -> return an array of arrays of string-keyed property values, same as [[keys], [values]]
// values(obj)  -> return an array of property values
const object1 = {a: 'somestring', b: 42,c: false};
for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
}
console.log(Object.values(object1));