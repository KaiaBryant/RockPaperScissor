const gameChoices = ["Rock", "Paper", "Scissor"];
const userDisplay = document.getElementById("userDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const userScoreDisplay = document.getElementById("userScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let userScore = 0;
let computerScore = 0;

document.querySelector(".rock__btn").addEventListener("click", () => playGame("Rock"));
document.querySelector(".paper__btn").addEventListener("click", () => playGame("Paper"));
document.querySelector(".scissor__btn").addEventListener("click", () => playGame("Scissor"));



function playGame(userChoice) {

    // we want the computer to randomly choose between the three variables each game is played.
    const computerChoice = gameChoices[Math.floor(Math.random() * 3)];
    let result = "";


    // if users choice is true to computers choice, then result "It's a tie"
    if (userChoice === computerChoice) {
        result = "IT'S A TIE!";
    }

    // if not, cases below will match it's condition or otherwise the other

    else {
        switch (userChoice) {
            case "Rock":
                result = (computerChoice === "Scissor") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "Paper":
                result = (computerChoice === "Rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "Scissor":
                result = (computerChoice === "Paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    userDisplay.textContent = `You: ${userChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch (result) {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            userScore++;
            userScoreDisplay.textContent = userScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}

// Reset Game Button
window.onload = function () {
    document.getElementById("resetBtn").addEventListener("click", resetGame);

    function resetGame() {
        userScore = 0;
        computerScore = 0;
        userScoreDisplay.textContent = 0;
        computerScoreDisplay.textContent = 0;

        userDisplay.textContent = "You:";
        computerDisplay.textContent = "Computer:";
        resultDisplay.textContent = "";
    }
}