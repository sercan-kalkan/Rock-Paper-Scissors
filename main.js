let playerSelection  = prompt("Rock, Paper or Scissors").toLowerCase();

//getComputerChoice
let  getComputerChoice = function () {
    const choice = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choice.length);
    return choice[random];
}

const computerSelection = getComputerChoice();


function playRound (playerSelection, computerSelection) {
    let result;
     if (playerSelection=="rock" && computerSelection=="scissors") {
        result ="You win! rock beats scissors"
     }else if (playerSelection=="paper" && computerSelection =="rock") {
        result ="You win! paper beats Rock"
     }else if(playerSelection =="scissors" && computerSelection =="paper") {
        result ="You win! scissors beats paper"
     }else if(computerSelection =="rock" && playerSelection =="scissors") {
      result ="You lose rock beats scissors "
      }else if(computerSelection =="paper" && playerSelection =="rock") {
         result ="You lose! paper beats rock"
      }else if (computerSelection =="scissors" && playerSelection =="paper") {
         result ="You lose scissors beats paper"
      }else if (playerSelection == computerSelection) {
        result ="Tie"}
     return result;
}  


console.log(playRound(playerSelection,computerSelection))

console.log(computerSelection)
console.log(playerSelection)
