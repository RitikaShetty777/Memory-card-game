const difficulties = {
  easy: { rows: 4, cols: 4, penalty: 2 },
  medium: { rows: 5, cols: 4, penalty: 4 },
  hard: { rows: 6, cols: 5, penalty: 6 }
};

let symbolsBase = ['α','β','γ','δ','ε','ζ','η','θ','ι','κ','λ','μ','ν','ξ','ο'];
let score, hints, firstCard, secondCard, lockBoard;
let matchedPairs = 0;

const board = document.getElementById("gameBoard");
const scoreEl = document.getElementById("score");
const messageEl = document.getElementById("message");
const hintEl = document.getElementById("hints");

function initGame() {
  board.innerHTML = '';
  messageEl.textContent = '';
  lockBoard = false;
  firstCard = secondCard = null;
  matchedPairs = 0;
  score = 100;
  hints = 3;

  scoreEl.textContent = score;
  hintEl.textContent = hints;

  const level = difficulties[document.getElementById("difficulty").value];
  board.style.gridTemplateColumns = `repeat(${level.cols}, 100px)`;

  const totalCards = level.rows * level.cols;
  const symbols = symbolsBase.slice(0, totalCards / 2);
  const cards = [...symbols, ...symbols].sort(() => Math.random() - 0.5);

  cards.forEach(symbol => createCard(symbol));
}

function createCard(symbol) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <div class="card-inner">
      <div class="card-face card-front">🏆</div>
      <div class="card-face card-back">${symbol}</div>
    </div>
  `;

  card.dataset.symbol = symbol;
  card.addEventListener("click", () => flipCard(card));
  board.appendChild(card);
}

function flipCard(card) {
  if (lockBoard || card === firstCard || card.classList.contains("matched")) return;

  card.classList.add("flipped");

  if (!firstCard) {
    firstCard = card;
    return;
  }

  secondCard = card;
  checkMatch();
}

function checkMatch() {
  const level = difficulties[document.getElementById("difficulty").value];
  const match = firstCard.dataset.symbol === secondCard.dataset.symbol;

  if (match) {
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");
    matchedPairs++;
    resetTurn();

    if (matchedPairs * 2 === board.children.length) {
      messageEl.textContent = "🎉 You Win!";
    }
  } else {
    score -= level.penalty;
    scoreEl.textContent = score;

    if (score <= 0) {
      messageEl.textContent = "❌ Game Over";
      lockBoard = true;
      return;
    }

    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      resetTurn();
    }, 800);
  }
}

function resetTurn() {
  [firstCard, secondCard] = [null, null];
  lockBoard = false;
}

// 🧠 Hint System
function useHint() {
  if (hints === 0 || lockBoard) return;

  hints--;
  hintEl.textContent = hints;
  score -= 5;
  scoreEl.textContent = score;

  const cards = document.querySelectorAll(".card");
  cards.forEach(card => card.classList.add("flipped"));

  setTimeout(() => {
    cards.forEach(card => {
      if (!card.classList.contains("matched")) {
        card.classList.remove("flipped");
      }
    });
  }, 2000);
}

function restartGame() {
  initGame();
}

initGame();
