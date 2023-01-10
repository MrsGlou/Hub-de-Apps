import { loadingPokeball } from "../../components/Loading/LoadingPokeApi";

//Hacemos la llamada a la api, al ser doble  llamada hacemos una dentro de otra, para traernos la información.
export const getPokemonsByRegion = async (selectedRegion) => {
  let pokemonList = [];
  const loading= document.querySelector("#pokemon-cards-container")
  loading.innerHTML = loadingPokeball();

//Pasamos la region que queremos pintar, desde que id a que id van
  for (let id = selectedRegion[0]; id <= selectedRegion[1]; id++) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    const moreData = await getPokemonSpeciesById(data.id);

//Nos quedamos solo con la información que necesitamos y la metemos en un objeto.
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
      baseHappiness: moreData.baseHappiness,
    };
//Función para traer los dos tipos de pokemon.
    data.types.forEach((item) => {
      newPokemon.pkmType.push(item.type.name);
    });
//Introducimos cada pokemon a la lista de pokemons
    pokemonList.push(newPokemon);
  }

  return pokemonList;
};

//Segunda llamada para traer las especies
const getPokemonSpeciesById = async (id) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  const data = await res.json();

  let newData = {
    captureRate: data.capture_rate,
    flavorText: "", //data.flavor_text_entries[34].flavor_text,
    genera: data.genera[5].genus,
    baseHappiness: data.base_happiness,
  };

  //Función para traer la explicación de cada pokemon en español.
  data.flavor_text_entries.forEach((item)=>{
    if(item.language.name === "es"){
    newData.flavorText= item.flavor_text;
    }
  })

  return newData;
};
