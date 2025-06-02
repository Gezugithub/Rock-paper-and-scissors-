let userScore = 0;
let computerScore = 0;
let round = 1;
const totalRounds = 3;

function playGame(userChoice) {
  document.getElementById('click-sound').play();

  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById('user-choice').textContent = `You chose: ${userChoice}`;
  document.getElementById('computer-choice').textContent = `Computer chose: ${computerChoice}`;

  const result = getWinner(userChoice, computerChoice);
  document.getElementById('winner').textContent = result;

  if (result === "You win!") {
    userScore++;
    document.getElementById('win-sound').play();
  } else if (result === "Computer wins!") {
    computerScore++;
    document.getElementById('lose-sound').play();
  }

  document.getElementById('user-score').textContent = userScore;
  document.getElementById('computer-score').textContent = computerScore;
  document.getElementById('round-number').textContent = round;

  if (round === totalRounds) {
    let matchResult = "";
    if (userScore > computerScore) {
      matchResult = "🏆 You win the match!";
    } else if (computerScore > userScore) {
      matchResult = "🤖 Computer wins the match!";
    } else {
      matchResult = "🤝 It's a draw!";
    }

    document.getElementById('match-winner').textContent = matchResult;

    document.querySelectorAll('.choices button').forEach(btn => btn.disabled = true);
  } else {
    round++;
  }
}

function getWinner(user, computer) {
  if (user === computer) {
    return "It's a draw!";
  }
  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

document.getElementById('reset-btn').addEventListener('click', () => {
  userScore = 0;
  computerScore = 0;
  round = 1;

  document.getElementById('user-score').textContent = userScore;
  document.getElementById('computer-score').textContent = computerScore;
  document.getElementById('round-number').textContent = round;

  document.getElementById('user-choice').textContent = '';
  document.getElementById('computer-choice').textContent = '';
  document.getElementById('winner').textContent = '';
  document.getElementById('match-winner').textContent = '';

  document.querySelectorAll('.choices button').forEach(btn => btn.disabled = false);
});

document.getElementById('dark-mode-btn').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

