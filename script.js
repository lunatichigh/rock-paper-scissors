// //Global Scope
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

//UI Logic *********************************************


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", chooseRock);
paper.addEventListener("click", choosePaper);
scissors.addEventListener("click", chooseScissors);

// const container = document.querySelector("#container");

// const results = document.createElement("div");
// results.classList.add("results");
// results.textContent = `Player Score ${humanScore}`;

// container.appendChild(results);

// Game Logic*******************************************************

function chooseRock() {

const container = document.querySelector("#container");

const results = document.createElement("div");
results.classList.add("results");

const announceWinner = document.createElement("div");
announceWinner.classList.add("announceWinner");
    
container.appendChild(results);
container.appendChild(announceWinner);

let computerChoice = getComputerChoice(0, 2);
        
function getComputerChoice(min, max){

    return Math.round(Math.random() * (max - min));

}
    console.log(computerChoice);

    if (computerChoice === 2){
        console.log("You win! Rock beats Scissors!");
        results.textContent = `Round: ${++roundsPlayed} Player Score: ${++humanScore} VS Computer Score: ${computerScore}`;
    } 
    
    else if (computerChoice === 1) {
        console.log("You lose! Paper beats Rock!");
        results.textContent = `Round: ${++roundsPlayed} Player Score: ${humanScore} VS Computer Score: ${++computerScore}`;
    }
    else {
        console.log("Draw!");
        results.textContent = `Round: ${++roundsPlayed} Player Score: ${humanScore} VS Computer Score: ${computerScore}`;
    }

    if (humanScore > computerScore && roundsPlayed === 5){
        announceWinner.textContent = "Winner: Player! You've won more rounds than the CPU! Congrats!";
    } 
    else if (humanScore === computerScore && roundsPlayed === 5){
        announceWinner.textContent = "Draw!";
    }
    else if (humanScore < computerScore && roundsPlayed === 5){
        announceWinner.textContent = "Winner: CPU! The CPU has won more rounds than you! Boo!";
    }
    console.log("Player Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
    console.log("Rounds Played: " + roundsPlayed);
}


function choosePaper() {

    const container = document.querySelector("#container");

    const results = document.createElement("div");
    results.classList.add("results");
    
    const announceWinner = document.createElement("div");
    announceWinner.classList.add("announceWinner");
        
    container.appendChild(results);
    container.appendChild(announceWinner);

    let computerChoice = getComputerChoice(0, 2);
        
    function getComputerChoice(min, max){
    
        return Math.round(Math.random() * (max - min));
    
    }
        console.log(computerChoice);

    if (computerChoice === 0){
        console.log("You win! Paper beats Rock!");
        results.textContent = `Round: ${++roundsPlayed} Player Score: ${++humanScore} VS Computer Score: ${computerScore}`;
    }
    else if (computerChoice === 2){
        console.log("You lose! Scissors beats Paper!");
        results.textContent = `Round: ${++roundsPlayed} Player Score: ${humanScore} VS Computer Score: ${++computerScore}`;
    }
    else {
        console.log("Draw!");
        results.textContent = `Round: ${++roundsPlayed} Player Score: ${humanScore} VS Computer Score: ${computerScore}`;
    }
    if (humanScore > computerScore && roundsPlayed === 5){
        announceWinner.textContent = "Winner: Player! You've won more rounds than the CPU! Congrats!";
    } 
    else if (humanScore === computerScore && roundsPlayed === 5){
        announceWinner.textContent = "Draw!";
    }
    
    else if (humanScore < computerScore && roundsPlayed === 5){
        announceWinner.textContent = "Winner: CPU! The CPU has won more rounds than you! Boo!";
    }
    console.log("Player Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
    console.log("Rounds Played: " + roundsPlayed);
}

function chooseScissors() {

    const container = document.querySelector("#container");

    const results = document.createElement("div");
    results.classList.add("results");
    
    const announceWinner = document.createElement("div");
    announceWinner.classList.add("announceWinner");
        
    container.appendChild(results);
    container.appendChild(announceWinner);

let computerChoice = getComputerChoice(0, 2);
        
function getComputerChoice(min, max){
    
        return Math.round(Math.random() * (max - min));
    
    }
        console.log(computerChoice);

    if (computerChoice === 1){
            console.log("You win! Scissors beats Paper!");
            results.textContent = `Round: ${++roundsPlayed} Player Score: ${++humanScore} VS Computer Score: ${computerScore}`;
        }
    else if (computerChoice === 0){
            console.log("You lose! Rock beats Scissors!");
            results.textContent = `Round: ${++roundsPlayed} Player Score: ${humanScore} VS Computer Score: ${++computerScore}`;
        }
    else {
            console.log("Draw!");
            results.textContent = `Round: ${++roundsPlayed} Player Score: ${humanScore} VS Computer Score: ${computerScore}`;
        }
    
    if (humanScore > computerScore && roundsPlayed === 5){
        announceWinner.textContent = "Winner: Player! You've won more rounds than the CPU! Congrats!";
        } 

    else if (humanScore === computerScore && roundsPlayed === 5){
        announceWinner.textContent = "Draw!";
        }
    else if (humanScore < computerScore && roundsPlayed === 5){
        announceWinner.textContent = "Winner: CPU! The CPU has won more rounds than you! Boo!";
        }
        console.log("Player Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
        console.log("Rounds Played: " + roundsPlayed);
    }

