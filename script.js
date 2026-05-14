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
    let humanScore = 0, computerScore = 0, roundsPlayed = 0;

    function playRound(humanChoice, computerChoice) {
        resultDiv.textContent = `${humanChoice} vs ${computerChoice}`
        switch (humanChoice) {
            case "rock": {
                if (computerChoice === "scissors") {
                    resultDiv.textContent += "\nYou win! Rock beats scissors."
                    humanScore++
                } else if (computerChoice === "rock") {
                    resultDiv.textContent += "\nYou tie!"
                } else {
                    resultDiv.textContent += "\nYou lose! Paper beats rock."
                    computerScore++
                }
                break
            }

            case "paper": {
                if (computerChoice === "rock") {
                    resultDiv.textContent += "\nYou win! Paper beats rock."
                    humanScore++
                } else if (computerChoice === "paper") {
                    resultDiv.textContent += "\nYou tie!"
                } else {
                    resultDiv.textContent += "\nYou lose! Scissors beats paper."
                    computerScore++
                }
                break
            }

            case "scissors": {
                if (computerChoice === "paper") {
                    resultDiv.textContent += "\nYou win! Scissors beats paper."
                    humanScore++
                } else if (computerChoice === "scissors") {
                    resultDiv.textContent += "\nYou tie!"
                } else {
                    resultDiv.textContent += "\nYou lose! Rock beats scissors."
                    computerScore++
                }
                break
            }
        }

        roundsPlayed++
        resultDiv.textContent += `\nScore is ${humanScore} - ${computerScore}.`

        if (roundsPlayed === 5) {
            if (humanScore > computerScore) {
                resultDiv.textContent += "\nYou win!"
            } else if (humanScore === computerScore) {
                resultDiv.textContent += "\nYou tie!"
            } else {
                resultDiv.textContent += "\nYou lose!"
            }

            [humanScore, computerScore, roundsPlayed] = [0, 0, 0]
        }
    }

    const rockBtn = document.getElementById("rockBtn")
    rockBtn.addEventListener("click", () => { playRound("rock", getComputerChoice()) })
    const paperBtn = document.getElementById("paperBtn")
    paperBtn.addEventListener("click", () => { playRound("paper", getComputerChoice()) })
    const scissorsBtn = document.getElementById("scissorsBtn")
    scissorsBtn.addEventListener("click", () => { playRound("scissors", getComputerChoice()) })
    const resultDiv = document.getElementById("resultDiv")
}

playGame()