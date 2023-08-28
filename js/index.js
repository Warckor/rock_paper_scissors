function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return 'You win! Rock beats scissors!';
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return 'You lose! Paper beats rock!';
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return 'You win! Paper beats rock!';
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return 'You lose! Scissors beats paper!';
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return 'You win! Scissors beats paper!';
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return 'You lose! Rock beats scissors!';
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Rock, Paper, or Scissors?');
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.includes('win')) {
            playerScore++;
        } else {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log('You win!');
    } else if (playerScore < computerScore) {
        console.log('You lose!');
    } else {
        console.log('It\'s a tie!');
    }
}