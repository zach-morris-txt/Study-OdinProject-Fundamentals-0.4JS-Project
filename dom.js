//DOM Game Adaptation
    //Functions from initial console game
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




//DOM Additions; EventListener
const h2 = document.querySelector('h2')

const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        h2.innerText = `You chose ${button.textContent}`

        let compChoice = getComputerChoice()
        let playerChoice = button.textContent
        playGame(compChoice, playerChoice)

        if (playGame == "Win") {
            alert("SEEN")
        }
    })
})