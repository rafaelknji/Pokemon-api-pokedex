function SearchBar({pokemon, setPokemon, buscarPokemon}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        buscarPokemon(pokemon);
        setPokemon("");
    };

    return(
        <form className="form" onSubmit={handleSubmit}>
            <input type="search" 
            className="input_search"
            placeholder="Name or Number"
            value={pokemon}
            required
            onChange={(e) => setPokemon(e.target.value)} />
        </form>
    )
}

export default SearchBar