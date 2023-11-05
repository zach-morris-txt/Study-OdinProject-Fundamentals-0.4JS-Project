//Global Variables
let result =""


//function for computer choice rock/paper/scissors
function getComputerChoice(computerSelection) {
    //acquire random number
    let randomNumber = Math.trunc(Math.random() *100)
    //if random number between 0 and 3.33 return ROCK
    if (randomNumber >= 0 && randomNumber <= 33) {
        return computerSelection = "ROCK"
    }
    //else if random number between 3.34 and 6.66 return PAPER
    else if (randomNumber >= 34 && randomNumber <= 66) {
        return computerSelection = "PAPER"
    }
    //else random number between 6.67 and 10 return SCISSORS
    else {
        return computerSelection = "SCISSORS"
    }
}
const computerSelection = getComputerChoice()


//function for assigning playerSelection
function getPlayerChoice(playerSelection) {
    //acquire player choice of ROCK, PAPER, or SCISSORS  *make case insensitive by capitalizing after assignment*
    let playerInput = prompt("Please enter ROCK, PAPER, or SCISSORS", "")
    playerInput = playerInput.toUpperCase()
    //validation
    if (playerInput === "") {
        alert("Empty")
    } else if (playerInput != "ROCK" && playerInput != "PAPER" && playerInput != "SCISSORS") {
        alert(`${playerInput} is not a valid value`)
    } else {
        return playerSelection = playerInput
    }
}
const playerSelection = getPlayerChoice()


//function for single round
function playGame(computerSelection, playerSelection) {
    //if computer is rock
    if (computerSelection === "ROCK") {
        if (playerSelection === "ROCK") {
            alert("You tie!")
            return result = "Tie"
        }
        else if (playerSelection === "PAPER") {
            alert("You lose!")
            return result = "Loss"
        }
        else {
            alert("You win!")
            return result = "Win"
        }
    }
    //if computer is paper
    else if (computerSelection === "PAPER") {
        if (playerSelection === "PAPER") {
            alert("You tie!")
            return result = "Tie"
        }
        else if (playerSelection === "ROCK") {
            alert("You lose!")
            return result = "Loss"
        }
        else {
            alert("You win!")
            return result = "Win"
        }
    }
    //if computer is scissor
    else {
        if (playerSelection === "SCISSORS") {
            alert("You tie!")
            return result = "Tie"
        }
        else if (playerSelection === "PAPER") {
            alert("You lose!")
            return result = "Loss"
        } 
        //Handle values outside of rock, paper, or scissors
        else if (playerSelection !== "ROCK") {
            alert("YOU CHEATED AND STILL LOST!! Play fair, input a correct value!!!")
            return result = "Default Loss"
        }
        else {
            alert("You win!")
            return result = "Win"
        }
    }
}
// playGame(computerSelection, playerSelection)


//function for 5round game
function game() {
    //score variable starting at 0
    let playerScore = 0
    let computerScore = 0
    //loop playRound function
    for (let i = 0; i < 5; i++) {
        let refreshedComputerChoice = getComputerChoice()
        let refreshedPlayerChoice = getPlayerChoice()

        console.log(refreshedComputerChoice, refreshedPlayerChoice)
        playGame(refreshedComputerChoice, refreshedPlayerChoice)

        //increment score for respective players until game 5
        //console.log the winner every instance
        if (result === "Default Loss") {
            console.log("Loss by default; missing or incorrect value")
        } else if (result === "Win") {
            console.log("Win")
            //increment "++" must be pre-fixed if I want to return incremented value
            playerScore = ++playerScore
        } else if (result === "Loss") {
            console.log("Loss")
            computerScore = ++computerScore
        } else {console.log("Tie")}
    }
    if (playerScore > computerScore) {
        alert("Game Win")
        console.log("Game Win")
    } else if (playerScore < computerScore) {
        alert("Game Loss")
        console.log("Game Loss")
    } else {
        alert("Game Tie")
        console.log("Game Tie")
    }
}
game(playGame(computerSelection, playerSelection))