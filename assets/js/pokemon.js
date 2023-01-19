const pokeCard = localStorage.getItem('pokemon')
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

    const container = document.getElementById('container')
    const pokeCardContainer = document.createElement('section')
    const pokeStatsCtn = document.createElement('article') 
    const statCtn = document.createElement('p')
    const pokeStats = document.createTextNode(pokemon.stats)
    console.log(pokeStats);
    statCtn.appendChild(pokeStats)
    pokeStatsCtn.appendChild(statCtn)
    pokeCardContainer.appendChild(pokeStatsCtn)
    container.appendChild(pokeCardContainer)
    
    
    pokeCardContainer.setAttribute('class','.bigCard')
}

getPokemonById().then(pokemon=>showPokemon(pokemon))
