import { createHeader } from '../../components/Header/Header';
import { createContent } from '../../main';
import './Login.css'

export const createLogin = () => {
    const home = document.querySelector("#app")
    home.innerHTML = `
    <div class= 'loginSection'>
        <h1>NEOLAND HUB-GAMES</h1>
        <h3>Introduce tu nombre</h3>
        <input type="text" id="userName" placeholder="name"/>
        <button type="button" id="loginBtn"><i class="fa-solid fa-right-to-bracket"></i></button>
    </div>
    `
    saveUser();
}

const saveUser = () => {
    const loginBtn = document.querySelector('#loginBtn');
    const loginInput = document.querySelector('#userName');

    loginBtn.addEventListener('click', () => setUser(loginInput.value))
};

const setUser = (userName) =>{
    localStorage.setItem("user", userName);
    createHeader();
    createContent("dashboard");
};