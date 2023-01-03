import { pokemonCard } from "../../components/PokemonCard/PokemonCard";
import { pokemonInfo } from "../../components/PokemonCard/PokemonCard";
import "./PokeApi.css";

const generations = [
  ["Kanto",1, 151],
  ["Jhoto" ,152, 251],
  ["Hoenn", 252, 386],
  ["Sinnoh", 387, 493],
  ["Unova", 494, 649],
  ["Kalos", 650, 809],
]


export const createPokeApi = () => {
  printPokeApi();
};

const printPokeApi = (list) => {
  const pokeAPI = document.querySelector("#app");
  pokeAPI.innerHTML = `
  <div class = "poke-api">
    <nav class="pokemon-nav">
      <div class= "header-container">
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
  getPokemon(1, 151);
  getSpecies(1,151);
};

const pokemonList = [];
const speciesList = [];

const getPokemon = async (pokemonStartId, pokemonEndId) => {
  for (let id = pokemonStartId; id <= pokemonEndId; id++) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    pokemonList.push(data);
  }
  mapPokemon();
};

const mapPokemon = () => {
  const mappedPokemon = pokemonList.map((pokemon) => ({
    name: pokemon.name,
    image: pokemon.sprites.other["official-artwork"].front_default,
    pkmtypes: pokemon.types,
    id: pokemon.id,
    weight: pokemon.weight/10,
    height: pokemon.height/10,
    HP: pokemon.stats[0].base_stat,
    attack: pokemon.stats[1].base_stat,
    defense: pokemon.stats[2].base_stat,
    specialAttack: pokemon.stats[3].base_stat,
    specialDefense: pokemon.stats[4].base_stat,
    speed: pokemon.stats[5].base_stat,
  }));
  /*
  pokemon.types.forEach((item) => {
    pkmtypes.push(item.type.name);
  });*/
  pokemonCard(mappedPokemon);
};

const getSpecies = async (pokemonStartId, pokemonEndId) => {
  for (let id = pokemonStartId; id <= pokemonEndId; id++) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    const data = await res.json();
    speciesList.push(data);
  }
  mapSpecies();
};

const mapSpecies = () => {
  const mappedSpecies = speciesList.map((species) => ({
    captureRate: species.capture_rate,
    flavorText: species.flavor_text_entries[34].flavor_text,
    genera: species.genera[5].genus,
    habitat: species.habitat.name,
  }))
  console.log(mappedSpecies);
  pokemonInfo(mappedSpecies);
}