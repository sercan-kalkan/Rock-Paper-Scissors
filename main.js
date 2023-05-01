let playerSelection  = prompt("Rock, Paper or Scissors").toLowerCase();

//getComputerChoice
let  getComputerChoice = function () {
    const choice = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choice.length);
    return choice[random];
}

const computerSelection = getComputerChoice();
//variables saves the score of players
let playerScore=0;
let computerScore=0;

//function for making choices and defining the winner
function playRound (playerSelection, computerSelection) {
    let result;
     if (playerSelection=="rock" && computerSelection=="scissors") {
        result ="You win! rock beats scissors";
         playerScore++;
     }else if (playerSelection=="paper" && computerSelection =="rock") {
        result ="You win! paper beats Rock"
        playerScore++;
     }else if(playerSelection =="scissors" && computerSelection =="paper") {
        result ="You win! scissors beats paper"
        playerScore++;
     }else if(computerSelection =="rock" && playerSelection =="scissors") {
         result ="You lose rock beats scissors "
         computerScore++;
      }else if(computerSelection =="paper" && playerSelection =="rock") {
         result ="You lose! paper beats rock"
         computerScore++;
      }else if (computerSelection =="scissors" && playerSelection =="paper") {
         result ="You lose scissors beats paper"
         computerScore++;
      }else if (playerSelection == computerSelection) {
        result ="Tie"}
     return `${result} Player score: ${playerScore}  Computer score: ${computerScore}`
}  

function game (playRound) {
      for (let i=0; i<=5; i++) {

      }
}


console.log(playRound(playerSelection,computerSelection))

console.log(computerSelection)
console.log(playerSelection)
