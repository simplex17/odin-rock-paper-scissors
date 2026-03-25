function random() {
    return (Math.floor(Math.random() * 3))
}

function getComputerChoice() {
    switch (random()) {
        case 0: {
            return "rock"
            break
        }

        case 1: {
            return "paper"
            break
        }

        case 2: {
            return "scissors"
            break
        }
    }
}

function getHumanChoice() {
    return (prompt("Rock, Paper, Scissors?").toLowerCase())
}

function playGame() {
    let humanScore = 0, computerScore = 0

    function playRound(humanChoice, computerChoice) {
        console.log(`${humanChoice} vs ${computerChoice}`)
        switch (humanChoice) {
            case "rock": {
                if (computerChoice === "scissors") {
                    console.log("You win! Rock beats scissors.")
                    humanScore++
                } else if (computerChoice === "rock") {
                    console.log("You tie!")
                } else {
                    console.log("You lose! Paper beats rock.")
                    computerScore++
                }
                break
            }

            case "paper": {
                if (computerChoice === "rock") {
                    console.log("You win! Paper beats rock.")
                    humanScore++
                } else if (computerChoice === "paper") {
                    console.log("You tie!")
                } else {
                    console.log("You lose! Scissors beats paper.")
                    computerScore++
                }
                break
            }

            case "scissors": {
                if (computerChoice === "paper") {
                    console.log("You win! Scissors beats paper.")
                    humanScore++
                } else if (computerChoice === "scissors") {
                    console.log("You tie!")
                } else {
                    console.log("You lose! Rock beats scissors.")
                    computerScore++
                }
                break
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
    }

    console.log(`Score is ${humanScore} - ${computerScore}.`)
    if (humanScore > computerScore) {
        console.log("You win!")
    } else if (humanScore === computerScore) {
        console.log("You tie!")
    } else {
        console.log("You lose!")
    }
}

playGame()