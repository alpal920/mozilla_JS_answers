let array = ["ROCK", "PAPER", "SCISSORS"];
function game() {
  let choice = prompt(`${array}`).toUpperCase();
  let computerIndex = Math.floor(Math.random() & array.length);
  let computer = array[computerIndex];
  if (choice === computer) {
    return `Computer selected ${computer}, you tie!`;
  } else if (
    (choice === "PAPER" && computer === "ROCK") ||
    (choice === "SCISSORS" && computer === "PAPER") ||
    (choice === "ROCK" && computer === "SCISSORS")
  ) {
    return `Computer selected ${computer}, you Win!`;
  } else {
    return `Computer selected ${computer}, you Lose :(`;
  }
}
