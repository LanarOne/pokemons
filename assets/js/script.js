async function getPokemons(){
    let promise = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/limit/251`);
    if(promise.ok){
        let pokemons = await promise.json()
        return pokemons
    }else{
        // si error
    }   
}
const container = document.getElementById('container')
async function showPokemons(pokemons){
    pokemons.forEach(pokemon => {
                let pokeCardCtn = document.createElement('article')
                let pokeNameCtn = document.createElement('h2')
                let pokeIDCtn = document.createElement('span')
                let pokeImg = document.createElement('img')
                let pokeDetailsCtn = document.createElement('div')
                let pokeTypesCtn = document.createElement('div')

                pokeImg.setAttribute('src', `${pokemon.image}`)
                pokeImg.setAttribute('class', 'pokeImg')
                pokeDetailsCtn.setAttribute('class', 'pokeDetails')
                pokeCardCtn.setAttribute('id', `${pokemon.name}`)
                pokeCardCtn.setAttribute('class','card')
                
                let pokeID = document.createTextNode(` #${pokemon.id}`)
                let pokeName = document.createTextNode(pokemon.name)
                let pokeTypes = pokemon.apiTypes
                let pokeEvo = pokemon.apiEvolutions
                
                if(pokeEvo.length>0){
                    let evolutionCtn = document.createElement('p')
                    if(pokeEvo.length>1){
                        pokeEvo.forEach(evo =>{
                            let evolution = document.createTextNode(`${evo.name}, `)
                            evolutionCtn.appendChild(evolution)
                            pokeDetailsCtn.appendChild(evolutionCtn)
                        })
                    }else{
                        let evolution = document.createTextNode(`évolue en: ${pokeEvo[0].name}`)
                        evolutionCtn.appendChild(evolution)
                        pokeDetailsCtn.appendChild(evolutionCtn)
                    }
                }else{
                    let evolutionCtn = document.createElement('p')
                    let evolution = document.createTextNode(`Evolution maximum`)
                    evolutionCtn.appendChild(evolution)
                    pokeDetailsCtn.appendChild(evolutionCtn)
                }

                console.log(pokeTypes);

                pokeTypes.forEach(type =>{
                    let pokeTypeImg = document.createElement('img')
                    let pokeTypeName = document.createElement('h3')
                    let typeImg = type.image
                    let typeName = document.createTextNode(type.name)

                    pokeTypeImg.setAttribute('src', `${typeImg}`)
                    pokeTypeImg.setAttribute('class', 'typeImg')
                    pokeTypeName.append(typeName, pokeTypeImg)
                    pokeTypesCtn.appendChild(pokeTypeName)

                })
                pokeNameCtn.appendChild(pokeName)
                pokeIDCtn.appendChild(pokeID)
                pokeNameCtn.appendChild(pokeIDCtn)
                pokeCardCtn.appendChild(pokeNameCtn)
                pokeCardCtn.appendChild(pokeImg)
                pokeDetailsCtn.appendChild(pokeTypesCtn)
                pokeCardCtn.appendChild(pokeDetailsCtn)

                container.appendChild(pokeCardCtn)
    });
}

getPokemons().then(pokemons => showPokemons(pokemons));
