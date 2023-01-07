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

export const pokemonCard = (pokemonList) => {
  const pokemoncard = document.querySelector("#pokemon-cards-container");
  for (const pokemon of pokemonList) {
    pokemoncard.innerHTML += `
      <figure class= "pokemon-container">
        <div class="pokemon-card">
          <div class="card-front">
            <h4 class="poke-name">${
              pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
            }</h4>
            <h5 class= "poke-genera">${pokemon.genera}</h5>
            <img src=${pokemon.image}></img>
            <div class="circle"></div>
            <h5 class="poke-id"> #${pokemon.id} </h5>
            <h5 class= "poke-types">${pokemon.pkmType}</h5>
            <h6 class= "poke wh">Weight: ${pokemon.weight}kg - Height: ${
      pokemon.height
    }m</h6>
            <h6 class= "poke habitat"> Base Happiness: ${
              pokemon.baseHappiness}</h6>
            <h6 class= "poke capture"> Capture Rate: ${pokemon.captureRate}</h6>
            <h6 class= "poke flavorText"> ${pokemon.flavorText}</h6>
          </div>
          <div class="card-back">
            <h5 class= "poke-stats-name">HP: ${pokemon.HP}</h5>
            <div class="poke-stats-bar" style="background: linear-gradient(to right, ${
              colors[pokemon.pkmType[0]]
            } ${pokemon.HP}% , ${colors[pokemon.pkmType[0]]}70 ${pokemon.HP}%"
            ></div>
            <h5 class= "poke-stats-name">Attack: ${pokemon.attack}</h5>
            <div class="poke-stats-bar" style="background: linear-gradient(to right, ${
              colors[pokemon.pkmType[0]]
            } ${pokemon.attack}% , ${colors[pokemon.pkmType[0]]}70 ${
      pokemon.attack
    }%"
            ></div>
            <h5 class= "poke-stats-name">Defense:${pokemon.defense}</h5>
            <div class="poke-stats-bar" style="background: linear-gradient(to right, ${
              colors[pokemon.pkmType[0]]
            } ${pokemon.defense}% , ${colors[pokemon.pkmType[0]]}70 ${
      pokemon.defense
    }%"
            ></div>
            <h5 class= "poke-stats-name">Special Attack:${
              pokemon.specialAttack
            }</h5>
            <div class="poke-stats-bar" style="background: linear-gradient(to right, ${
              colors[pokemon.pkmType[0]]
            } ${pokemon.specialAttack}% , ${colors[pokemon.pkmType[0]]}70 ${
      pokemon.specialAttack
    }%"
            ></div>
            <h5 class= "poke-stats-name">Special Defense:${
              pokemon.specialDefense
            }</h5>
            <div class="poke-stats-bar" style="background: linear-gradient(to right, ${
              colors[pokemon.pkmType[0]]
            } ${pokemon.specialDefense}% , ${colors[pokemon.pkmType[0]]}70 ${
      pokemon.specialDefense
    }%"
            ></div>
            <h5 class= "poke-stats-name">Speed:${pokemon.speed}</h5>
            <div class="poke-stats-bar" style="background: linear-gradient(to right, ${
              colors[pokemon.pkmType[0]]
            } ${pokemon.speed}% , ${colors[pokemon.pkmType[0]]}70 ${
      pokemon.speed
    }%"
            ></div>
          </div>
        </div>
      </figure>
    `;
   const pkmCards = document.querySelectorAll(".card-front");
    const pkmCard = pkmCards[pkmCards.length - 1];
    if (pokemon.pkmType[1]) {
      pkmCard.style.background = `linear-gradient(145deg, ${colors[pokemon.pkmType[0]]} 50%, ${colors[pokemon.pkmType[1]]} 50%)`;
    } else {
      pkmCard.style.background = colors[pokemon.pkmType[0]];
    }
  }
};

