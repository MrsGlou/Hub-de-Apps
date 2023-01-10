import { pokemonCard } from "../../components/PokemonCard/PokemonCard";
import { getPokemonsByRegion } from "./CallsPokeapi";
import "./PokeApi.css";

//Regiones que vamos a pintar
const regions = {
  kanto: [1, 151],
  johto: [152, 251],
  hoenn: [252, 386],
  sinnoh: [387, 493],
  unova: [494, 649],
  kalos: [650, 809],
  galar: [810, 898],
};

//seleccionamos una region por defecto para que cuando abramos la app pinte los pokemon
let selectedRegion = regions.kanto;

let pokemons = [];

//Funcion exportable que nos va a crear la pagina
export const createPokeApi = () => {
  drawPokeApi();
  drawPokemons();
};

//Pintamos el template del navegador de la pokeapi y damos eventos a los botones
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
                  <button class= "region-button" id="galar">Galar</button>
                  </div>
            <input type="text" class="search-box" placeholder="search pokemon"></input>
            <ul class="pkm-type"><h3 class= "type tittle">Tipos de Pokemon:</h3>
              <li><button class="type" id= "dark"><img src="./public/Pokémon_Dark_Type_Icon.svg"/></button></li>
              <li><button class="type" id= "electric"><img src="./public/Pokémon_Electric_Type_Icon.svg"/></button></li>
              <li><button class="type" id= "fairy"><img src="./public/Pokémon_Fairy_Type_Icon.svg"/></button></li>
              <li><button class="type" id= "fighting"><img src="./public/Pokémon_Fighting_Type_Icon.svg"/></button></li>
              <li><button class="type" id= "ground"><img src="./public/Pokémon_Ground_Type_Icon.svg"/></button></li>
              <li><button class="type" id= "ice"><img src="./public/Pokémon_Ice_Type_Icon.svg"/></button></li>
              <li><button class="type" id= "normal"><img src="./public/Pokémon_Normal_Type_Icon.svg"/></button></li>
              <li><button class="type" id= "poison"><img src="./public/Pokémon_Poison_Type_Icon.svg"/></button></li>
              <li><button class="type" id= "steel"><img src="./public/Pokémon_Steel_Type_Icon.svg"/></button></li>
              <li><button class="type" id= "water"><img src="./public/Pokémon_Water_Type_Icon.svg"/></button></li>
              <li><button class="type" id= "psychic"><img src="./public/Pokémon_Psychic_Type_Icon.svg"/></button></li>
              <li><button class="type" id= "rock"><img src="./public/Pokémon_Rock_Type_Icon.svg"/></button></li>
              <li><button class="type" id= "bug"><img src="./public/tipobicho.png"/></button></li>
              <li><button class="type" id= "dragon"><img src="./public/tipodragon.png"/></button></li>
              <li><button class="type" id= "ghost"><img src="./public/tipofantasma.png"/></button></li>
              <li><button class="type" id= "fire"><img src="./public/tipofuego.png"/></button></li>
              <li><button class="type" id= "grass"><img src="./public/tipoplanta.png"/></button></li>
              <li><button class="type" id= "fly"><img src="./public/tipovolador (2).png"/></button></li>
            </ul>
            <div id = "poke-type-name"></div>
          </div>
      </nav>
      <section id ="pokemon-cards-container"></section>
  </div>
  `;

  //Creamos un bucle para que cada boton tenga la funcion asociada de cambiar de region, el buscador por nombres y el tipo 
  let buttons = document.querySelectorAll(".region-button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", handleRegionButtons);
  }


  document
    .querySelector(".search-box")
    .addEventListener("input", handleSearchBox);

  let typeButtons = document.querySelectorAll(".type");

  for (let i = 0; i < typeButtons.length; i++) {
    typeButtons[i].addEventListener("click", handleTypeButtons);
  }
};

//Cambiamos el valor de la region seleccionada, hacemos que el resto de buscadores se pongan a cero, mandamos a pintar los pokemon
const handleRegionButtons = (e) => {
  selectedRegion = regions[e.target.id];
  document.querySelector(".search-box").value = "";
  document.querySelector("#poke-type-name").innerHTML = "";
  toggleButton(e.target.id);
  drawPokemons();
};

//Hacemos que el boton se habilite o no.
const toggleButton = (id) => {
  let buttons = document.getElementsByClassName("region-button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }

  document.getElementById(id).disabled = true;
};

//Mandamos a la funcion asincrona los pokemon que tiene que hacer la llamada, guardamos los pokemon y los pinta
const drawPokemons = async () => {
  document.querySelector("#pokemon-cards-container").replaceChildren();

  await getPokemonsByRegion(selectedRegion).then((result) => {
    pokemons = result;
    pokemonCard(pokemons);
  });
};

//Buscador de pokemon por nombre
const handleSearchBox = (e) => {
  const pokemons = document.querySelectorAll(".pokemon-container");
  document.querySelector("#poke-type-name").innerHTML = "";
  //Busca cada vez que introducimos una letra nueva y vuelve a pintar los pokemon cuadno borramos 
  const inpName = e.target.value.toLowerCase();
  pokemons.forEach((pokemon) => {
    let pokemonName = pokemon
      .querySelector(".poke-name")
      .innerHTML.toLowerCase();
    if (pokemonName.includes(inpName)) {
      pokemon.style.display = "inline";
    } else {
      pokemon.style.display = "none";
    }
  });
};

//Recuperamos el id del boton de los tipos y se lo damos a la función que va a hacer  el filtro
const handleTypeButtons = (e) => {
  let selectedType = e.currentTarget.id;
  
  filterPokemonTypes(selectedType);
};

//Pasamos el tipo de pokemon que vamos a pintar y ponemos debajo de la lista el nombre.
const filterPokemonTypes = (selectedType) => {
  const pokemons = document.querySelectorAll(".pokemon-container");
  const container = document.querySelector("#poke-type-name");
  container.innerHTML= `<h3>${selectedType.replace(/\b\w/g, (ch) => ch.toUpperCase())}</h3>`
  document.querySelector(".search-box").value = "";

//Bucle para ir mirando los tipos de pokemon y los que no son iguales los elimina.
  pokemons.forEach((pokemon) => {
    //recuperamos el tipo de cada pokemon por medio de lo que contiene la clase .poke-type
    let pokemonType = pokemon
      .querySelector(".poke-types")
      .innerHTML.toLowerCase();
    if (pokemonType.includes(selectedType)) {
      pokemon.style.display = "inline";
    } else {
      pokemon.style.display = "none";
    }
  });
};
