//Odin Project - Rock, Paper, Scissors
//Tom Hergenreter - Feb 2022

let userWinCount = 0; 
let computerWinCount = 0;
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', getUserChoice));

//Get user selection
function getUserChoice(e){
    playRound(this.id);
    return;
}

//Get computer selection
function getComputerChoice (){
    let computerChoices = ["rock", "paper", "scissors"];
    let computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return computerChoice;
}

//Update score 
function updateScore(){
    let displayUserScore = document.querySelector('.user-score');
    displayUserScore.textContent = `Player: ${userWinCount}`;
    let displayComputerScore = document.querySelector('.computer-score');
    displayComputerScore.textContent = `Computer: ${computerWinCount}`;
}

//Compare selections, determine winner, tally score, check if win/loss condition is met
function playRound(userChoice){
    let computer = getComputerChoice();
    console.log(`user picks ${userChoice}`);
    console.log(`computer picks ${computer}`);
    if(userChoice === computer){
        console.log("It's a tie!");  
    }else if (userChoice === "rock" && computer != "paper"){
        userWinCount += 1;
        console.log("You win!");  
    }else if(userChoice === "paper" && computer != "scissors"){
        console.log("You win!");
        userWinCount += 1;  
    }else if(userChoice === "scissors" && computer != "rock"){
        console.log("You win!");
        userWinCount += 1;
    }else{
        console.log("You lose!");
        computerWinCount += 1;
    }
    updateScore();
}





