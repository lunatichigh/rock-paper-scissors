//Global Scope
humanScore = 0;
computerScore = 0;


//Play Round
function playRound() {

    let computerChoice = getComputerChoice(0, 2);

function getComputerChoice(min, max){
    return Math.round(Math.random() * (max - min));
}
console.log(computerChoice);
//console.log(getComputerChoice(0, 2));

//Human choice
//Get the human's choice by using a prompt
//Store player's choice in humanChoice

let humanChoice = getHumanChoice();

function getHumanChoice(){
    return prompt("Choose Rock, Paper, or Scissors.").toLowerCase();
}
console.log(humanChoice);

    //Player Chooses Rock
    if (humanChoice === "rock" && computerChoice === 2){
        console.log("You win! Rock beats Scissors!");
        humanScore++;
    } 
    
    else if (humanChoice === "rock" && computerChoice === 1) {
        console.log("You lose! Paper beats Rock!");
        computerScore++;
    }
    //Player Chooses Paper
    else if (humanChoice === "paper" && computerChoice === 0){
        console.log("You win! Paper beats Rock!");
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === 2){
        console.log("You lose! Scissors beats Paper!");
        computerScore++;
    }
    //Player Chooses Scissors
    else if (humanChoice === "scissors" && computerChoice === 1){
        console.log("You win! Scissors beats Paper!");
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === 0){
        console.log("You lose! Rock beats Scissors!");
        computerScore++;
    }
    
    else {
        console.log("It's a draw!")
    }
    //Check if the player has won or lost against the computer by comparing humanScore and computerScore values
    // if (humanScore > computerScore) {
    //     console.log("Winner winner chimkin dinner! You won the round!")
    // } 
    // else if (humanScore < computerScore){
    //     console.log("Waa, waa... you lost the round.")
    // }
    // else {
    //     console.log("A tie! Nobody won!")
    // }
}
//iterate through 5 rounds using for loop
//Check whether the player or cpu has incremented more wins and display who won by comparing the two values after the for loop is finished
function playGame(){
    
    for (let roundsPlayed = 0; roundsPlayed < 5; roundsPlayed++){
        playRound();
    }
    if (humanScore > computerScore){
        console.log("You've won more rounds than the CPU! Congrats!")
    } 
    else if (humanScore === 0 && computerScore === 0){
        console.log("You somehow managed to tie all 5 rounds!")
    }
    else {
        console.log("The CPU has won more rounds than you! Boo!")
    }
}
playGame();


