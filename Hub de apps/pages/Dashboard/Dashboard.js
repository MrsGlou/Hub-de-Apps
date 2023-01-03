import { hubGames } from "../../components/DashboardCard/DashboardCards";
import { createContent } from "../../main";

import "./Dashboard.css";

export const createDashboard = () => {
  const dashboard = document.querySelector("#app");
  dashboard.innerHTML = `
  <section class="hub">
        <h2>NEOLAND HUB-GAMES</h2>
        <ul id="listHUB">
        </ul>
    </section>
    `;
  hubGames();
  addlisteners();
};

const addlisteners = () => {
  document
    .querySelector("#pokeApi")
    .addEventListener("click", () => createContent("PokeAPI"));
    document
    .querySelector("#whakaTopo")
    .addEventListener("click", () => createContent("Whaka-a-Topo"));
};

