
function getComputerChoice(min, max){
  return Math.random() * (max - min) + 0;
}

let computerChoice = Math.round(getComputerChoice(0, 2));
console.log(computerChoice);

if (computerChoice == 0){
    console.log("Rock");
} else if (computerChoice == 1) {
    console.log("Scissors");
} else {
    console.log("Paper");
}

// console.log(Math.round(getComputerChoice()));