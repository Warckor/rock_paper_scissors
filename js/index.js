const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');
const matchResult = document.querySelector('.match-result > h3');
const selectionButtons = document.querySelectorAll('.buttons > div > input');
let playerScore = 0;
let computerScore = 0;

/**
 * The function `playRound` determines the winner of a rock-paper-scissors game between a player and a
 * computer.
 * @param playerSelection - The player's choice for the round (rock, paper, or scissors).
 * @param computerSelection - The computer's selection in the game (rock, paper, or scissors).
 */
const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        matchResult.textContent = 'It\'s a tie!';
    }
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        matchResult.textContent = 'You win!';
        playerScore++;
    }
    else {
        matchResult.textContent = 'You lose!';
        computerScore++;
    }

    selectionEffects(matchResult);

    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
}

/**
 * The function `getComputerChoice` returns a random choice of 'rock', 'paper', or 'scissors'.
 * @returns The function `getComputerChoice` returns a randomly selected choice from the array
 * `choices`, which can be either 'rock', 'paper', or 'scissors'.
 */
const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

const selectionEffects = (e) => {
    e.classList.add('selection');
    setTimeout(() => {
        e.classList.remove('selection');
    }, 300);
}

const resultEffects = (e) => {
    e.classList.add('result-effect');
    setTimeout(() => {
        e.classList.remove('result-effect');
    }, 500);
}

/* The code `selectionButtons.forEach((button) => { ... })` is adding an event listener to each button
in the `selectionButtons` array. */
selectionButtons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button);
        selectionEffects(button);
        playerSelection = button.value;
        computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection);
    })
})