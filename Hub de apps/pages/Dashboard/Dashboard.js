import { LISTHUB } from '../../components/DashboardCard/DashboardCards';
import './Dashboard.css'

export const createDashboard = () => {
    console.log(`mundo`)

    const dashboard = document.querySelector('#app');
    dashboard.innerHTML =
    `<section class="hub">
    <h2> Welcome ${localStorage.user}</h2>
    </section>
    `
    addCard()
}

const addCard = () => {
    for (let clave in LISTHUB){
        createCardsHub(clave, LISTHUB[clave])
    }
}

const createCardsHub = (name, image) => {
    const cardsHub = document.querySelector("#hub");
    cardsHub.innerHTML += `
    <figure class= "cardHub" style="background-image: url('${image}')" >
        <h2>${name}</h2>
    </figure>
    `
}