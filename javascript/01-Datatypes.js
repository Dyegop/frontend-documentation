/*
DATATYPES:
    -Numbers: integers, floats, negatives
    -Strings: a sequence of characters
    -Booleans: True or False
    -Objects: javascript object
    -Functions: javascript function
    -Undefined: a value that is not defined
    -Null: value defined to null

OPERATORS:
    -Arithmetic operators: +, -, *, /, %, **, ++, --
    -Assigment operators: =, +=, -=, *=, /=, %=, **=
    -Comparison operators: >, <, >=, <=, ==, !=, ===, !==, ?
    -Logical operators: &&, ||, !
    -Type coercion (Javascript try to convert objects to similar data types to perform comparisons)
        -check only value         -> ==, !=,
        -check value and datatype ->  ===, !==

VARIABLES AND SCOPE:
    -Declaring variables:
        -Function Scope: variable exists where it is declared (global or function)
            -var varName = value;
        -Block Scope: variable exists in the block ({...}) it is declared (function, loops, if, etc)
            -let varName = value;
            -const varName = value;
    -Const is similar to let except the value can't be modified
    -Variables declared in loops with let won't keep any value they previously had
    -Redeclaring a let variable with let or var in the same scope or block is not allowed

STRINGS:
    -Concatenation           -> "Example of "+ var1 +" string concatenation")
    -Interpolating variables -> `Example of ${var1} interpolating ${var2} variables`)
    -Access characters       -> "Example"[int];
    -Escape characters       -> \n, \t, \b, \r

ARRAYS:
    -Arrays allow us to store multiple values as a single variable
    -Declaring arrays  -> var mixedArray = ["string", 2, 3.5];
    -Access elements   -> var mixedArray[3];
    -Reassign elements -> mixedArray[0] = 123

OBJECTS:
    -Creating objects
        -single object            -> var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
        -single object with "new" -> var person = new Object(); (Object() is a general constructor for objects)
    -Types of objects
        -Object()  -> define a javascript object
        -Array()   -> define array object
        -Date()    -> define a date object
        -Boolean() -> define a boolean object
        -Number()  -> define a numeric object (other numeric objects are Math or BigInt)
        -String()  -> define an string object
        -RegExp()  -> define a RegExp object
    -Javascript Objects have properties and methods
        -property -> object attributes (firstName: John)
        -method   -> actions performed on objects and stored as attributes (name: function() {return this.firstName;})
    -Javascript Objects are mutable
    -Javascript Objects do NOT retain order
    -Javascript Objects can use "this" keyword to reference values inside an object method
    -Functions are also considered objects

ERRORS:
    -try statement     -> test a block of code for errors
    -catch statement   -> handle the error
    -throw statement   -> create custom errors
    -finally statement -> execute code, after try and catch, regardless of the result
*/

// Connect javascript to html
<script src="my_javascript_code.js"> </script>


// Find datatypes
typeof "John" // Returns "string"
typeof 3.14   // Returns "number"


// Declare variables
var bankAccount = 100;
var deposit = 50;
var total = account + deposit;
// Variables can be redeclaring
var x = 10;
{
    var x = 2; // Here x is 2
}
// Here x is 2


// Variable scope with let
var x = 10;
{
    let x = 2; // Here x is 2
}
// Here x is 10


// Variable scope in loops
var i = 5;
for (var i = 0; i < 10; i++) {
  // some statements
}
// Here i is 10
let i = 5;
for (let i = 0; i < 10; i++) {
  // some statements
}
// Here i is 5


// Logic behaviour
true == 1;         // true
true === 1;        // false
false == 0;        // true
false === 0;       // false
null == undefined; // true
NaN == NaN;        // false


// Strings
// Access characters of a string
"hello"[0];
// String concatenation/interpolating variables
"Your amount is "+bankAccount+" in euros";
`Your amount is ${bankAccount} in euros`;
// Return lenght of a string
"example".length


// Arrays
// Creating array or matrix (a matrix is a type of array)
var mixedArray = [true, 20, "string"];
var matrix = [[1,2,3],[4,5,6],[7,8,9]];
// Accessing element of an array
var number = mixedArray[1];
var last_item = myArr[myArr.length - 1];
// Return lenght of an array
mixedArray.length
// Reassignment element of an array
mixedArray[0] = false;
// Iterate over an array
var arr = ['A','B','C'];
for (letter of arr) {
    alert(letter);
}


// Objects
// Creating an Object
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {return this.firstName + " " + this.lastName;}
};
// Accessing object properties
person['firstName'];
carInfo.firstName;
// Adding properties
person.eyeColor = "blue";
//Deleting properties
delete person.eyeColor
// Object methods
person.fullName
// Iterate through object
for (var key in person) {
    console.log(key);
    console.log(person[key]+"\n");
}
// Accessing elements of an object using this
var carInfo = {
    make: "Toyota",
    year: 1990 ,
    model: "Camry" ,
    carAlert: function(){
      alert('Your car info is, make: '+this.make+ " year: "+this.year+ " model:"+this.model);
    }
}


//Handling errors
try {
    alert("Welcome guest!");
}
catch(err) {
    document.getElementById("demo").innerHTML = err.message;
}
finally{
    alert("Script executed");
}