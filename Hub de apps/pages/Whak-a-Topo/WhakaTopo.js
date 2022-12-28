import "./WhakaTopo.css";

export const createWhakaTopo = () => {
  const whakaTopo = document.querySelector("#app");
  whakaTopo.innerHTML = `
    <div class="container">
        <h2>Tiempo restante:</h2>
        <h3 id="time-left">30</h3>
        <h2>Puntuación:</h2>
        <h3 id="score">0</h3>
    <div class="grid" id="square-container"></div>
    </div>
    `;
  const container = document.querySelector("#square-container");
  for (let i = 0; i < 9; i++) {
    container.innerHTML += `
        <div class="square" id="${i}"></div>
        `;
  }
  startGame();
};

const moveCat = () => {
  let timerId = 0;
  timerId = setInterval(getRandomSquare, 500);
};

const getRandomSquare = () => {
  const squares = document.querySelectorAll(".square");
  const score = document.querySelector("#score");
  const cat = document.querySelector('.cat');

  let positionHit;
  let result = 0;

  squares.forEach((square) => {
    square.classList.remove("cat");
  });

  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("cat");

  positionHit = randomSquare.id;

  squares.forEach((square) => {
    square.addEventListener("mousedown", () => {
      if (square.id == positionHit) {
        result++;
        score.textContent = result;
        positionHit = null;
      }
    });
  });
};

const count = () => {
  const time = document.querySelector("#time-left");
  let actualTime = 30;

  actualTime--;
  time.textContent = actualTime;

  if (actualTime == 0) {
    clearInterval(timerId);
    clearInterval(countTimerId);
    alert(`Se acabo el juego, tu puntuación ha sido de ${result}`);
  }
};

const startGame = () => {
  let countTimerId = setInterval(count, 1000);
  moveCat();
};
