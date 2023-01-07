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

let selectedRegion = regions.kanto;

let pokemons = [];

export const createPokeApi = () => {
  drawPokeApi();
  drawPokemons();
};

const drawPokeApi = () => {
  const pokeAPI = document.querySelector("#app");
  pokeAPI.innerHTML = `
  <div class = "poke-api">
      <nav class="pokemon-nav">
          <div class= "header-container">
              <h1>Pokedex</h1>
              <div class= "btn-container">
                  <button class= "region-button" id="kanto">Kanto</button>
                  <button class= "region-button" id="johto">Johto</button>
                  <button class= "region-button" id="hoenn">Hoenn</button>
                  <button class= "region-button" id="sinnoh">Sinnoh</button>
                  <button class= "region-button" id="unova">Unova</button>
                  <button class= "region-button" id="kalos">Kalos</button>
              </div>
            <input type="text" class="search-box" placeholder="search pokemon"></input>
            <ul class="pkm-type">
              <li><button class="type dark"><img src="./public/Pokémon_Dark_Type_Icon.svg"/></button></li>
              <li><button class="type electric"><img src="./public/Pokémon_Electric_Type_Icon.svg"/></button></li>
              <li><button class="type fairy"><img src="./public/Pokémon_Fairy_Type_Icon.svg"/></button></li>
              <li><button class="type fighting"><img src="./public/Pokémon_Fighting_Type_Icon.svg"/></button></li>
              <li><button class="type ground"><img src="./public/Pokémon_Ground_Type_Icon.svg"/></button></li>
              <li><button class="type ice"><img src="./public/Pokémon_Ice_Type_Icon.svg"/></button></li>
              <li><button class="type normal"><img src="./public/Pokémon_Normal_Type_Icon.svg"/></button></li>
              <li><button class="type poison"><img src="./public/Pokémon_Poison_Type_Icon.svg"/></button></li>
              <li><button class="type steel"><img src="./public/Pokémon_Steel_Type_Icon.svg"/></button></li>
              <li><button class="type water"><img src="./public/Pokémon_Water_Type_Icon.svg"/></button></li>
              <li><button class="type psychic"><img src="./public/Pokémon_Psychic_Type_Icon.svg"/></button></li>
              <li><button class="type rock"><img src="./public/Pokémon_Rock_Type_Icon.svg"/></button></li>
              <li><button class="type bug"><img src="./public/tipobicho.png"/></button></li>
              <li><button class="type dragon"><img src="./public/tipodragon.png"/></button></li>
              <li><button class="type ghost"><img src="./public/tipofantasma.png"/></button></li>
              <li><button class="type fire"><img src="./public/tipofuego.png"/></button></li>
              <li><button class="type grass"><img src="./public/tipoplanta.png"/></button></li>
              <li><button class="type fly"><img src="./public/tipovolador (2).png"/></button></li>
            </ul>
          </div>
      </nav>
      <section id ="pokemon-cards-container"></section>
  </div>
  `;

  let buttons = document.querySelectorAll(".region-button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", handleRegionButtons);
  }

  document.querySelector(".search-box").addEventListener("input", handleSearchBox)
};

const handleRegionButtons = (e) => {
  selectedRegion = regions[e.target.id];
  toggleButton(e.target.id);
  drawPokemons();
};

const toggleButton = (id) => {
  let buttons = document.getElementsByClassName("region-button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }

  document.getElementById(id).disabled = true;
};

const drawPokemons = async () => {
  document.querySelector("#pokemon-cards-container").replaceChildren();

  await getPokemonsByRegion(selectedRegion).then((result) => {
    pokemons = result;
    pokemonCard(pokemons);
  });
};

//Buscador de pkm por nombre
const handleSearchBox = (e) => {
  const pokemons = document.querySelectorAll(".pokemon-container");
  //Busca cada vez que introducimos una letra nueva
    const inpName = e.target.value.toLowerCase();
    pokemons.forEach((pokemon) => {
      let pokemonName = pokemon.querySelector(".poke-name").innerHTML.toLowerCase();
      if (pokemonName.includes(inpName)) {
        pokemon.style.display = "inline";
      } else {
        pokemon.style.display = "none";
      }
    });
  };

const pkmTypeListener = () => {
  const pkmTypes = document.querySelectorAll(".type");
  const pokemons = document.querySelectorAll(".pokemon-card");
  for (let type of pkmTypes) {
    pkmtype.addEventListener("click", (type) => {});
  }
};
