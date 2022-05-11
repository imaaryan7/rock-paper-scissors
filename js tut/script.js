const computerchoiceDisplay = document.getElementById('computerchoice');
const userchoiceDisplay = document.getElementById('userchoice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
userChoice = e.target.id
userchoiceDisplay.innerHTML = userChoice
generateComputerChoice()
getResult()
}));

function generateComputerChoice(){
const randomNo = Math.floor(Math.random() * possibleChoices.length)// or you can use 3 as it is 3 buttons

if (randomNo === 1){
    computerChoice = 'rock';
}

if (randomNo === 2){
    computerChoice = 'paper'
}

if (randomNo === 3){
    computerChoice = 'scissors'
}

computerchoiceDisplay.innerHTML = computerChoice

}

function getResult(){
    if(computerChoice === userChoice){
        result = "it's a draw!";
    }

    if(computerChoice === 'rock' && userChoice === "paper"){
        result = "you won!";
    }

    if(computerChoice === 'rock' && userChoice === "scissors"){
        result = "you lost:(";
    }

    if(computerChoice === 'paper' && userChoice === "scissors"){
        result = "you won!";
    }

    if(computerChoice === 'paper' && userChoice === "rock"){
        result = "you lost:(";
    }

    if(computerChoice === 'scissors' && userChoice === "rock"){
        result = "you won!";
    }

    if(computerChoice === "scissors" && userChoice === "paper"){
        result = "you lost:(";
    }

    resultDisplay.innerHTML = result;
}