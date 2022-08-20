// create array of choices
// randomly pick rock paper, scissors.
function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let randomOption = choices[randomIndex];
    return randomOption;
}

console.log(getComputerChoice());
// have the player select rock paper or scissors.




// single round of rock paper scissors