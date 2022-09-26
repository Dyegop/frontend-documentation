/*
JAVASCRIPT FLOW CONTROL:
    -If-else:
        if (condition){
            // Execute some code
        }
        else if (condition){
            // Optional condition
            // Execute code if condition previous condition is false and new one is true
        }
        else {
            // Code to execute if above was not true
        }

    -While:
        while (condition){
            // Code executed here while condition is true
            if (condition){
            // We can use break to exit loop
                break; 
            }
        }

    -For:
        for (initial_condition; final_condition; after_loop_conditon) {
        // code block to be executed
        }
    
    -Switch:
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

*/

// If-else example:
var report = 'blank';
var ham = 5;
var cheese = 10;
if (ham >= 10 && cheese >= 10) {
    report = "Strong sales of both items";
} else if (ham === 0 && cheese === 0) {
    report = "Nothing sold!";
} else {
    report = 'We had some sales';
}
console.log(report);


// While loop example:
var x = 0;
while(x < 5){
    console.log("x is currently: "+ x);
    if(x === 3){
      console.log("x is equal to 3, BREAK");
      break;
    }
    console.log("x is still less than 5, adding 1 to x");
    x = x+1;
}


// For loop example:
var word = "ABABABABABA"
for (i = 0; i < word.length; i+=2) {
    console.log(word[i]);
}


// Switch example:
switch (new Date().getDay()) {
    case 0:
        day = "Weekday";
        break;
    case 1:
        day = "Weekend";
        break;
    default:
        day = null;
        break;
}