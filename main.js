//getting choice of user
let userChoice  = prompt("Rock, Paper or Scissors").toLocaleLowerCase;


//getComputerChoice
let computerChoice= function getComputerChoice () {
    const choice = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choice.length);
    return choice[random.toString()];
}


//function playing the game
function playGame(userChoice,computerChoice ) {
    switch(userChoice) {
        case "rock":
            if (computerChoice = "scissors") {
                console.log("You win")
            }
            break;
        case "paper":
            if(computerChoice ="rock") {
                console.log("You lose")
            }
            break;
        case "scissors":
            if(computerChoice="paper") {
                console.log("You win")
            }
            break;
    }
}

console.log(playGame())
