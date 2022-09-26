function addNew(name, array){
    array.push(name);
}

function remove(name, array){
    if (array.includes(name)){
        array.splice(array.indexOf(name), 1);
    }
    else {
        console.log(name + " not found in " + array);
    }
}

function display(array){
    // array.forEach((e) => {console.log(e)});
    console.log(array)
}


var rooster = [];
var start = prompt("Would you like to start the roster web app? y/n");
var request = "empty";
   
if (start === "y") {
    while (request !== "quit") {
        request = prompt("Please select an action: add, remove, display, or quit.")
        if (request === "add") {
          addNew(prompt("Type a name to add"), rooster);
        } else if (request === "display") {
          display(rooster);
        } else if (request == "remove") {
          remove(prompt("Type a name to remove"), rooster);
        }
    }
}

alert("Thanks for using the Web App! Please refresh the page to start over.");