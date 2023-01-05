export const getPokemonsByRegion = async (selectedRegion) => {
  let pokemonList = [];

  for (let id = selectedRegion[0]; id <= selectedRegion[1]; id++) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    const moreData = await getPokemonSpeciesById(data.id);

    let newPokemon = {
      name: data.name,
      image: data.sprites.other["official-artwork"].front_default,
      pkmType: [],
      id: data.id,
      weight: data.weight / 10,
      height: data.height / 10,
      HP: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      specialAttack: data.stats[3].base_stat,
      specialDefense: data.stats[4].base_stat,
      speed: data.stats[5].base_stat,
      captureRate: moreData.captureRate,
      flavorText: moreData.flavorText,
      genera: moreData.genera,
      habitat: moreData.habitat,
    };

    data.types.forEach((item) => {
      newPokemon.pkmType.push(item.type.name);
    });

    pokemonList.push(newPokemon);
  }

  return pokemonList;
};

const getPokemonSpeciesById = async (id) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  const data = await res.json();

  let newData = {
    captureRate: data.capture_rate,
    flavorText: data.flavor_text_entries[34].flavor_text,
    genera: data.genera[5].genus,
    habitat: data.habitat.name,
  };

  return newData;
};
