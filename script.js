let board = Array(9).fill("");
let currentPlayer = "X";
let winner = null;
let scoreX = 0;
let scoreO = 0;
let round = 0;

// Winning combinations
const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const messageElement = document.getElementById('message'); // Create an element to display the current player

// Make a move
function move(index) {
    if (!winner && board[index] === "") {
        board[index] = currentPlayer;
        document.getElementsByClassName("box")[index].innerText = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        messageElement.textContent = `Current Player: ${currentPlayer}`; // Update the message with the current player
        win();
    }
}


// Check for a win
function win() {
for (let combination of winCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
    winner = board[a];
    document.getElementById("winner").innerText = "Player " + winner+" Won";
    break;
    }
}
if (!winner && board.every(box => box !== "")) {
    document.getElementById("winner").innerText = "It's a draw!";
    }
}

// Reset the board
function resetBoard() {
board = Array(9).fill("");
const boxs = document.getElementsByClassName("box");
for (let i = 0; i < boxs.length; i++) {
    boxs[i].innerText = "";
}
winner = null;
document.getElementById("winner").innerText = "";
round = 0;
}
