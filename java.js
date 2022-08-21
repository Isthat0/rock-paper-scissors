// create array of choices
// randomly pick rock paper, scissors.


function game(){
    let w = 0;
    let l = 0;
    let d = 0;
    for (let i = 0; i < 5 ; i++){
        //Get computer choice
        function getComputerChoice(){
            let choices = ['ROCK', 'PAPER', 'SCISSORS'];
            let randomIndex = Math.floor(Math.random() * choices.length);
            let randomOption = choices[randomIndex];
            return randomOption;
        }
        
        let youWin = "You win!";
        let youLose = "You lost";
        let youDraw = "Draw!";
         // have the player select rock paper or scissors and get it to Uppercase.  
        let playerChoice = prompt('rock, paper, or scissors?')
        let playerSelection = playerChoice.toUpperCase();
        let computerSelection = getComputerChoice();
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
        //showing the what the person and computer chose and who won the round
        console.log(computerSelection);
        console.log(playerSelection);
        let round = playRound(playerSelection, computerSelection);
        console.log(round);
        //track how many wins, draws, and loses
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
    if (w > l){
        console.log("You are the winner!");
    }
    else if (l > w){
        console.log("You are the loser :(");
    }
    else{
        console.log ("It's a tie!");
    }
}

game();
