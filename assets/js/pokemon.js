const pokeCard = localStorage.getItem('pokemon');
const randomCtndr = document.getElementById('randomCtndr')
const fightBtn = document.getElementById('fight')
import { randomItg } from "./randomFunction.js";
const randomPoke = `${randomItg(1, 898)}`
async function getPokemonById(){
    let promise = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${pokeCard}`);
    if(promise.ok){
        let pokemon = await promise.json();
        return pokemon;
    }else{
        // SI ERROR
    }
}

async function getRandomPokemonById(){
    let promise = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${randomPoke}`);

    if(promise.ok){
        let pokemonRdm = await promise.json();
        return pokemonRdm;
    }else{
        // SI ERROR
    }
}

async function showPokemon(pokemon){
console.log(pokemon);
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
    imgPoke.setAttribute('class','pokeImg2')
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
        typeImgCtn.setAttribute('class','imgCtn')
        typesCtn.appendChild(typeImgCtn);
    }else if(types.length>1){
    
        let typeImgCtn1 = document.createElement('img');
        let typeImgCtn2 = document.createElement('img');
        let typeImg1 = types[0].image;
        let typeImg2 = types[1].image;
        typeImgCtn1.setAttribute('src',`${typeImg1}`);
        typeImgCtn2.setAttribute('src',`${typeImg2}`);
        typeImgCtn1.setAttribute('class','imgCtn')
        typeImgCtn2.setAttribute('class','imgCtn')
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

    if(pokemon.id==pokeCard){
        const container = document.getElementById('container');
        imgPoke.setAttribute('id','monPkm')
        container.appendChild(nameCtn);
        container.appendChild(imgPoke);
        container.appendChild(statsCard);
    }else if(pokemon.id==randomPoke){
        const container = document.getElementById('randomCtn');
        imgPoke.setAttribute('id','randomPkm')
        container.appendChild(nameCtn);
        container.appendChild(imgPoke);
        container.appendChild(statsCard);
    }
}

getPokemonById().then(pokemon=>showPokemon(pokemon));
randomCtndr.addEventListener('click', (e)=>{
    e.preventDefault();
    const container = document.getElementById('randomCtn');
    container.innerHTML = '<h2>Contender<h2>';
    getRandomPokemonById().then(pokemonRdm=>showPokemon(pokemonRdm));
})

fightBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    const fightCtn = document.getElementById('arena');
    const monPkm = document.getElementById('monPkm');
    const randomPkm = document.getElementById('randomPkm');
})
