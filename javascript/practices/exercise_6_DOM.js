// Grab the Header with h1
var header = document.querySelector("h1")
// Alternative -> var header2 = document.getElementsByTagName("h1")

// Interface with the style.
// header.style.color = 'red'

// Random Color Function:
// http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript
function getRandomColor(){
  var letters = "0123456789ABCDEF";
  var color = '#';
  // colors consist on 6 different characters
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  header.style.color = color;
}

// Call setInterval an pass the function name (func) or a string with "func()"
// setInterval(getRandomColor, 500);
setInterval("getRandomColor()", 500);
open('moreinfo.htm');