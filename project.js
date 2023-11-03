//function for computer choice rock/paper/scissors
function getComputerChoice(compChoice) {
    //acquire random number
    let randomNumber = Math.trunc(Math.random() *100)
    //if random number between 0 and 3.33 return ROCK
    if (randomNumber >= 0 && randomNumber <= 33) {
        return compChoice = "ROCK"
    }
    //else if random number between 3.34 and 6.66 return PAPER
    else if (randomNumber >= 34 && randomNumber <= 66) {
        return compChoice = "PAPER"
    }
    //else random number between 6.67 and 10 return SCISSORS
    else {
        return compChoice = "SCISSORS"
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
    console.log(`Value is ${computerSelection} and ${playerSelection}`)
    //if computer is rock
    if (computerSelection === "ROCK") {
        if (playerSelection === "ROCK") {
            return alert("You tie!")
        }
        else if (playerSelection === "PAPER") {
            return alert("You lose!")
        }
        else {
            return alert("You win!")
        }
    }
    //if computer is paper
    else if (computerSelection === "PAPER") {
        if (playerSelection === "PAPER") {
            return alert("You tie!")
        }
        else if (playerSelection === "ROCK") {
            return alert("You lose!")
        }
        else {
            return alert("You win!")
        }
    }
    //if computer is scissor
    else {
        if (playerSelection === "SCISSORS") {
            return alert("You tie!")
        }
        else if (playerSelection === "PAPER") {
            return alert("You lose!")
        } 
        //Handle values outside of rock, paper, or scissors
        else if (playerSelection !== "ROCK") {
            return alert("YOU CHEATED AND STILL LOST!! Play fair, input a correct value!!!")
        }
        else {
            return alert("You win!")
        }
    }
}
// playGame(computerSelection, playerSelection)


function game(playGame) {
    //score variable starting at 0
    let score = 0
    //loop playRound function
    for (let i = 0; i < 5; i++) {
        playGame()
        if (playGame = "You win!") {
            score = score++
        }
    }
    //increment score for respective players until game 5

    //console.log the winner every instance


    //declare winner using % modulo after fifth game 

}
game()