const fetchPokemon = async (pokemon) => {
    const ApiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (!ApiResponse.ok) {
        throw new Error("Pokémon não encontrado!");
    }

    const data = await ApiResponse.json();
    return data;
}

export default fetchPokemon;
