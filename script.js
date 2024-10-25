//Global Scope
humanScore = 0;
computerScore = 0;

//Computer Choice
//Get the computer's choice by making function getComputerChoice
//return rounded random number back to getComputerChoice with values between 0 - 2

function getComputerChoice(min, max){
    return Math.round(Math.random() * (max - min));
}

console.log(getComputerChoice(0, 2));

//Human choice
//Get the human's choice by using a prompt
//Store player's choice in humanChoice

let humanChoice = getHumanChoice();

function getHumanChoice(){
    return prompt("Choose Rock, Paper, or Scissors.")
}
console.log(humanChoice);


