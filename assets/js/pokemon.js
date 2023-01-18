const pokeCard = localStorage.getItem('pokemon')
const container = document.getElementById('container')
async function getPokemonById(){
    let promise = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${pokeCard}`);

    if(promise.ok == true){
        let pokemon = await promise.json();
        return pokemon;
    }else{
        // SI ERROR
    }
}
async function showPokemon(pokemon){
    console.log(pokemon);
    container.appendChild(pokemon)
}

getPokemonById().then(pokemon=>showPokemon(pokemon))
