import "./PokeApi.css";

const colors = {
  grass: "#d2f2c2",
  poison: "#f7cdf7",
  fire: "#ffd1b5",
  flying: "#eae3ff",
  water: "#c2f3ff",
  bug: "#e0e8a2",
  normal: "#e6e6c3",
  electric: "#fff1ba",
  ground: "#e0ccb1",
  fighting: "#fcada9",
  psychic: "#ffc9da",
  rock: "#f0e09c",
  fairy: "#ffdee5",
  steel: "#e6eaf0",
  ice: "#e8feff",
  ghost: "#dbbaff",
  dragon: "#c4bdff",
  dark: "#a9abb0",
};

export const createPokeApi = () => {
  printPokemons();
  getPokemon(1, 151);
};

const printPokemons = (list) => {
  const pokeAPI = document.querySelector("#app");
  pokeAPI.innerHTML = `
  <div>
    <nav id="pokemon-container">
      <div id= "header-container">
        <h1>Pokédex</h1>
        <div class= btn-container>
          <button id= "left-btn"><i class="fa-solid fa-circle-left"></i></button>
          <button id= "right-btn"><i class="fa-solid fa-circle-right"></i></button>
        </div>
      <input type="text" class="search-box" placeholder="search pokemon"><i class="gg-pokemon"></i></div>
      <ul id="pkm-type"></ul>
    </nav>
    <section id ="pokemon-cards-container"></section>
  </div>
  `;
};

const pokemonList = [];

const getPokemon = async (pokemonStartId, pokemonEndId) => {
  for (let id = pokemonStartId; id <= pokemonEndId; id++) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    mapPokemon(pokemonList.push(data));
  };
};

const mapPokemon = (data) => {
  const mappedPokemon = pokemonList.map((pokemon) => ({
    name: pokemon.name,
    pokemonTypes: [
      pokemon.types.forEach((element) => {
        pokemonTypes.push(element.type.name);
      }),
    ],
    image: pokemon.sprites.other["official-artwork"].front_default,
  }));
  console.log(mappedPokemon);
  printPokemon(mappedPokemon);
};

const printPokemon = (list) => {
  const pokemoncard = document.querySelector("#pokemon-cards-container");
  for (const pokemon of pokemonList) {
    pokemoncard.innerHTML += `
    <div class="pokemon-card">
    <div class="card_front">
      <img src=${imageURL}></img>
      <div class="circle"></div>
      <h5 class="poke-id"> #${el.id} </h5>
      <h5 class="poke-name"> ${pokemonName.replace(/\w/, (ch) =>
        ch.toUpperCase()
      )} </h5>
      <h5> ${pokemonTypes
        .join(" / ")
        .replace(/\b\w/g, (ch) => ch.toUpperCase())} 
      </h5>
    </div>
    </div>
  `;
  }
};
