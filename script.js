function getComputerChoice(){
    let randomNumber =Math.floor(Math.random() *3);
    if(randomNumber === 0) return "Rock";
    else if(randomNumber === 1) return "Paper";
    else if(randomNumber === 2) return "Scissors";
    else return "Error -  return out of range!!!";
}

function playRound(playerSelection, ComputerSelection){
    if(playerSelection == "Rock" && ComputerSelection == "Paper")
        return "You Lose! Paper beats Rock";
    if(playerSelection == "Rock" && ComputerSelection == "Scissors")
        return "You Win! Rock beats Scissors";
    if(playerSelection == "Rock" && ComputerSelection == "Rock")
        return "even";

    if(playerSelection == "Paper" && ComputerSelection == "Rock")
        return "You Win! Paper beats Rock";
    if(playerSelection == "Paper" && ComputerSelection == "Scissors")
        return "You Lose! Scissors beats Paper";
    if(playerSelection == "Paper" && ComputerSelection == "Paper")
        return "even";

    if(playerSelection == "Scissors" && ComputerSelection == "Paper")
        return "You Win! Scissors beats Paper";
    if(playerSelection == "Scissors" && ComputerSelection == "Rock")
        return "You Lose! Rock beats Scissors";
    if(playerSelection == "Scissors" && ComputerSelection == "Scissors")
        return "even";
}

const playerSelection = "Rock";
const ComputerSelection = getComputerChoice();
console.log(playRound(playerSelection, ComputerSelection))