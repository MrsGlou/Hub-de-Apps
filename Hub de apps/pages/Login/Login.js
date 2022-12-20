import { createDashboard } from '../Dashboard/Dashboard';
import './Login.css'

export const createLogin = () => {
    const home = document.querySelector("#app")
    home.innerHTML = `
    <div class= 'loginSection'>
        <h1>NEOLAND HUB-GAMES</h1>
        <h3>Introduce tu nombre</h3>
        <input type="text" id="userName"/>
        <button type="button" id="loginBtn">GO➡</button>
    </div>
    `
    saveUser();
}

const setUser = (userName) =>{
    localStorage.setItem("user", userName);
    console.log(`Hola`);
    createDashboard();
};

const saveUser = () => {
    const loginBtn = document.querySelector('#loginBtn');
    const loginInput = document.querySelector('#userName');

    loginBtn.addEventListener('click', () => setUser(loginInput.value))
};