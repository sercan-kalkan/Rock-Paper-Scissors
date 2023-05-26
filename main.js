

const rock =document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click',function () {playRound ('rock')})
paper.addEventListener('click',function () {playRound ('paper')});
scissors.addEventListener('click',function () {playRound ('scissors')});


//variables saves the score of players
let playerScore=0;
let computerScore=0;
let result;


function playRound (playerSelection, computerSelection) {
   let  getComputerChoice =  () => {
      const choice = ["rock", "paper", "scissors"];
      const random = Math.floor(Math.random() * choice.length);
      return choice[random];
   }
    computerSelection = getComputerChoice()

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

       if(playerScore>=5|| computerScore>=5) {
         console.log('GAME OVER')
         if (playerScore>computerScore) {

         }else if (computerScore>playerScore) {
            console.log("You Loose")
         }else {
            console.log('Tie')
         }
       }

         const score = document.getElementById("result");
         const para = document.createElement('p')
         score.appendChild(para).textContent=`Player: ${playerScore} Computer: ${computerScore}`
  


       return  console.log(playerScore,computerScore, result);
   
 }
 