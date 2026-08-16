function NavigationButtons({pokemonData, buscarPokemon}){

    const idAtual = pokemonData?.id;

    return(
        <div className="buttons">
            <button
             onClick={() => {
                if(idAtual > 1) {
                    buscarPokemon(idAtual-1)
                }
            }} 
                className="previous">
                    ❮ Prev
            </button>


            <button onClick={() => {
                if(idAtual < 1026) {
                     buscarPokemon(idAtual+1)
                }
            }} 
                className="next">
                Next ❯
            </button>
        </div>
    )
}

export default NavigationButtons