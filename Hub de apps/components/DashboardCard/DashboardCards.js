import './DashboardCards.css'

export const hubGames = () => {
  const listHUB = document.querySelector("#listHUB");
  listHUB.innerHTML = `
    <li><button id="pokeApi">PokeAPI</button></li>
    <li><button id="whakaTopo">Whak-a-Topo</button></li>
    <li><button id="3enRaya">3 en Raya</button></li>
    <li><button id="memoryGame">Memory Game</button></li>
    `;
};
