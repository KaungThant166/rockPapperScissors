const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

const playGame = (playerChoice) => {
  let result = "";
  const computerValue = ["rock", "papper", "scissors"];
  const computerChoice = computerValue[Math.floor(Math.random() * 3)];

  if (computerChoice === playerChoice) {
    result = "It's a TIE!";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "You Win!" : "You Lose!";
        break;
      case "papper":
        result = computerChoice === "rock" ? "You Win!" : "You Lose!";
        break;
      case "scissors":
        result = computerChoice === "papper" ? "You Win!" : "You Lose!";
        break;
    }
  }

  playerDisplay.textContent = `Player:${playerChoice}`;
  computerDisplay.textContent = `Computer:${computerChoice}`;
  resultDisplay.textContent = `Result:${result}`;
  resultDisplay.classList.remove("greenText", "redText");

  switch (result) {
    case "You Win!":
      resultDisplay.classList.add("greenText");
      break;
    case "You Lose!":
      resultDisplay.classList.add("redText");
      break;
  }
};
