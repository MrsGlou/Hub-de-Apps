import { pokemonCard } from "../../components/PokemonCard/PokemonCard";
import { getPokemonsByRegion } from "./CallsPokeapi";
import "./PokeApi.css";

const regions = {
  kanto: [1, 151],
  johto: [152, 251],
  hoenn: [252, 386],
  sinnoh: [387, 493],
  unova: [494, 649],
  kalos: [650, 809],
};

var selectedRegion = regions.kanto;

var pokemons = [];

export const createPokeApi = () => {
  drawPokeApi();
  drawPokemons();
}

const drawPokeApi = () => {
  const pokeAPI = document.querySelector("#app");
  pokeAPI.innerHTML = `
  <div class = "poke-api">
      <nav class="pokemon-nav">
          <div class= "header-container">
              <h1>Pokedex</h1>
              <div class= "btn-container">
                  <button class= "page current-page">1</button>
                  <button class= "page">2</button>
                  <button class= "page">3</button>
                  <button class= "page">4</button>
                  <button class= "page">5</button>
                  <button class= "page">6</button>
              </div>
          <input type="text" class="search-box" placeholder="search pokemon"></input>
          <ul class="pkm-type">
            <li><button class="type"><img src="./public/Pokémon_Dark_Type_Icon.svg"/></button></li>
            <li><button class="type"><img src="./public/Pokémon_Electric_Type_Icon.svg"/></button></li>
            <li><button class="type"><img src="./public/Pokémon_Fairy_Type_Icon.svg"/></button></li>
            <li><button class="type"><img src="./public/Pokémon_Fighting_Type_Icon.svg"/></button></li>
            <li><button class="type"><img src="./public/Pokémon_Ground_Type_Icon.svg"/></button></li>
            <li><button class="type"><img src="./public/Pokémon_Ice_Type_Icon.svg"/></button></li>
            <li><button class="type"><img src="./public/Pokémon_Normal_Type_Icon.svg"/></button></li>
            <li><button class="type"><img src="./public/Pokémon_Poison_Type_Icon.svg"/></button></li>
            <li><button class="type"><img src="./public/Pokémon_Steel_Type_Icon.svg"/></button></li>
            <li><button class="type"><img src="./public/Pokémon_Water_Type_Icon.svg"/></button></li>
            <li><button class="type"><img src="./public/Pokémon_Psychic_Type_Icon.svg"/></button></li>
            <li><button class="type"><img src="./public/Pokémon_Rock_Type_Icon.svg"/></button></li>
            <li><button class="type"><img src="./public/tipobicho.png"/></button></li>
            <li><button class="type"><img src="./public/tipodragon.png"/></button></li>
            <li><button class="type"><img src="./public/tipofantasma.png"/></button></li>
            <li><button class="type"><img src="./public/tipofuego.png"/></button></li>
            <li><button class="type"><img src="./public/tipoplanta.png"/></button></li>
            <li><button class="type"><img src="./public/tipovolador (2).png"/></button></li>

          </ul>
          </div>
      </nav>
      <section id ="pokemon-cards-container"></section>
  </div>
  `;
}

const drawPokemons = async () => {
  await getPokemonsByRegion(selectedRegion).then((result) => {
      pokemons = result;
      pokemonCard(pokemons);
  });
} 

//Buscador de pkm por nombre
const searchBoxListener = () => {
  const searchBox = document.querySelector(".search-box");
  const pokemons = document.querySelectorAll(".pokemon-card .poke-name");
  //Busca cada vez que introducimos una letra nueva
  searchBox.addEventListener("keyup", (pokemon) => {
    const inpName = searchBox.value.toLowerCase();

    pokemons.forEach((pokemon) => {
      const name = pokemon.textContent.toLowerCase();
      if (name.indexOf(inpName) !== -1) {
        pokemon.parentElement.parentElementstyle.display =
          "flex";
      } else {
        pokemon.parentElement.parentElement.style.display =
          "none";
      }
    });
  });
};
