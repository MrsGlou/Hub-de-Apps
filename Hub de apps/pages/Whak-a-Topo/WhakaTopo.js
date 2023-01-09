import "./WhakaTopo.css";

const totalSquares = 9;
const states = {
  starting: "starting",
  running: "running",
  paused: "paused",
  finished: "finished",
};
var currentState = states.starting;
var timeLeft = 30;
var score = 0;
var squareCatId;
var intervalTime;
var intervalCat;

export const whakaTopo = () => {
  drawGrid();
};

//Dibuja una vez la plantilla y añade los listeners
const drawGrid = () => {
  const whakaTopo = document.querySelector("#app");
  whakaTopo.innerHTML = `
        <div class="container">
            <h2>Tiempo restante:</h2>
            <h3 id="time-left">${timeLeft}</h3>
            <h2>Puntuación:</h2>
            <h3 id="scoreboard">${score}</h3>
            <button id="start">Start</button>
            <button id="pause">Pause</button>
            <button id="restart">Restart</button>
            <div class="grid" id="square-container"></div>
        </div>
    `;

  const container = document.querySelector("#square-container");
  for (let i = 0; i < totalSquares; i++) {
    const square = `<div class="square" id="${i}"></div>`;
    container.innerHTML += square;
  }

  for (let i = 0; i < totalSquares; i++) {
    const square = document.getElementById(i);
    square.addEventListener("click", checkHit);
  }

  const startButton = document.getElementById("start");
  startButton.addEventListener("click", startGame);

  const pauseButton = document.getElementById("pause");
  pauseButton.addEventListener("click", togglePause);

  const restartButton = document.getElementById("restart");
  restartButton.addEventListener("click", restartGame);
};

const startGame = (event) => {
  if (currentState === states.starting) {
    const startButton = document.getElementById("start");
    startButton.disabled = true;
    currentState = states.running;

    intervalCat = setInterval(drawCat, 500);
    intervalTime = setInterval(() => {
      timeLeft--;
      checkTime();
      updateTimer();
    }, 1000);
  }
};

//Pausa o resume el juego según el estado en el que se encuentre
const togglePause = () => {
  const pauseButton = document.getElementById("pause");

  if (currentState === states.running) {
    clearInterval(intervalTime);
    clearInterval(intervalCat);

    pauseButton.innerHTML = "Resume";
    currentState = states.paused;
  } else if (currentState === states.paused) {
    intervalTime = setInterval(() => {
      timeLeft--;
      checkTime();
      updateTimer();
    }, 1000);
    intervalCat = setInterval(drawCat, 500);

    pauseButton.innerHTML = "Pause";
    currentState = states.running;
  }
};

//Resetea el juego
const restartGame = (event) => {
    const startButton = document.getElementById("start");
    startButton.disabled = false;
    alert("Se acabo el juego! tu puntuacion fue de: " + score);
  timeLeft = 30;
  score = 0;
  updateTimer();
  updateScoreboard();
  removeCat();
  clearInterval(intervalTime);
  clearInterval(intervalCat);
  currentState = states.starting;
};

//Elimina la clase 'cat' de todos los squares
//y selecciona aleatoriamente un square para añadir la clase 'cat'
const drawCat = () => {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.classList.remove("cat");
  });

  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("cat");
  squareCatId = randomSquare.id;
};

//Comprueba si ha hecho 'click' en el gato
//Si es true aumenta la puntuación
const checkHit = (e) => {
  if (currentState === states.running) {
    let squareClickedId = e.target.id;

    if (squareClickedId === squareCatId) {
      score++;
      updateScoreboard();
    }
  }
};

//Elimina la clase 'cat'
const removeCat = () => {
  let squares = document.getElementsByClassName("square");

  for (let square of squares) {
    square.classList.remove("cat");
    console.log(square);
  }
};

//Si el tiempo llega a 0 se para el juego
const checkTime = () => {
  if (timeLeft <= 0) {
    clearInterval(intervalTime);
    clearInterval(intervalCat);
    currentState = states.finished;
    alert("Se acabo el juego! tu puntuacion fue de: " + score);
    removeCat();
  }
};

//Actualiza el timer
const updateTimer = () => {
  let timer = document.getElementById("time-left");
  timer.innerHTML = timeLeft;
};

//Actualiza el marcador
const updateScoreboard = () => {
  let scoreboard = document.getElementById("scoreboard");
  scoreboard.innerHTML = score;
};
