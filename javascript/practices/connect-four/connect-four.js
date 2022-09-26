// Draw board
function drawCircles(columns, rows) {
    // get the table
    var table = document.querySelector(".board");

    // creating all cells
    for (var x = 0; x < columns; x++) {
        // creates a table row
        var row = document.createElement("tr");

        for (var y = 0; y < rows; y++) {
            // Create a <td> element and put the <td> at the end of the table row
            var cell = document.createElement("td");
            var button = document.createElement("button");
            button.type = "button";
            row.appendChild(cell);
            cell.appendChild(button);
        }

        // add the row to the end of the table body
        table.appendChild(row);
    }
}


// Change the color of a button
function changeColor(rowIndex, colIndex, color) {
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color', color);
}


// Report back to current color of a button
function returnColor(rowIndex, colIndex) {
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

function reportWin(rowNum,colNum) {
    console.log("You won starting at this row,col");
    console.log(rowNum);
    console.log(colNum);
}


// Take in column index, returns the bottom row that is still gray
function checkBottom(colIndex) {
    var colorReport = returnColor(5, colIndex);
    for (var row = 5; row > -1; row--) {
        colorReport = returnColor(row, colIndex);
        if (colorReport === 'rgb(128, 128, 128)') {
            return row
        }
    }
}


// Check to see if 4 inputs are the same color
function colorMatchCheck(one, two, three, four) {
    return (one === two && one === three && one === four && one !== 'rgb(128, 128, 128)' && one !== undefined);
}


// Check for Wins
function horizontalWinCheck() {
    for (var row = 0; row < 6; row++) {
        for (var col = 0; col < 4; col++) {
            if (colorMatchCheck(returnColor(row, col), returnColor(row, col + 1), returnColor(row, col + 2), returnColor(row, col + 3))) {
                console.log('horiz');
                reportWin(row, col);
                return true;
            } else {
                continue;
            }
        }
    }
}

function verticalWinCheck() {
    for (var col = 0; col < 7; col++) {
        for (var row = 0; row < 3; row++) {
            if (colorMatchCheck(returnColor(row, col), returnColor(row + 1, col), returnColor(row + 2, col), returnColor(row + 3, col))) {
                console.log('vertical');
                reportWin(row, col);
                return true;
            } else {
                continue;
            }
        }
    }
}

function diagonalWinCheck() {
    for (var col = 0; col < 5; col++) {
        for (var row = 0; row < 7; row++) {
            if (colorMatchCheck(returnColor(row, col), returnColor(row + 1, col + 1), returnColor(row + 2, col + 2), returnColor(row + 3, col + 3))) {
                console.log('diag');
                reportWin(row, col);
                return true;
            } else if (colorMatchCheck(returnColor(row, col), returnColor(row - 1, col + 1), returnColor(row - 2, col + 2), returnColor(row - 3, col + 3))) {
                console.log('diag');
                reportWin(row, col);
                return true;
            } else {
                continue;
            }
        }
    }
}


// Game End
function gameEnd(winningPlayer) {
    for (var col = 0; col < 7; col++) {
        for (var row = 0; row < 7; row++) {
            $('h3').fadeOut('fast');
            $('h2').fadeOut('fast');
            $('h1').text(winningPlayer + " has won! Refresh your browser to play again!").css("fontSize", "50px")
        }
    }
}







// Draw circles in page
drawCircles(6, 7);

// Assign player's name and color
var player1 = prompt("Player One, enter your name: you will be Blue");
var player1Color = "rgb(86, 151, 255)";
var player2 = prompt("Player One, enter your name: you will be Red");
var player2Color = "rgb(237, 45, 73)";

var game_on = true;
var table = $("table tr");


// Start with Player One
var currentPlayer = 1;
var currentName = player1;
var currentColor = player1Color;

$('h3').text(player1 + ": it is your turn, please pick a column to drop your blue chip.");

$('.board button').on('click', function () {
    // Recognize what column was chosen
    var col = $(this).closest("td").index();

    // Get back bottom available row to change
    var bottomAvail = checkBottom(col);

    // Drop the chip in that column at the bottomAvail Row
    changeColor(bottomAvail, col, currentColor);

    // Check for a win or a tie.
    if (horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck()) {
        gameEnd(currentName);
    }

    // If no win or tie, continue to next player
    currentPlayer = currentPlayer * -1;

    // Re-Check who the current Player is.
    if (currentPlayer === 1) {
        currentName = player1;
        $('h3').text(currentName + ": it is your turn, please pick a column to drop your blue chip.");
        currentColor = player1Color;
    } else {
        currentName = player2
        $('h3').text(currentName + ": it is your turn, please pick a column to drop your red chip.");
        currentColor = player2Color;
    }

})