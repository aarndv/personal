let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  tie: 0
};

displayScore();

let isAutoPlaying = false; 

let intervalId; 

function autoPlay() {
    if (!isAutoPlaying) {
        intervalId = setInterval(function () {
            const playerMove = pickComputerMove(); 
            playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;
    } else {
        clearInterval(intervalId);
        isAutoPlaying = false; 
    }
}

document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
        playGame('rock');
    });
document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
        playGame('paper');
    });
document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
        playGame('scissors');
    });

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        playGame('rock'); 
    } else if (event.key === 'p') {
        playGame('paper'); 
    } else if (event.key ===  's') {
        playGame('scissors'); 
    } 
});

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = ''; 

  if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
          result = 'You lose.'; 
      } else if (computerMove === 'paper') {
          result = 'You win.';
      } else if (computerMove === 'scissors') {
          result = 'Tie.';
      }
  } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
          result = 'You win.'; 
      } else if (computerMove === 'paper') {
          result = 'Tie.';
      } else if (computerMove === 'scissors') {
          result = 'You lose.';
      }
  } else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
          result = 'Tie.'; 
      } else if (computerMove === 'paper') {
          result = 'You lose.';
      } else if (computerMove === 'scissors') {
          result = 'You win.';
      }
  }

  if (result === 'You win.') {
      score.wins++; 
  } else if (result === 'You lose.') {
      score.losses++;
  } else if (result === 'Tie.') {
      score.tie++;
  }

  localStorage.setItem('score', JSON.stringify(score));
  document.querySelector('.js-display-outcome')
  .innerHTML = `You
  <img class="move-icon" src="12logo/${playerMove}-emoji.png">
  <img class="move-icon" src="12logo/${computerMove}-emoji.png">
  Computer`;
  document.querySelector('.js-display-result')
  .innerHTML = result;
  displayScore();

  // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}\nWins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.tie}`);
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';
  
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'scissors';
  }

  return computerMove;
}

function displayScore() {
document.querySelector('.js-display-score')
  .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.tie}`;
}

