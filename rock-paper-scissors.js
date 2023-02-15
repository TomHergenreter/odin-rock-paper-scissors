//Odin Project - Rock, Paper, Scissors
//Tom Hergenreter - Feb 2022


//-------------------------Game Logic--------------------------------------
let userWinCount = 0; 
let computerWinCount = 0;
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', getUserChoice));
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
    

}

//Update score board
function updateScoreBoard(){
    let displayUserScore = document.querySelector('#user-score');
    displayUserScore.textContent = `Player: ${userWinCount}`;
    let displayComputerScore = document.querySelector('#computer-score');
    displayComputerScore.textContent = `Computer: ${computerWinCount}`;
}

//Display win/loss message, reset score
function endGame(){
    let endMessage = '';
    userWinCount === 5 ? endMessage = 'You win!' : endMessage = 'You Lose!';
    messageDisplay.textContent = `${endMessage} Make new selection to play again!`;
    const scoreboard = document.querySelector('#animation-container');
    scoreboard.replaceChildren();
    scoreboard.appendChild(messageDisplay);
    userWinCount = 0;
    computerWinCount = 0;
}

//Constructor Function
function playRound(userChoice){
    let computerChoice = getComputerChoice();
    chooseWinner(userChoice, computerChoice);
    updateScoreBoard();
    updateUI(userChoice, computerChoice);
    if(userWinCount === 5 || computerWinCount === 5) endGame(); 
}

//---------------------------------------Animations and UI----------------------

function displaySelections(userChoice, computerChoice){
//empty animation-container div
const animationContainer = document.getElementById('animation-container');
animationContainer.replaceChildren();
//remove flashing border click cues and last selection cue on user icons 
const userChoiceIcons = document.querySelectorAll('.initial-selection, .selected');
userChoiceIcons.forEach(icon => icon.classList.remove('initial-selection','selected'));
//add solid border to show selections
document.querySelector(`#${userChoice}`).classList.add('selected');
document.querySelector(`.computer-input .${computerChoice}`).classList.add('selected');
//create new element for user icon and set styles
const userChoiceIcon = document.createElement('div');
userChoiceIcon.classList.add('selection-icon', `${userChoice}`);
//create new element for computer icon and set styles
const computerChoiceIcon = document.createElement('div');
computerChoiceIcon.classList.add('selection-icon', `${computerChoice}`);
//create element for vs img
const vsImage = document.createElement('img');
vsImage.src = './images/vsImage.png';
vsImage.setAttribute('class', 'flex-center');
vsImage.setAttribute('id', 'vsImage');
//append icons to animation container div
animationContainer.append(userChoiceIcon, vsImage, computerChoiceIcon);
}



function updateUI(userChoice, computerChoice) {
    displaySelections(userChoice, computerChoice);
}



