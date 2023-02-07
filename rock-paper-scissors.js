//Odin Project - Rock, Paper, Scissors

//Function for computer selection
//Create an array to store the items rock, paper, scissors
//Randomly select one of the items from the array
//return the value selected

function getComputerChoice (){
    let computerChoices = ["rock", "paper", "scissors"];
    let computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return computerChoice;
}

//Function for player selection
//Prompt user for input of rock, paper, or scissors, case insensitive
//output error message for invalid response
//return the user selection

function getUserChoice(){
    let userChoice = prompt("Choose Rock, Paper, or Scissors!").toLowerCase();
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors"){
        return userChoice;
    }else {
        alert("Invalid selection, please select Rock, Paper, or Scissors!");
        return getUserChoice();
    }
}

//Function to choose winner
//while win count for either computer or user is under 3 
//display current score
//display selections
//loop through choice comaparison
//tally win counts for user and computer
//when user or computer reach 3 wins display win/loss message

function chooseWinner(){
    let userWinCount = 0; 
    let computerWinCount = 0;
    while(userWinCount < 3 && computerWinCount < 3){
        console.log(`The current score is User ${userWinCount}, Computer ${computerWinCount}`);
        let user = getUserChoice();
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
    } 
    console.log(`The final score is User ${userWinCount}, Computer ${computerWinCount}`);
    let playAgain = userWinCount > computerWinCount ? confirm("Congratulations, you win! Play again?") : confirm("You lose, better luck next time! Play again?");
    playAgain ? chooseWinner() : alert("See you next time!");
    
}

chooseWinner();



