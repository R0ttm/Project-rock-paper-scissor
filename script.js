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
    else if(playerSelection == "Rock" && ComputerSelection == "Scissors")
        return "You Win! Rock beats Scissors";
    else if(playerSelection == "Rock" && ComputerSelection == "Rock")
        return "even";

    if(playerSelection == "Paper" && ComputerSelection == "Rock")
        return "You Win! Paper beats Rock";
    else if(playerSelection == "Paper" && ComputerSelection == "Scissors")
        return "You Lose! Scissors beats Paper";
    else if(playerSelection == "Paper" && ComputerSelection == "Paper")
        return "even";

    if(playerSelection == "Scissors" && ComputerSelection == "Paper")
        return "You Win! Scissors beats Paper";
    else if(playerSelection == "Scissors" && ComputerSelection == "Rock")
        return "You Lose! Rock beats Scissors";
    else if(playerSelection == "Scissors" && ComputerSelection == "Scissors")
        return "even";
}

function game(rounds){
    
    let playerWinningsCount = 0;
    let computerWinningsCount = 0;
    
    console.log("Player: "+playerWinningsCount+" | Computer: " + computerWinningsCount+"");

    do {
        let ComputerSelection = getComputerChoice();
        console.log(playRound(playerSelection, ComputerSelection))
        let result = playRound(playerSelection, ComputerSelection);
        
        if(result.includes("Win")) playerWinningsCount++;
        else if(result.includes("Lose")) computerWinningsCount++;
        
        console.log("Player: "+playerWinningsCount+" | Computer: " + computerWinningsCount+"");
    } while (playerWinningsCount <  rounds  &&
         computerWinningsCount < rounds);
    
    if(playerWinningsCount > computerWinningsCount) console.log("You Win the game!!");
    else console.log("You Lose. luck next time :)");
}

const playerSelection = "Rock";
game(2);