const gameChoices = ["Rock", "Paper", "Scissor"];
const userDisplay = document.getElementById("userDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const userScoreDisplay = document.getElementById("userScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let userScore = 0;
let computerScore = 0;

// giving direction and connection to HTML buttons
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

    // display container of chosen variable
    userDisplay.textContent = `You: ${userChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    // removes the colors if alerted tie
    resultDisplay.classList.remove("greenText", "redText");

    // i want green "You win" text and counter to add one each game won
    switch (result) {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            userScore++;
            userScoreDisplay.textContent = userScore;
            break;

    // i want red "You lose" text and compture score to add each game won
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}

// Reset Game Button after page is fully loaded
window.onload = function () {
    document.getElementById("resetBtn").addEventListener("click", resetGame);


    // when game is reset, score values reset to 0 
    function resetGame() {
        userScore = 0;
        computerScore = 0;
        userScoreDisplay.textContent = 0;
        computerScoreDisplay.textContent = 0;
    

    // when game is reset, I want to get rid of previous game's results
        userDisplay.textContent = "You:";
        computerDisplay.textContent = "Computer:";
        resultDisplay.textContent = "";
    }
}