const pokeCard = localStorage.getItem('pokemon');
const container = document.getElementById('container');
const randomCtndr = document.getElementById('randomCtndr')
async function getPokemonById(){
    let promise = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${pokeCard}`);

    if(promise.ok){
        let pokemon = await promise.json();
        return pokemon;
    }else{
        // SI ERROR
    }
}
async function getPokemons(){
    let promise = await fetch('https://pokebuildapi.fr/api/v1/pokemon/limit/150');
    if(promise.ok){
        let pokemons = await promise.json();
        return pokemons
    }else{

    }
}

async function showPokemon(pokemon){
    const nameCtn = document.createElement('h3');
    const imgPoke = document.createElement('img');
    const statsCard = document.createElement('div');
    const typesCtn = document.createElement('div');
    const hpCtn = document.createElement('p');
    const attackCtn = document.createElement('p');
    const defenseCtn = document.createElement('p');
    const speAttackCtn = document.createElement('p');
    const speDefCtn = document.createElement('p');
    const speedCtn = document.createElement('p');

    typesCtn.setAttribute('class','typesCtn');
    imgPoke.setAttribute('src',`${pokemon.image}`);
    statsCard.setAttribute('class','statsCard');

    const name = document.createTextNode(pokemon.name);
    const hp = document.createTextNode(`HP: ${pokemon.stats.HP}`);
    const attack = document.createTextNode(`Attaque: ${pokemon.stats.attack}`)
    const def = document.createTextNode(`Défense: ${pokemon.stats.defense}`)
    const speAtk = document.createTextNode(`Attaque spéciale: ${pokemon.stats.special_attack}`)
    const speDef = document.createTextNode(`Défense spéciale: ${pokemon.stats.special_defense}`)
    const speed = document.createTextNode(`Vitesse: ${pokemon.stats.speed}`)

    const types = pokemon.apiTypes;
    if(types.length==1){
        let typeImgCtn = document.createElement('img');
        let typeImg = types[0].image;
        typeImgCtn.setAttribute('src',`${typeImg}`);
        typesCtn.appendChild(typeImgCtn);
    }else if(types.length>1){
    
        let typeImgCtn1 = document.createElement('img');
        let typeImgCtn2 = document.createElement('img');
        let typeImg1 = types[0].image;
        let typeImg2 = types[1].image;
        typeImgCtn1.setAttribute('src',`${typeImg1}`);
        typeImgCtn2.setAttribute('src',`${typeImg2}`);
        typesCtn.appendChild(typeImgCtn1);
        typesCtn.appendChild(typeImgCtn2);
    }

    nameCtn.appendChild(name);
    hpCtn.appendChild(hp)
    attackCtn.appendChild(attack)
    defenseCtn.appendChild(def)
    speAttackCtn.appendChild(speAtk)
    speDefCtn.appendChild(speDef)
    speedCtn.appendChild(speed)

    statsCard.appendChild(typesCtn);
    statsCard.appendChild(hpCtn);
    statsCard.appendChild(attackCtn);
    statsCard.appendChild(defenseCtn);
    statsCard.appendChild(speAttackCtn);
    statsCard.appendChild(speDefCtn);
    statsCard.appendChild(speedCtn);

    container.appendChild(nameCtn);
    container.appendChild(imgPoke);
    container.appendChild(statsCard);
}

getPokemonById().then(pokemon=>showPokemon(pokemon));
randomCtndr.addEventListener('submit', getPokemons(pokemons))
console.log(pokemons);

