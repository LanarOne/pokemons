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
const pokeSelect = document.getElementById('pokeSelect')
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

                pokeTypes.forEach(type =>{
                    let pokeTypeImg = document.createElement('img')
                    let pokeTypeName = document.createElement('h3')
                    let typeImg = type.image
                    let typeName = document.createTextNode(type.name)

                    pokeTypeImg.setAttribute('src', `${typeImg}`)
                    pokeTypeImg.setAttribute('class', 'typeImg')
                    pokeTypeName.append(typeName, pokeTypeImg)
                    pokeTypesCtn.appendChild(pokeTypeName)
                    
                        if(pokeTypes.length==1){
                            if(pokeTypes[0].name === 'Feu'){
                                pokeCardCtn.classList.add('feu')
                            }else if(pokeTypes[0].name === 'Eau'){
                                pokeCardCtn.classList.add('eau')
                            }else if(pokeTypes[0].name === 'Poison'){
                                pokeCardCtn.classList.add('poison')
                            }else if(pokeTypes[0].name === 'Insecte'){
                                pokeCardCtn.classList.add('insecte')
                            }else if(pokeTypes[0].name === 'Sol'){
                                pokeCardCtn.classList.add('sol')
                            }else if(pokeTypes[0].name === 'Combat'){
                                pokeCardCtn.classList.add('combat')
                            }else if(pokeTypes[0].name === 'Fée'){
                                pokeCardCtn.classList.add('fee')
                            }else if(pokeTypes[0].name === 'Roche'){
                                pokeCardCtn.classList.add('roche')
                            }else if(pokeTypes[0].name === 'Glace'){
                                pokeCardCtn.classList.add('glace')
                            }else if(pokeTypes[0].name === 'Psy'){
                                pokeCardCtn.classList.add('psy')
                            }else if(pokeTypes[0].name === 'Électrik'){
                                pokeCardCtn.classList.add('electrik')
                            }else if(pokeTypes[0].name === 'Plante'){
                                pokeCardCtn.classList.add('plante')
                            }else if(pokeTypes[0].name === 'Vol'){
                                pokeCardCtn.classList.add('vol')
                            }else if(pokeTypes[0].name === 'Normal'){
                                pokeCardCtn.classList.add('normal')
                            }else if(pokeTypes[0].name === 'Insecte'){
                                pokeCardCtn.classList.add('insecte')
                            }else if(pokeTypes[0].name === 'Acier'){
                                pokeCardCtn.classList.add('acier')
                            }else if(pokeTypes[0].name === 'Spectre'){
                                pokeCardCtn.classList.add('spectre')
                            }else if(pokeTypes[0].name === 'Dragon'){
                                pokeCardCtn.classList.add('dragon')
                            }else if(pokeTypes[0].name === 'Ténèbres'){
                                pokeCardCtn.classList.add('tenebre')
                            }
                        }else{
                            let feuBGC = 'crimson'
                            let eauBGC = 'aqua'
                            let poisonBGC = 'mediumOrchid'
                            let insecteBGC = 'chartreuse'
                            let solBGC = 'maroon'
                            let combatBGC = 'orangered'
                            let feeBGC = 'floralWhite'
                            let rocheBGC = 'dimgray'
                            let glaceBGC = 'snow'
                            let psyBGC = 'mediumvioletred'
                            let electrikBGC = 'gold'
                            let planteBGC = 'limegreen'
                            let volBGC = 'azure'
                            let normalBGC = 'darkgray'
                            let acierBGC = 'gainsboro'
                            let spectreBGC = 'white'
                            let dragonBGC = 'firebrick'
                            let tenebreBGC = 'black'
                            let pokeType1 = pokeTypes[0].name
                            let pokeType2 = pokeTypes[1].name
                            if(pokeType1 === 'Poison' && pokeType2==='Plante'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${poisonBGC},${planteBGC})`)
                            }else if(pokeType1 === 'Poison' && pokeType2==='Eau'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${poisonBGC},${eauBGC})`)
                            }else if(pokeType1 === 'Poison' && pokeType2==='Insecte'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${poisonBGC},${insecteBGC})`)
                            }else if(pokeType1 === 'Poison' && pokeType2==='Sol'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${poisonBGC},${solBGC})`)
                            }else if(pokeType1 === 'Poison' && pokeType2==='Combat'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${poisonBGC},${combatBGC})`)
                            }else if(pokeType1 === 'Poison' && pokeType2==='Spectre'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${poisonBGC},${spectreBGC})`)
                            }
                            else if(pokeType1 === 'Vol' && pokeType2==='Eau'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${volBGC},${eauBGC})`)
                            }else if(pokeType1 === 'Vol' && pokeType2==='Insecte'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${volBGC},${insecteBGC})`)
                            }else if(pokeType1 === 'Vol' && pokeType2==='Sol'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${volBGC},${solBGC})`)
                            }else if(pokeType1 === 'Vol' && pokeType2==='Combat'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${volBGC},${combatBGC})`)
                            }else if(pokeType1 === 'Vol' && pokeType2==='Spectre'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${volBGC},${spectreBGC})`)
                            }else if(pokeType1 === 'Vol' && pokeType2==='Ténèbres'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${volBGC},${tenebreBGC})`)
                            }else if(pokeType1 === 'Vol' && pokeType2==='Feu'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${volBGC},${feuBGC})`)
                            }else if(pokeType1 === 'Vol' && pokeType2==='Glace'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${volBGC},${glaceBGC})`)
                            }else if(pokeType1 === 'Vol' && pokeType2==='Acier'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${volBGC},${acierBGC})`)
                            }else if(pokeType1 === 'Vol' && pokeType2==='Psy'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${volBGC},${psyBGC})`)
                            }else if(pokeType1 === 'Vol' && pokeType2==='Plante'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${volBGC},${planteBGC})`)
                            }else if(pokeType1 === 'Vol' && pokeType2==='Poison'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${volBGC},${poisonBGC})`)
                            }else if(pokeType1 === 'Vol' && pokeType2==='Roche'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${volBGC},${rocheBGC})`)
                            }else if(pokeType1 === 'Vol' && pokeType2==='Fée'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${volBGC},${feeBGC})`)
                            }else if(pokeType1 === 'Vol' && pokeType2==='Dragon'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${volBGC},${dragonBGC})`)
                            }else if(pokeType1 === 'Vol' && pokeType2==='Électrik'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${volBGC},${electrikBGC})`)
                            }
                            else if(pokeType1 === 'Normal' && pokeType2==='Eau'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${normalBGC},${eauBGC})`)
                            }else if(pokeType1 === 'Normal' && pokeType2==='Insecte'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${normalBGC},${insecteBGC})`)
                            }else if(pokeType1 === 'Normal' && pokeType2==='Sol'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${normalBGC},${solBGC})`)
                            }else if(pokeType1 === 'Normal' && pokeType2==='Combat'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${normalBGC},${combatBGC})`)
                            }else if(pokeType1 === 'Normal' && pokeType2==='Spectre'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${normalBGC},${spectreBGC})`)
                            }else if(pokeType1 === 'Normal' && pokeType2==='Ténèbres'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${normalBGC},${tenebreBGC})`)
                            }else if(pokeType1 === 'Normal' && pokeType2==='Feu'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${normalBGC},${feuBGC})`)
                            }else if(pokeType1 === 'Normal' && pokeType2==='Glace'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${normalBGC},${glaceBGC})`)
                            }else if(pokeType1 === 'Normal' && pokeType2==='Acier'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${normalBGC},${acierBGC})`)
                            }else if(pokeType1 === 'Normal' && pokeType2==='Psy'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${normalBGC},${psyBGC})`)
                            }else if(pokeType1 === 'Normal' && pokeType2==='Plante'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${normalBGC},${planteBGC})`)
                            }else if(pokeType1 === 'Normal' && pokeType2==='Poison'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${normalBGC},${poisonBGC})`)
                            }else if(pokeType1 === 'Normal' && pokeType2==='Roche'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${normalBGC},${rocheBGC})`)
                            }else if(pokeType1 === 'Normal' && pokeType2==='Fée'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${normalBGC},${feeBGC})`)
                            }else if(pokeType1 === 'Normal' && pokeType2==='Dragon'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${normalBGC},${dragonBGC})`)
                            }else if(pokeType1 === 'Normal' && pokeType2==='Électrik'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${normalBGC},${electrikBGC})`)
                            }else if(pokeType1 === 'Normal' && pokeType2==='Vol'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${normalBGC},${volBGC})`)
                            }
                            else if(pokeType1 === 'Insecte' && pokeType2==='Eau'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${insecteBGC},${eauBGC})`)
                            }else if(pokeType1 === 'Insecte' && pokeType2==='Sol'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${insecteBGC},${solBGC})`)
                            }else if(pokeType1 === 'Insecte' && pokeType2==='Combat'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${insecteBGC},${combatBGC})`)
                            }else if(pokeType1 === 'Insecte' && pokeType2==='Spectre'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${insecteBGC},${spectreBGC})`)
                            }else if(pokeType1 === 'Insecte' && pokeType2==='Ténèbres'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${insecteBGC},${tenebreBGC})`)
                            }else if(pokeType1 === 'Insecte' && pokeType2==='Feu'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${insecteBGC},${feuBGC})`)
                            }else if(pokeType1 === 'Insecte' && pokeType2==='Glace'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${insecteBGC},${glaceBGC})`)
                            }else if(pokeType1 === 'Insecte' && pokeType2==='Acier'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${insecteBGC},${acierBGC})`)
                            }else if(pokeType1 === 'Insecte' && pokeType2==='Psy'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${insecteBGC},${psyBGC})`)
                            }else if(pokeType1 === 'Insecte' && pokeType2==='Plante'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${insecteBGC},${planteBGC})`)
                            }else if(pokeType1 === 'Insecte' && pokeType2==='Poison'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${insecteBGC},${poisonBGC})`)
                            }else if(pokeType1 === 'Insecte' && pokeType2==='Roche'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${insecteBGC},${rocheBGC})`)
                            }else if(pokeType1 === 'Insecte' && pokeType2==='Fée'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${insecteBGC},${feeBGC})`)
                            }else if(pokeType1 === 'Insecte' && pokeType2==='Dragon'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${insecteBGC},${dragonBGC})`)
                            }else if(pokeType1 === 'Insecte' && pokeType2==='Électrik'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${insecteBGC},${electrikBGC})`)
                            }else if(pokeType1 === 'Insecte' && pokeType2==='Vol'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${insecteBGC},${volBGC})`)
                            }
                            else if(pokeType1 === 'Combat' && pokeType2==='Eau'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${combatBGC},${eauBGC})`)
                            }else if(pokeType1 === 'Combat' && pokeType2==='Sol'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${combatBGC},${solBGC})`)
                            }else if(pokeType1 === 'Combat' && pokeType2==='Spectre'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${combatBGC},${spectreBGC})`)
                            }else if(pokeType1 === 'Combat' && pokeType2==='Ténèbres'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${combatBGC},${tenebreBGC})`)
                            }else if(pokeType1 === 'Combat' && pokeType2==='Feu'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${combatBGC},${feuBGC})`)
                            }else if(pokeType1 === 'Combat' && pokeType2==='Glace'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${combatBGC},${glaceBGC})`)
                            }else if(pokeType1 === 'Combat' && pokeType2==='Acier'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${combatBGC},${acierBGC})`)
                            }else if(pokeType1 === 'Combat' && pokeType2==='Psy'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${combatBGC},${psyBGC})`)
                            }else if(pokeType1 === 'Combat' && pokeType2==='Plante'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${combatBGC},${planteBGC})`)
                            }else if(pokeType1 === 'Combat' && pokeType2==='Poison'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${combatBGC},${poisonBGC})`)
                            }else if(pokeType1 === 'Combat' && pokeType2==='Roche'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${combatBGC},${rocheBGC})`)
                            }else if(pokeType1 === 'Combat' && pokeType2==='Fée'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${combatBGC},${feeBGC})`)
                            }else if(pokeType1 === 'Combat' && pokeType2==='Dragon'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${combatBGC},${dragonBGC})`)
                            }else if(pokeType1 === 'Combat' && pokeType2==='Électrik'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${combatBGC},${electrikBGC})`)
                            }else if(pokeType1 === 'Combat' && pokeType2==='Vol'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${combatBGC},${volBGC})`)
                            }else if(pokeType1 === 'Combat' && pokeType2==='Insecte'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${combatBGC},${insecteBGC})`)
                            }
                            else if(pokeType1 === 'Sol' && pokeType2==='Eau'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${solBGC},${eauBGC})`)
                            }else if(pokeType1 === 'Sol' && pokeType2==='Combat'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${solBGC},${combatBGC})`)
                            }else if(pokeType1 === 'Sol' && pokeType2==='Spectre'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${solBGC},${spectreBGC})`)
                            }else if(pokeType1 === 'Sol' && pokeType2==='Ténèbres'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${solBGC},${tenebreBGC})`)
                            }else if(pokeType1 === 'Sol' && pokeType2==='Feu'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${solBGC},${feuBGC})`)
                            }else if(pokeType1 === 'Sol' && pokeType2==='Glace'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${solBGC},${glaceBGC})`)
                            }else if(pokeType1 === 'Sol' && pokeType2==='Acier'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${solBGC},${acierBGC})`)
                            }else if(pokeType1 === 'Sol' && pokeType2==='Psy'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${solBGC},${psyBGC})`)
                            }else if(pokeType1 === 'Sol' && pokeType2==='Plante'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${solBGC},${planteBGC})`)
                            }else if(pokeType1 === 'Sol' && pokeType2==='Poison'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${solBGC},${poisonBGC})`)
                            }else if(pokeType1 === 'Sol' && pokeType2==='Roche'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${solBGC},${rocheBGC})`)
                            }else if(pokeType1 === 'Sol' && pokeType2==='Fée'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${solBGC},${feeBGC})`)
                            }else if(pokeType1 === 'Sol' && pokeType2==='Dragon'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${solBGC},${dragonBGC})`)
                            }else if(pokeType1 === 'Sol' && pokeType2==='Électrik'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${solBGC},${electrikBGC})`)
                            }else if(pokeType1 === 'Sol' && pokeType2==='Vol'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${solBGC},${volBGC})`)
                            }else if(pokeType1 === 'Sol' && pokeType2==='Insecte'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${solBGC},${insecteBGC})`)
                            }
                            else if(pokeType1 === 'Eau' && pokeType2==='Sol'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${eauBGC},${solBGC})`)
                            }else if(pokeType1 === 'Eau' && pokeType2==='Combat'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${eauBGC},${combatBGC})`)
                            }else if(pokeType1 === 'Eau' && pokeType2==='Spectre'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${eauBGC},${spectreBGC})`)
                            }else if(pokeType1 === 'Eau' && pokeType2==='Ténèbres'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${eauBGC},${tenebreBGC})`)
                            }else if(pokeType1 === 'Eau' && pokeType2==='Feu'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${eauBGC},${feuBGC})`)
                            }else if(pokeType1 === 'Eau' && pokeType2==='Glace'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${eauBGC},${glaceBGC})`)
                            }else if(pokeType1 === 'Eau' && pokeType2==='Acier'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${eauBGC},${acierBGC})`)
                            }else if(pokeType1 === 'Eau' && pokeType2==='Psy'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${eauBGC},${psyBGC})`)
                            }else if(pokeType1 === 'Eau' && pokeType2==='Plante'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${eauBGC},${planteBGC})`)
                            }else if(pokeType1 === 'Eau' && pokeType2==='Poison'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${eauBGC},${poisonBGC})`)
                            }else if(pokeType1 === 'Eau' && pokeType2==='Roche'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${eauBGC},${rocheBGC})`)
                            }else if(pokeType1 === 'Eau' && pokeType2==='Fée'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${eauBGC},${feeBGC})`)
                            }else if(pokeType1 === 'Eau' && pokeType2==='Dragon'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${eauBGC},${dragonBGC})`)
                            }else if(pokeType1 === 'Eau' && pokeType2==='Électrik'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${eauBGC},${electrikBGC})`)
                            }else if(pokeType1 === 'Eau' && pokeType2==='Vol'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${eauBGC},${volBGC})`)
                            }else if(pokeType1 === 'Eau' && pokeType2==='Insecte'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${eauBGC},${insecteBGC})`)
                            }
                            else if(pokeType1 === 'Acier' && pokeType2==='Sol'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${acierBGC},${solBGC})`)
                            }else if(pokeType1 === 'Acier' && pokeType2==='Combat'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${acierBGC},${combatBGC})`)
                            }else if(pokeType1 === 'Acier' && pokeType2==='Spectre'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${acierBGC},${spectreBGC})`)
                            }else if(pokeType1 === 'Acier' && pokeType2==='Ténèbres'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${acierBGC},${tenebreBGC})`)
                            }else if(pokeType1 === 'Acier' && pokeType2==='Feu'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${acierBGC},${feuBGC})`)
                            }else if(pokeType1 === 'Acier' && pokeType2==='Glace'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${acierBGC},${glaceBGC})`)
                            }else if(pokeType1 === 'Acier' && pokeType2==='Eau'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${acierBGC},${eauBGC})`)
                            }else if(pokeType1 === 'Acier' && pokeType2==='Psy'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${acierBGC},${psyBGC})`)
                            }else if(pokeType1 === 'Acier' && pokeType2==='Plante'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${acierBGC},${planteBGC})`)
                            }else if(pokeType1 === 'Acier' && pokeType2==='Poison'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${acierBGC},${poisonBGC})`)
                            }else if(pokeType1 === 'Acier' && pokeType2==='Roche'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${acierBGC},${rocheBGC})`)
                            }else if(pokeType1 === 'Acier' && pokeType2==='Fée'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${acierBGC},${feeBGC})`)
                            }else if(pokeType1 === 'Acier' && pokeType2==='Dragon'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${acierBGC},${dragonBGC})`)
                            }else if(pokeType1 === 'Acier' && pokeType2==='Électrik'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${acierBGC},${electrikBGC})`)
                            }else if(pokeType1 === 'Acier' && pokeType2==='Vol'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${acierBGC},${volBGC})`)
                            }else if(pokeType1 === 'Acier' && pokeType2==='Insecte'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${acierBGC},${insecteBGC})`)
                            }
                            else if(pokeType1 === 'Plante' && pokeType2==='Sol'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${planteBGC},${solBGC})`)
                            }else if(pokeType1 === 'Plante' && pokeType2==='Combat'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${planteBGC},${combatBGC})`)
                            }else if(pokeType1 === 'Plante' && pokeType2==='Spectre'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${planteBGC},${spectreBGC})`)
                            }else if(pokeType1 === 'Plante' && pokeType2==='Ténèbres'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${planteBGC},${tenebreBGC})`)
                            }else if(pokeType1 === 'Plante' && pokeType2==='Feu'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${planteBGC},${feuBGC})`)
                            }else if(pokeType1 === 'Plante' && pokeType2==='Glace'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${planteBGC},${glaceBGC})`)
                            }else if(pokeType1 === 'Plante' && pokeType2==='Eau'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${planteBGC},${eauBGC})`)
                            }else if(pokeType1 === 'Plante' && pokeType2==='Psy'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${planteBGC},${psyBGC})`)
                            }else if(pokeType1 === 'Plante' && pokeType2==='Acier'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${planteBGC},${acierBGC})`)
                            }else if(pokeType1 === 'Plante' && pokeType2==='Poison'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${planteBGC},${poisonBGC})`)
                            }else if(pokeType1 === 'Plante' && pokeType2==='Roche'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${planteBGC},${rocheBGC})`)
                            }else if(pokeType1 === 'Plante' && pokeType2==='Fée'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${planteBGC},${feeBGC})`)
                            }else if(pokeType1 === 'Plante' && pokeType2==='Dragon'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${planteBGC},${dragonBGC})`)
                            }else if(pokeType1 === 'Plante' && pokeType2==='Électrik'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${planteBGC},${electrikBGC})`)
                            }else if(pokeType1 === 'Plante' && pokeType2==='Vol'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${planteBGC},${volBGC})`)
                            }else if(pokeType1 === 'Plante' && pokeType2==='Insecte'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${planteBGC},${insecteBGC})`)
                            }
                            else if(pokeType1 === 'Psy' && pokeType2==='Sol'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${psyBGC},${solBGC})`)
                            }else if(pokeType1 === 'Psy' && pokeType2==='Combat'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${psyBGC},${combatBGC})`)
                            }else if(pokeType1 === 'Psy' && pokeType2==='Spectre'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${psyBGC},${spectreBGC})`)
                            }else if(pokeType1 === 'Psy' && pokeType2==='Ténèbres'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${psyBGC},${tenebreBGC})`)
                            }else if(pokeType1 === 'Psy' && pokeType2==='Feu'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${psyBGC},${feuBGC})`)
                            }else if(pokeType1 === 'Psy' && pokeType2==='Glace'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${psyBGC},${glaceBGC})`)
                            }else if(pokeType1 === 'Psy' && pokeType2==='Eau'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${psyBGC},${eauBGC})`)
                            }else if(pokeType1 === 'Psy' && pokeType2==='Plante'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${psyBGC},${planteBGC})`)
                            }else if(pokeType1 === 'Psy' && pokeType2==='Acier'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${psyBGC},${acierBGC})`)
                            }else if(pokeType1 === 'Psy' && pokeType2==='Poison'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${psyBGC},${poisonBGC})`)
                            }else if(pokeType1 === 'Psy' && pokeType2==='Roche'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${psyBGC},${rocheBGC})`)
                            }else if(pokeType1 === 'Psy' && pokeType2==='Fée'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${psyBGC},${feeBGC})`)
                            }else if(pokeType1 === 'Psy' && pokeType2==='Dragon'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${psyBGC},${dragonBGC})`)
                            }else if(pokeType1 === 'Psy' && pokeType2==='Électrik'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${psyBGC},${electrikBGC})`)
                            }else if(pokeType1 === 'Psy' && pokeType2==='Vol'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${psyBGC},${volBGC})`)
                            }else if(pokeType1 === 'Psy' && pokeType2==='Insecte'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${psyBGC},${insecteBGC})`)
                            }
                            else if(pokeType1 === 'Roche' && pokeType2==='Sol'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${rocheBGC},${solBGC})`)
                            }else if(pokeType1 === 'Roche' && pokeType2==='Combat'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${rocheBGC},${combatBGC})`)
                            }else if(pokeType1 === 'Roche' && pokeType2==='Spectre'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${rocheBGC},${spectreBGC})`)
                            }else if(pokeType1 === 'Roche' && pokeType2==='Ténèbres'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${rocheBGC},${tenebreBGC})`)
                            }else if(pokeType1 === 'Roche' && pokeType2==='Feu'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${rocheBGC},${feuBGC})`)
                            }else if(pokeType1 === 'Roche' && pokeType2==='Glace'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${rocheBGC},${glaceBGC})`)
                            }else if(pokeType1 === 'Roche' && pokeType2==='Eau'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${rocheBGC},${eauBGC})`)
                            }else if(pokeType1 === 'Roche' && pokeType2==='Plante'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${rocheBGC},${planteBGC})`)
                            }else if(pokeType1 === 'Roche' && pokeType2==='Acier'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${rocheBGC},${acierBGC})`)
                            }else if(pokeType1 === 'Roche' && pokeType2==='Poison'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${rocheBGC},${poisonBGC})`)
                            }else if(pokeType1 === 'Roche' && pokeType2==='Psy'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${rocheBGC},${psyBGC})`)
                            }else if(pokeType1 === 'Roche' && pokeType2==='Fée'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${rocheBGC},${feeBGC})`)
                            }else if(pokeType1 === 'Roche' && pokeType2==='Dragon'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${rocheBGC},${dragonBGC})`)
                            }else if(pokeType1 === 'Roche' && pokeType2==='Électrik'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${rocheBGC},${electrikBGC})`)
                            }else if(pokeType1 === 'Roche' && pokeType2==='Vol'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${rocheBGC},${volBGC})`)
                            }else if(pokeType1 === 'Roche' && pokeType2==='Insecte'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${rocheBGC},${insecteBGC})`)
                            }
                            else if(pokeType1 === 'Glace' && pokeType2==='Ténèbres'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${glaceBGC},${tenebreBGC})`)
                            }else if(pokeType1 === 'Feu' && pokeType2==='Ténèbres'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${feuBGC},${tenebreBGC})`)
                            }
                        }
                    
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
const detailCards = document.getElementsByClassName('pokeDetails')

getPokemons().then(pokemons => showPokemons(pokemons));
