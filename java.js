// create array of choices
// randomly pick rock paper, scissors.
function getComputerChoice(){
    let choices = ['ROCK', 'PAPER', 'SCISSORS'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let randomOption = choices[randomIndex];
    return randomOption;
}

let youWin = "You win!";
let youLose = "You lost";
let youDraw = "Draw!";
// single round of rock paper scissors
function playRound(playerSelection, computerSelection) {

    
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

    else {
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
let computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playerSelection);
console.log(playRound(playerSelection, computerSelection));

let round = playRound(playerSelection,computerSelection);

function game(round){
    let w = 0;
    let l = 0;
    let d = 0;
    for (let i = 0; i < 5 ; i++){
        if(round === youDraw){
            d++;
        }
        else if (round === youWin){
            w++;
        }
        else{
            l++;
        }
    }    
}
console.log(round);
game();
