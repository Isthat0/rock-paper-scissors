// create array of choices
// randomly pick rock paper, scissors.
function getComputerChoice(){
    let choices = ['ROCK', 'PAPER', 'SCISSORS'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let randomOption = choices[randomIndex];
    return randomOption;
}
console.log(getComputerChoice());

// single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    let youWin = "You win!";
    let youLose = "You lost";
    let youDraw = "Draw!";
    
    if (computerSelection === playerSelection){
        return youDraw;
    }
    
    else if (computerSelection === 'ROCK'){
        if (playerSelection === 'SCISSORS'){
            return youLose;
        }
        else if (playerSelection === 'PAPER'){
            return youWin; 
        }
    }
   
    else if (computerSelection === 'SCISSORS'){
        if (playerSelection === 'PAPER'){
            return youLose;   
        }
        else if (playerSelection === 'ROCK'){
            return youWin; 
        }
    }

    else if (computerSelection === 'PAPER'){
        if (playerSelection === 'SCISSORS'){
            return youLose;   
        }
        else if (playerSelection === 'ROCK'){
            return youWin; 
        } 
    }

}
 // have the player select rock paper or scissors and get it to Uppercase.  
let playerChoice = prompt('rock, paper, or scissors?')
let playerSelection = playerChoice.toUpperCase();
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));



