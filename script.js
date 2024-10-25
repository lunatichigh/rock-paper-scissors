//Global scope variables
humanScore = 0;
computerScore = 0;
//Gets the computer's choice
function getComputerChoice(min, max){
  return Math.random() * (max - min) + 0;
}

let computerChoice = Math.round(getComputerChoice(0, 2));
console.log(computerChoice);

if (computerChoice == 0){
    console.log("Rock");
} else if (computerChoice == 1) {
    console.log("Paper");
} else {
    console.log("Scissors");
}

//Gets the human's choice
let humanChoice = window.prompt("Pick Rock, Paper or Scissors:" ,);
console.log(humanChoice);

function getHumanChoice(){
    let humanChoice = window.prompt("Pick Rock, Paper or Scissors:" ,);
console.log(humanChoice);
}

if (humanChoice === "Rock"){
    console.log("You chose Rock.");
} else if (humanChoice === "Paper"){
    console.log("You chose Paper.");
} else {
    console.log("You chose Scissors.");
}