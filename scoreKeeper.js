// Player One 
var p1Button = document.querySelector("#p1");
var p1Display = document.querySelector("#p1Display");
var p1Score = 0;

// Player Two
var p2Button = document.getElementById("p2");
var p2Display = document.querySelector("#p2Display");
var p2Score = 0;

// Reset
var resetButton = document.getElementById("reset");

// Input Area Box
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");   // Selects span inside a paragraph tag 

// Game Functions
var gameOver = false;
var winningScore = 5;
var winnerDisplay = document.querySelector("#winner");

p1Button.addEventListener("click", function(){
    if (!gameOver){
        p1Score++;
        if (p1Score === winningScore){
            // Adds winner class to the span
            p1Display.classList.add("p1winner");
            winnerDisplay.textContent = "Player 1 Wins!";
            winnerDisplay.classList.add("p1winner");
            gameOver = true;
        } 
        p1Display.textContent = p1Score;
    } 
});

p2Button.addEventListener("click", function(){
    if (!gameOver){
        p2Score++;
        if (p2Score === winningScore){
            p2Display.classList.add("p2winner");
            winnerDisplay.textContent = "Player 2 Wins!";
            winnerDisplay.classList.add("p2winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});

resetButton.addEventListener("click", function(){
    reset();
});

function reset(){
    p1Score = 0;
    p2Score = 0;

    p1Display.textContent = 0;
    p2Display.textContent = 0;

    p1Display.classList.remove("p1winner");
    p2Display.classList.remove("p2winner");

    winnerDisplay.classList.remove("p1winner");
    winnerDisplay.classList.remove("p2winner");

    gameOver = false;

    winnerDisplay.textContent = "";
}

// change occurs when a change occurs such as
// deleting or input
numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});
