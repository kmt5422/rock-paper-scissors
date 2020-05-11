function computerPlay() {
    return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'rock')) {
        return { message: `You Win! ${titleCase(playerSelection)} beats ${titleCase(computerSelection)}.`, outcome: 'win'};
    } else if ((computerSelection == 'rock' && playerSelection == 'scissors') || (computerSelection == 'scissors' && playerSelection == 'paper') || (computerSelection == 'paper' && playerSelection == 'rock')) {
        return { message: `You Lose! ${titleCase(computerSelection)} beats ${titleCase(playerSelection)}.`, outcome: 'lose'};
    } else {
        return { message: `It's a Draw! You both chose ${titleCase(playerSelection)}.`, outcome: 'draw'};
    }
}

function titleCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let drawScore = 0;

    for(let i = 0; i < 5; i++) {
        if (playerScore == 3 || computerScore == 3) {
            break;
        }

        let playerChoice = prompt('Choose - Rock, Paper or Scissors: ');
        let computerChoice = computerPlay();
        let {message, outcome} = playRound(playerChoice, computerChoice);

        if (outcome == 'win') {
            playerScore += 1;
        } else if (outcome == 'lose') {
            computerScore += 1;
        } else {
            drawScore += 1;
        }

        console.log(message);
        console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}, Draws: ${drawScore}`);
    }

    if (playerScore == 3) {
        console.log('You Win!');
    } else if (computerScore == 3) {
        console.log('Computer Wins :(');
    } else if (playerScore > computerScore) {
        console.log('You Win!');
    } else if (computerScore > playerScore) {
        console.log('Computer Wins :(');
    } else {
        console.log('It was a Draw. -_-');
    }
}