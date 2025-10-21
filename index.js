const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const scoreDisplay = document.getElementById('score');
const gameOverBox = document.getElementById('game-over');
const finalScoreDisplay = document.getElementById('final-score');
const restartBtn = document.getElementById('restart-btn');

let score = 0;
let isAlive = true;

// Jump Function
document.addEventListener('keydown', () => {
  if (!dino.classList.contains('jump')) {
    dino.classList.add('jump');
    setTimeout(() => dino.classList.remove('jump'), 500);
  }
});

// Increase Score
const scoreInterval = setInterval(() => {
  if (isAlive) {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
  }
}, 100);

// Collision Detection
const checkCollision = setInterval(() => {
  const dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue('bottom'));
  const cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

  if (cactusLeft < 80 && cactusLeft > 20 && dinoBottom <= 60) {
    gameOver();
  }
}, 10);

// Game Over Handler
function gameOver() {
  isAlive = false;
  cactus.style.animation = 'none';
  cactus.style.display = 'none';
  gameOverBox.classList.remove('hidden');
  finalScoreDisplay.textContent = score;
  clearInterval(scoreInterval);
}

// Restart Game
restartBtn.addEventListener('click', () => {
  location.reload();
});
