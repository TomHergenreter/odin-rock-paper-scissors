//Odin Project - Rock, Paper, Scissors
//Tom Hergenreter - Feb 2022


//-------------------------Game Logic--------------------------------------
let userWinCount = 0; 
let computerWinCount = 0;
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', getUserChoice));
const messageContainer = document.querySelector('#message-container');
const messageDisplay = document.createElement('p');

//Get user selection and initialize round
function getUserChoice(e){
    if(messageDisplay) messageDisplay.remove();
    playRound(this.id);
    return;
}

//Get computer selection
function getComputerChoice (){
    let computerChoices = ["rock", "paper", "scissors"];
    let computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return computerChoice;
}

//Compare choices and update score
function chooseWinner(userChoice, computerChoice){
    let results;  
    if(userChoice === computerChoice){
        results = "It's a tie!";  
    }else if (userChoice === "rock" && computerChoice != "paper"){
        userWinCount += 1;
        results = "You Win!"; 
    }else if(userChoice === "paper" && computerChoice != "scissors"){
        userWinCount += 1;
        results = "You Win!";   
    }else if(userChoice === "scissors" && computerChoice != "rock"){
        userWinCount += 1;
        results = "You Win!"; 
    }else{
        computerWinCount += 1;
        results = "You Lose!"; 
    }
    document.querySelector('.round-result').textContent = results;
    displayWinner(results, userChoice, computerChoice);

}

//Update score board
function updateScoreBoard(){
    let displayUserScore = document.querySelector('.user-score');
    displayUserScore.textContent = `Player: ${userWinCount}`;
    let displayComputerScore = document.querySelector('.computer-score');
    displayComputerScore.textContent = `Computer: ${computerWinCount}`;
}

//Display win/loss message, reset score
function endGame(){
    let endMessage = '';
    userWinCount === 5 ? endMessage = 'You win!' : endMessage = 'You Lose!';
    messageDisplay.textContent = `${endMessage} Make new selection to play again!`;
    messageContainer.appendChild(messageDisplay);
    userWinCount = 0;
    computerWinCount = 0;
}

//Constructor Function
function playRound(userChoice){
    let computerChoice = getComputerChoice();
    chooseWinner(userChoice, computerChoice);
    updateScoreBoard();
    if(userWinCount === 5 || computerWinCount === 5) endGame(); 
}

//---------------------------------------Animations and UI----------------------

function displayWinner(winningChoice,userChoice, computerChoice) {
    console.log(winningChoice);

    const animationContainer = document.getElementById('animation-container');
    animationContainer.replaceChildren();
    const userChoiceIcon = document.createElement('div');
    userChoiceIcon.classList.add('selection-icon');
    userChoiceIcon.textContent = userChoice;
    const computerChoiceIcon = document.createElement('div');
    computerChoiceIcon.classList.add('selection-icon');
    computerChoiceIcon.textContent = computerChoice;
    animationContainer.append(userChoiceIcon, computerChoiceIcon);
}



