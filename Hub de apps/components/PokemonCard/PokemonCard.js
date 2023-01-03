import "./PokemonCard.css";

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

export const pokemonCard = (mappedPokemon) => {
  const pokemoncard = document.querySelector("#pokemon-cards-container");
  for (const pokemon of mappedPokemon) {
    pokemoncard.innerHTML += `
      <figure class = "pokemon-container">
      <div class="pokemon-card">
      <div class="card-front">
        <h4 class="poke-name">${
          pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
        }</h4>
        <img src=${pokemon.image}></img>
        <div class="circle"></div>
        <h5 class="poke-id"> #${pokemon.id} </h5>
        <h5 class= "poke-weight">Weight: ${pokemon.weight}kg</h5>
        <h5 class= "poke-height"> Height: ${pokemon.height}m</h5>
        <h5 class= "poke-types">${pokemon.types}</h5>
        <div id= "poke-info"></div>
      </div>
      <div class="card-back">
      <h5 class= "poke-stats-name">HP: ${pokemon.HP}</h5>
      <div class="poke-stats-bar" style="background: linear-gradient(to right, #c2f3ff ${
        pokemon.HP
      }% , #f0e09c ${pokemon.HP}%"
      ></div>
      <h5 class= "poke-stats-name">Attack: ${pokemon.attack}</h5>
      <div class="poke-stats-bar" style="background: linear-gradient(to right, #c2f3ff ${
        pokemon.attack
      }% , #f0e09c ${pokemon.attack}%"
      ></div>
      <h5 class= "poke-stats-name">Defense:${pokemon.defense}</h5>
      <div class="poke-stats-bar" style="background: linear-gradient(to right, #c2f3ff ${
        pokemon.defense
      }% , #f0e09c ${pokemon.defense}%"
      ></div>
      <h5 class= "poke-stats-name">Special Attack:${pokemon.specialAttack}</h5>
      <div class="poke-stats-bar" style="background: linear-gradient(to right, #c2f3ff ${
        pokemon.specialAttack
      }% , #f0e09c ${pokemon.specialAttack}%"
      ></div>
      <h5 class= "poke-stats-name">Special Defense:${
        pokemon.specialDefense
      }</h5>
      <div class="poke-stats-bar" style="background: linear-gradient(to right, #c2f3ff ${
        pokemon.specialDefense
      }% , #f0e09c ${pokemon.specialDefense}%"
      ></div>
      <h5 class= "poke-stats-name">Speed:${pokemon.speed}</h5>
      <div class="poke-stats-bar" style="background: linear-gradient(to right, #c2f3ff ${
        pokemon.speed
      }% , #f0e09c ${pokemon.speed}%"
      ></div>
      </div>
      </div>
      </figure>
    `;
  }
};

export const pokemonInfo = (mappedSpecies) => {
  const pokemoninfo = document.querySelector("#poke-info");
  for (const species of mappedSpecies) {
    pokemoninfo.innerHTML += `
    <h5 class= "poke-habitat">${species.habitat}</h5>
    `
  }
  }