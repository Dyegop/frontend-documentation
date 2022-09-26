console.log("Connected!")

// Restart
/* Alternative with querySelector
    selector in querySelector(selector) must begin with "#"
    var restart = document.querySelector("#b") */
var restart = document.getElementById("b")





// Grab all the squares
/* Alternative with getElementById and getElementsByTagName
    var table = document.getElementById("table");
    var trs = table.getElementsByTagName("tr");
    var tds = null;
    for (var i=0; i<trs.length; i++) {
        tds = trs[i].getElementsByTagName("td");
        for (var n=0; n<tds.length;n++) {   
            console.log(tds[n])
            tds[n].onclick=function() { alert(this.innerHTML); }
        }
    } */
var squares = document.querySelectorAll('td')




// Clear all the squares
/* Alternative with addEventListener
    This basically adds a listener that calls clearBoard function when user clicks on 'restart' button
    restart.addEventListener('click', clearBoard) */
function clearBoard() {
    for (i=0; i<squares.length; i++) {
        squares[i].innerText = "";
    }
}
restart.onclick = function() {clearBoard()};





// Check the square marker and add event listeners to all squares
function ChangeMarker(){
  if(this.textContent === ''){
    this.textContent = 'X';
  }else if (this.textContent === 'X') {
    this.textContent = 'O';
  }else {
    this.textContent = '';
  }
};

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', ChangeMarker);
}

/* Logic explanation:
    When we click on 'squares[i]' (any square), constructor function 'ChangeMarker' is called
    'ChangeMaker' will check if-else conditions and will return a different value 
    The 'textContent' property of 'squares[i]' will take the return value since 'squares[i]' is the object that is executing addEventListener */
