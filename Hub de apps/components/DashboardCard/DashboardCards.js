import './DashboardCards.css'

export const hubGames = () => {
  const listHUB = document.querySelector("#listHUB");
  listHUB.innerHTML = `
    <li><button id="pokeApi">PokeAPI</button></li>
    <li><button id="whakaTopo">Whak-a-Cat</button></li>
    `;
};
