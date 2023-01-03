import { createContent } from "../../main";
import { createLogin } from "../../pages/Login/Login";
import "./Header.css";

export const createHeader = () => {
  const navbar = document.querySelector("header");
  navbar.innerHTML = `
  <div class="navbar">
    <h2>Welcome ${localStorage.user}</h2>
    <button id= "btnChangeColor">Change color</button>
    <button id= "logout"><i class="fa-solid fa-right-from-bracket"></i></button>
  </div>
    `;

  addHeadersEvents();
};

const addHeadersEvents = () => {
  const btnColor = document.querySelector("#btnChangeColor");
  btnColor.addEventListener("click", () => changeColor());

  const logOut = document.querySelector("#logout");
  logOut.addEventListener("click", () => logout());
};

const changeColor = () => {
  const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F"];

  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexValues[Math.floor(Math.random() * hexValues.length)];
  }

  document.body.style.backgroundColor = color;
};

const logout = () => {
  const localUser = document.querySelector(".navbar");
  localStorage.clear();
  localUser.innerHTML = `    
  <h2>Welcome </h2>
  <button id= "btnChangeColor">Change color</button>`
  addHeadersEvents();
  createLogin();
};
