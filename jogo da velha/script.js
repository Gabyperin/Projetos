let board = document.getElementById("board");
let cells = document.getElementsByClassName("cell");
let message = document.getElementById("message");
let resetButton = document.getElementById("reset");

let turn = "X";
let gameOver = false;
let moves = 0;

function checkForWin() {
    // horizontal wins
    for (let i = 0; i < 9; i += 3) {
        if (cells[i].innerHTML != "" && cells[i].innerHTML == cells[i + 1].innerHTML && cells[i + 1].innerHTML == cells[i + 2].innerHTML) {
            return true;
        }
    }

    // vertical wins
    for (let i = 0; i < 3; i++) {
        if (cells[i].innerHTML != "" && cells[i].innerHTML == cells[i + 3].innerHTML && cells[i + 3].innerHTML == cells[i + 6].innerHTML) {
            return true;
        }
    }

    // diagonal wins
     if(cells[0].innerHTML != "" && cells[0].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[8].innerHTML) {
        return true;
    }
    if (cells[2].innerHTML != "" && cells[2].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[6].innerHTML) {
        return true;
    }

    return false;
}

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function () {
        if (!gameOver && this.innerHTML == "") {
            this.innerHTML = turn;
            moves++;

            if (checkForWin()) {
                message.innerHTML = turn + " ganhou!";
                gameOver = true;
            } else if (moves == 9) {
                message.innerHTML = "Empate!";
                gameOver = true;
            } else {
                turn = turn == "X" ? "O" : "X";
                message.innerHTML = turn + "'s turno";
            }
        }
    });
}

resetButton.addEventListener("click", function () {
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = "";
    }

    turn = "X";
    gameOver = false;
    moves = 0;

    message.innerHTML = turn + "'s turno";
});