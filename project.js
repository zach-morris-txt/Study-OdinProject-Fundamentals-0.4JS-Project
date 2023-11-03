//Test Connection
alert("HELLO")


//global variables
let computerSelection = ""
let playerSelection = ""

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

//function for assigning playerSelection
function getPlayerChoice(playerSelection) {
    //acquire player choice of ROCK, PAPER, or SCISSORS  *make case insensitive by capitalizing after assignment*
    let playerInput = prompt("Please enter ROCK, PAPER, or SCISSORS", "")
    playerInput = playerInput.toUpperCase()
    if (playerInput === "") {
        alert("Empty")
    } else if (playerInput != "ROCK" || playerInput != "PAPER" || playerInput != "SCISSORS") {
        alert(`${playerInput} is not a valid value`)
    } else {
        playerSelection = playerInput
        alert("yes")
    }
}
getPlayerChoice()

//function for single round
function playGame(computerSelection, playerSelection) {
    //compute winner

    //return string announcing winner

}