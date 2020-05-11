const rockChoice = document.querySelector('img[data-value="rock"]');
const paperChoice = document.querySelector('img[data-value="paper"]');
const scissorsChoice = document.querySelector('img[data-value="scissors"]');
const playerScoreH2 = document.querySelector('#player-score');
const computerScoreH2 = document.querySelector('#computer-score');
const gameMessageH2 = document.querySelector('h2#game-message');

let playerScore = 0;
let computerScore = 0;

function playRound(event) {
    const playerChoice = event.target.getAttribute('data-value');
    const computerChoice = getComputerChoice();
    const {winner, message} = getRoundWinner(playerChoice, computerChoice);
    if (winner == 'player') {
        playerScore++;
        playerScoreH2.textContent = `Player Score: ${playerScore}`;
    } else if (winner == 'computer') {
        computerScore++;
        computerScoreH2.textContent = `Computer Score: ${computerScore}`;
    }
    gameMessageH2.textContent = message;
}

function getComputerChoice() {
    return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
}

function getRoundWinner (playerChoice, computerChoice) {
    if (playerChoice == 'rock' && computerChoice == 'scissors') {
        return {winner: 'player', message: 'You win! Rock beats Scissors!'};
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        return {winner: 'player', message: 'You win! Paper beats Rock!'};
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        return {winner: 'player', message: 'You win! Scissors beats Paper!'};
    } else if (computerChoice == 'rock' && playerChoice == 'scissors') {
        return {winner: 'computer', message: 'You lose! Rock beats Paper!'};
    } else if (computerChoice == 'paper' && playerChoice == 'rock') {
        return {winner: 'computer', message: 'You lose! Paper beats Rock!'};
    } else if (computerChoice == 'scissors' && playerChoice == 'paper') {
        return {winner: 'computer', message: 'You lose! Scissors beats Paper!'};
    } else {
        return {winner: 'draw', message: "It's a Draw!"};
    }
}

rockChoice.addEventListener('click', playRound)
paperChoice.addEventListener('click', playRound);
scissorsChoice.addEventListener('click', playRound);