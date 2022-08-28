
let w = 0;
let l = 0;
let d = 0;
const roundWinner = document.querySelector('.outcome');
const p = document.createElement('p');
const playerScore = document.querySelector('.win');
const compScore = document.querySelector('.lose');
const drawScore = document.querySelector('.draw');

//Get computer choice


// single round of rock paper scissors

function playRound(playerSelection, computerSelection) {
    const updateScores = function score(w,l,d){
        playerScore.textContent = ("Wins : " + `${w}`)
        compScore.textContent = ("Losses : " + `${l}`)
        drawScore.textContent = ("Draws : " + `${d}`)
    }

            if (computerSelection === playerSelection){
                p.textContent = "DRAW!";
                roundWinner.appendChild(p);
                d++;
                updateScores(w,l,d);
            }
            
            else if (computerSelection === 'ROCK'){
                if (playerSelection === 'SCISSORS'){
                
                    p.textContent = "YOU LOSE!";
                    roundWinner.appendChild(p);
                    l++;
                }
                else if (playerSelection === 'PAPER'){
                
                    p.textContent = "YOU WIN!";
                    roundWinner.appendChild(p); 
                    w++;
                }
                updateScores(w,l,d);
            }
           
            else if (computerSelection === 'SCISSORS'){
                if (playerSelection === 'PAPER'){
                
                    p.textContent = "YOU LOSE!";
                    roundWinner.appendChild(p);  
                    l++;
                }
                else if (playerSelection === 'ROCK'){
                
                    p.textContent = "YOU WIN!";
                    roundWinner.appendChild(p);
                    w++;
                }
                updateScores(w,l,d);
            }
        
            else {
                if (playerSelection === 'SCISSORS'){
                
                    p.textContent = "YOU LOSE!";
                    roundWinner.appendChild(p);  
                    l++; 
                }
                else if (playerSelection === 'ROCK'){
                
                    p.textContent = "YOU WIN!";
                    roundWinner.appendChild(p);
                    w++;
                } 
                updateScores(w,l,d);
            }
        
}

 // Make each click start of the round.  
const rockButton = document.querySelector('.ROCK');
const scissorsButton = document.querySelector('.SCISSORS');
const paperButton = document.querySelector('.PAPER'); 
// If the player chooses Rock
rockButton.addEventListener('click', () =>{
    const playerSelection = 'ROCK';
    console.log(playerSelection);
    function getComputerChoice(){
        let choices = ['ROCK', 'PAPER', 'SCISSORS'];
        let randomIndex = Math.floor(Math.random() * choices.length);
        let randomOption = choices[randomIndex];
        return randomOption;
    }
    let computerSelection = getComputerChoice();
    console.log(computerSelection);
    playRound(playerSelection,computerSelection);
    overallWinner();
})
// If the player chooses Scissors
scissorsButton.addEventListener('click', () =>{
    const playerSelection = 'SCISSORS';
    console.log(playerSelection);
    function getComputerChoice(){
        let choices = ['ROCK', 'PAPER', 'SCISSORS'];
        let randomIndex = Math.floor(Math.random() * choices.length);
        let randomOption = choices[randomIndex];
        return randomOption;
    }
    let computerSelection = getComputerChoice();
    console.log(computerSelection);
    playRound(playerSelection,computerSelection);
    overallWinner();
})
// If the player chooses Paper
paperButton.addEventListener('click', () =>{
    const playerSelection = 'PAPER';
    console.log(playerSelection);
    function getComputerChoice(){
        let choices = ['ROCK', 'PAPER', 'SCISSORS'];
        let randomIndex = Math.floor(Math.random() * choices.length);
        let randomOption = choices[randomIndex];
        return randomOption;
    }
    let computerSelection = getComputerChoice();
    console.log(computerSelection);
    playRound(playerSelection,computerSelection);
    overallWinner(); 
})


//Tally up the winner
function overallWinner(){
    roundWinner.removeChild(p);
    if (w === 5 && l < 5 ){
        const youWon = document.createElement('h3');
        youWon.textContent = "You are the Winner!";
        youWon.setAttribute('style', 'color: blue; padding: 20px; font-size: 50 px');
        roundWinner.appendChild(youWon);
    }
    else if (l === 5 && w < 5 ){
        const youlost = document.createElement('h3');
        youlost.textContent = "You are the Loser!";
        youlost.setAttribute('style', 'color: red; padding: 20px; font-size: 50 px');
        roundWinner.appendChild(youlost);
    }
    else if (d === 5){
        const youDraw = document.createElement('h3');
        youDraw.textContent = "DRAW!";
        youDraw.setAttribute('style', 'color: grey; padding: 20px; font-size: 50 px');
        roundWinner.appendChild(youDraw);
    }
}



