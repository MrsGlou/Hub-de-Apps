import './Login.css'


export const createLogin = () => {
    const home = document.querySelector("#app")
    home.innerHTML= `
    <div class= 'loginSection'>
        <h1>NEOLAND HUB-GAMES</h1>
        <h3>Introduce tu nombre</h3>
        <input type="text" id="loginInput"/>
        <button type="button" id="loginBtn"><i class="fa-regular fa-right-to-bracket"></i></button>
    </div>
    
    `
}