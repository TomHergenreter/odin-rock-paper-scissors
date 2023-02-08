//Odin Project - Rock, Paper, Scissors
//Tom Hergenreter - Feb 2022

//Initialize game
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

//Compare selections, determine winner, tally score, check if win/loss condition is met
function playRound(userChoice){
    console.log(`The current score is User ${userWinCount}, Computer ${computerWinCount}`);
    let user = userChoice;
    let computer = getComputerChoice();
    console.log(`user picks ${user}`);
    console.log(`computer picks ${computer}`);
    if(user === computer){
        console.log("It's a tie!");  
    }else if (user === "rock" && computer != "paper"){
        userWinCount += 1;
        console.log("You win!");  
    }else if(user === "paper" && computer != "scissors"){
        console.log("You win!");
        userWinCount += 1;  
    }else if(user === "scissors" && computer != "rock"){
        console.log("You win!");
        userWinCount += 1;
    }else{
        console.log("You lose!");
        computerWinCount += 1;
    }

    if(userWinCount === 3 || computerWinCount === 3){winLossMessage(userWinCount, computerWinCount)};
}

//Display win/loss message and score, ask for rematch
function winLossMessage(userWinCount, computerWinCount){
    console.log(`The final score is User ${userWinCount}, Computer ${computerWinCount}`);
    let playAgain = userWinCount > computerWinCount ? confirm("Congratulations, you win! Play again?") : confirm("You lose, better luck next time! Play again?");
    playAgain ? playRound() : alert("See you next time!");
}





