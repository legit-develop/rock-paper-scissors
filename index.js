function getComputerChoice() {
  const computerChoice = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return computerChoice[randomIndex];
}

function playRound() {
  const computerSelection = getComputerChoice();
  const playerSelection = prompt("rock, paper, scissors: ");

  if (playerSelection === computerSelection) {
    console.log("You won");
  } else {
    console.log("You lose");
  }
}

function game() {
  playRound();
}

for (let i = 0; i < 5; i++) {
  game();
}
