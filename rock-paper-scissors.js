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



