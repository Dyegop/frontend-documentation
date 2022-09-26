/*
CLASSES        
    -Javascript classes are a better way to write above constructor functions
    -They are available in ES6
    -Creating a class in javascript
        class ClassName {
            constructor(opt_par1, opt_par2, ...) {
                this.opt_par1 = opt_par1;
                this.opt_par2 = opt_par2;
                this.attribute = default_value;
                ...
            }
        }
    -Constructor method properties:
        -It has to have the exact name "constructor"
        -It is executed automatically when a new object is created
        -It is used to initialize object properties
    -Class methods:
        -Class methods are created with the same syntax as object methods
        -Creating a class method
            class ClassName {
                constructor() { ... }
                method_1() { ... }
                method_2() { ... }
                ...
            }
*/

// CLASS EXAMPLE

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age(x) {
      return x - this.year;
    }
  }
  
  let date = new Date();
  let year = date.getFullYear();
  let myCar = new Car("Ford", 2014);
  document.getElementById("demo").innerHTML= "My car is " + myCar.age(year) + " years old.";