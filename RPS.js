let userScore = 0;
let computerScore = 0;


function playGame(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const gif = document.getElementById("resultGif");

    let resultText = "";

    if (userChoice === computerChoice) {
        resultText = "It's a Draw!";
        gif.classList.add("hidden");
    }
    else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        resultText = "You Win! ";
        userScore++;
        gif.src = "win.gif";
        gif.classList.remove("hidden");
        setTimeout(() => {
            gif.classList.add("hidden");
        }, 2000);
    }
    else {
        resultText = "Computer Wins! ";
        computerScore++;
    }
    gif.classList.remove("hidden");


    document.getElementById("result").textContent =
        `You chose ${userChoice}, Computer chose ${computerChoice}. ${resultText}`;

    document.getElementById("score").textContent =
        `You: ${userScore} | Computer: ${computerScore}`;

}
