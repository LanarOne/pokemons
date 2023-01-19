async function getPokemons(){
    let promise = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/limit/898`);
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

                        let evoText = document.createTextNode('Évolue en: ')
                        evolutionCtn.appendChild(evoText)

                        pokeEvo.forEach(evo =>{
                            let evoLink = document.createElement('a')
                            let evolution = document.createTextNode(`${evo.name} `)

                            evoLink.setAttribute('href',`#${evo.name}`)

                            evoLink.appendChild(evolution)
                            evolutionCtn.appendChild(evoLink)
                            pokeDetailsCtn.appendChild(evolutionCtn)
                            
                        })
                    }else{
                        let evoText = document.createTextNode('Évolue en: ')
                        let evoLink = document.createElement('a')

                        evoLink.setAttribute('href',`#${pokeEvo[0].name}`)
                        evolutionCtn.appendChild(evoText)
                        let evolution = document.createTextNode(`${pokeEvo[0].name}`)
                        
                        evoLink.appendChild(evolution)
                        evolutionCtn.appendChild(evoLink)
                        pokeDetailsCtn.appendChild(evolutionCtn)
                    }
                }else{
                    let evolutionCtn = document.createElement('p')
                    let evolution = document.createTextNode(`Évolution maximum`)
                    evolutionCtn.appendChild(evolution)
                    pokeDetailsCtn.appendChild(evolutionCtn)
                }

                pokeTypes.forEach(type =>{
                    let pokeTypeImg = document.createElement('img')
                    let typeImg = type.image

                    pokeTypeImg.setAttribute('src', `${typeImg}`)
                    pokeTypeImg.setAttribute('class', 'typeImg')
                    pokeTypesCtn.appendChild(pokeTypeImg)
                    
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
                                pokeCardCtn.classList.add('poison')
                                pokeCardCtn.classList.add('plante')
                            }else if(pokeType1 === 'Poison' && pokeType2==='Eau'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${poisonBGC},${eauBGC})`)
                                pokeCardCtn.classList.add('poison')
                                pokeCardCtn.classList.add('eau')
                            }else if(pokeType1 === 'Poison' && pokeType2==='Insecte'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${poisonBGC},${insecteBGC})`)
                                pokeCardCtn.classList.add('poison')
                                pokeCardCtn.classList.add('insecte')
                            }else if(pokeType1 === 'Poison' && pokeType2==='Sol'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${poisonBGC},${solBGC})`)
                                pokeCardCtn.classList.add('poison')
                                pokeCardCtn.classList.add('sol')
                            }else if(pokeType1 === 'Poison' && pokeType2==='Combat'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${poisonBGC},${combatBGC})`)
                                pokeCardCtn.classList.add('poison')
                                pokeCardCtn.classList.add('combat')
                            }else if(pokeType1 === 'Poison' && pokeType2==='Spectre'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${poisonBGC},${spectreBGC})`)
                                pokeCardCtn.classList.add('poison')
                                pokeCardCtn.classList.add('spectre')
                            }else if(pokeType1 === 'Poison' && pokeType2==='Ténèbres'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${poisonBGC},${tenebreBGC})`)
                                pokeCardCtn.classList.add('poison')
                                pokeCardCtn.classList.add('tenebre')
                            }else if(pokeType1 === 'Poison' && pokeType2==='Roche'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${poisonBGC},${rocheBGC})`)
                                pokeCardCtn.classList.add('poison')
                                pokeCardCtn.classList.add('roche')
                            }else if(pokeType1 === 'Poison' && pokeType2==='Dragon'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${poisonBGC},${dragonBGC})`)
                                pokeCardCtn.classList.add('poison')
                                pokeCardCtn.classList.add('dragon')
                            }else if(pokeType1 === 'Poison' && pokeType2==='Électrik'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${poisonBGC},${electrikBGC})`)
                                pokeCardCtn.classList.add('poison')
                                pokeCardCtn.classList.add('electrik')
                            }
                            else if(pokeType1 === 'Vol' && pokeType2==='Eau'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${volBGC},${eauBGC})`)
                                pokeCardCtn.classList.add('vol')
                                pokeCardCtn.classList.add('eau')
                            }else if(pokeType1 === 'Vol' && pokeType2==='Insecte'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${volBGC},${insecteBGC})`)
                                pokeCardCtn.classList.add('vol')
                                pokeCardCtn.classList.add('insecte')
                            }else if(pokeType1 === 'Vol' && pokeType2==='Sol'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${volBGC},${solBGC})`)
                                pokeCardCtn.classList.add('vol')
                                pokeCardCtn.classList.add('sol')
                            }else if(pokeType1 === 'Vol' && pokeType2==='Combat'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${volBGC},${combatBGC})`)
                                pokeCardCtn.classList.add('vol')
                                pokeCardCtn.classList.add('combat')
                            }else if(pokeType1 === 'Vol' && pokeType2==='Spectre'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${volBGC},${spectreBGC})`)
                                pokeCardCtn.classList.add('vol')
                                pokeCardCtn.classList.add('spectre')
                            }else if(pokeType1 === 'Vol' && pokeType2==='Ténèbres'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${volBGC},${tenebreBGC})`)
                                pokeCardCtn.classList.add('vol')
                                pokeCardCtn.classList.add('tenebre')
                            }else if(pokeType1 === 'Vol' && pokeType2==='Feu'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${volBGC},${feuBGC})`)
                                pokeCardCtn.classList.add('vol')
                                pokeCardCtn.classList.add('feu')
                            }else if(pokeType1 === 'Vol' && pokeType2==='Glace'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${volBGC},${glaceBGC})`)
                                pokeCardCtn.classList.add('vol')
                                pokeCardCtn.classList.add('glace')
                            }else if(pokeType1 === 'Vol' && pokeType2==='Acier'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${volBGC},${acierBGC})`)
                                pokeCardCtn.classList.add('vol')
                                pokeCardCtn.classList.add('acier')
                            }else if(pokeType1 === 'Vol' && pokeType2==='Psy'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${volBGC},${psyBGC})`)
                                pokeCardCtn.classList.add('vol')
                                pokeCardCtn.classList.add('psy')
                            }else if(pokeType1 === 'Vol' && pokeType2==='Plante'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${volBGC},${planteBGC})`)
                                pokeCardCtn.classList.add('vol')
                                pokeCardCtn.classList.add('plante')
                            }else if(pokeType1 === 'Vol' && pokeType2==='Poison'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${volBGC},${poisonBGC})`)
                                pokeCardCtn.classList.add('vol')
                                pokeCardCtn.classList.add('poison')
                            }else if(pokeType1 === 'Vol' && pokeType2==='Roche'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${volBGC},${rocheBGC})`)
                                pokeCardCtn.classList.add('vol')
                                pokeCardCtn.classList.add('roche')
                            }else if(pokeType1 === 'Vol' && pokeType2==='Fée'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${volBGC},${feeBGC})`)
                                pokeCardCtn.classList.add('vol')
                                pokeCardCtn.classList.add('fee')
                            }else if(pokeType1 === 'Vol' && pokeType2==='Dragon'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${volBGC},${dragonBGC})`)
                                pokeCardCtn.classList.add('vol')
                                pokeCardCtn.classList.add('dragon')
                            }else if(pokeType1 === 'Vol' && pokeType2==='Électrik'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${volBGC},${electrikBGC})`)
                                pokeCardCtn.classList.add('vol')
                                pokeCardCtn.classList.add('electrik')
                            }
                            else if(pokeType1 === 'Normal' && pokeType2==='Eau'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${normalBGC},${eauBGC})`)
                                pokeCardCtn.classList.add('normal')
                                pokeCardCtn.classList.add('eau')
                            }else if(pokeType1 === 'Normal' && pokeType2==='Insecte'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${normalBGC},${insecteBGC})`)
                                pokeCardCtn.classList.add('normal')
                                pokeCardCtn.classList.add('insecte')
                            }else if(pokeType1 === 'Normal' && pokeType2==='Sol'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${normalBGC},${solBGC})`)
                                pokeCardCtn.classList.add('normal')
                                pokeCardCtn.classList.add('sol')
                            }else if(pokeType1 === 'Normal' && pokeType2==='Combat'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${normalBGC},${combatBGC})`)
                                pokeCardCtn.classList.add('normal')
                                pokeCardCtn.classList.add('combat')
                            }else if(pokeType1 === 'Normal' && pokeType2==='Spectre'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${normalBGC},${spectreBGC})`)
                                pokeCardCtn.classList.add('normal')
                                pokeCardCtn.classList.add('spectre')
                            }else if(pokeType1 === 'Normal' && pokeType2==='Ténèbres'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${normalBGC},${tenebreBGC})`)
                                pokeCardCtn.classList.add('normal')
                                pokeCardCtn.classList.add('tenebre')
                            }else if(pokeType1 === 'Normal' && pokeType2==='Feu'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${normalBGC},${feuBGC})`)
                                pokeCardCtn.classList.add('normal')
                                pokeCardCtn.classList.add('feu')
                            }else if(pokeType1 === 'Normal' && pokeType2==='Glace'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${normalBGC},${glaceBGC})`)
                                pokeCardCtn.classList.add('normal')
                                pokeCardCtn.classList.add('glace')
                            }else if(pokeType1 === 'Normal' && pokeType2==='Acier'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${normalBGC},${acierBGC})`)
                                pokeCardCtn.classList.add('normal')
                                pokeCardCtn.classList.add('acier')
                            }else if(pokeType1 === 'Normal' && pokeType2==='Psy'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${normalBGC},${psyBGC})`)
                                pokeCardCtn.classList.add('normal')
                                pokeCardCtn.classList.add('psy')
                            }else if(pokeType1 === 'Normal' && pokeType2==='Plante'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${normalBGC},${planteBGC})`)
                                pokeCardCtn.classList.add('normal')
                                pokeCardCtn.classList.add('plante')
                            }else if(pokeType1 === 'Normal' && pokeType2==='Poison'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${normalBGC},${poisonBGC})`)
                                pokeCardCtn.classList.add('normal')
                                pokeCardCtn.classList.add('poison')
                            }else if(pokeType1 === 'Normal' && pokeType2==='Roche'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${normalBGC},${rocheBGC})`)
                                pokeCardCtn.classList.add('normal')
                                pokeCardCtn.classList.add('rohe')
                            }else if(pokeType1 === 'Normal' && pokeType2==='Fée'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${normalBGC},${feeBGC})`)
                                pokeCardCtn.classList.add('normal')
                                pokeCardCtn.classList.add('fee')
                            }else if(pokeType1 === 'Normal' && pokeType2==='Dragon'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${normalBGC},${dragonBGC})`)
                                pokeCardCtn.classList.add('normal')
                                pokeCardCtn.classList.add('dragon')
                            }else if(pokeType1 === 'Normal' && pokeType2==='Électrik'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${normalBGC},${electrikBGC})`)
                                pokeCardCtn.classList.add('normal')
                                pokeCardCtn.classList.add('electrik')
                            }else if(pokeType1 === 'Normal' && pokeType2==='Vol'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${normalBGC},${volBGC})`)
                                pokeCardCtn.classList.add('normal')
                                pokeCardCtn.classList.add('vol')
                            }
                            else if(pokeType1 === 'Insecte' && pokeType2==='Eau'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${insecteBGC},${eauBGC})`)
                                pokeCardCtn.classList.add('insecte')
                                pokeCardCtn.classList.add('eau')
                            }else if(pokeType1 === 'Insecte' && pokeType2==='Sol'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${insecteBGC},${solBGC})`)
                                pokeCardCtn.classList.add('insecte')
                                pokeCardCtn.classList.add('sol')
                            }else if(pokeType1 === 'Insecte' && pokeType2==='Combat'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${insecteBGC},${combatBGC})`)
                                pokeCardCtn.classList.add('insecte')
                                pokeCardCtn.classList.add('combat')
                            }else if(pokeType1 === 'Insecte' && pokeType2==='Spectre'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${insecteBGC},${spectreBGC})`)
                                pokeCardCtn.classList.add('insecte')
                                pokeCardCtn.classList.add('spectre')
                            }else if(pokeType1 === 'Insecte' && pokeType2==='Ténèbres'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${insecteBGC},${tenebreBGC})`)
                                pokeCardCtn.classList.add('insecte')
                                pokeCardCtn.classList.add('tenebre')
                            }else if(pokeType1 === 'Insecte' && pokeType2==='Feu'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${insecteBGC},${feuBGC})`)
                                pokeCardCtn.classList.add('insecte')
                                pokeCardCtn.classList.add('feu')
                            }else if(pokeType1 === 'Insecte' && pokeType2==='Glace'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${insecteBGC},${glaceBGC})`)
                                pokeCardCtn.classList.add('insecte')
                                pokeCardCtn.classList.add('glace')
                            }else if(pokeType1 === 'Insecte' && pokeType2==='Acier'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${insecteBGC},${acierBGC})`)
                                pokeCardCtn.classList.add('insecte')
                                pokeCardCtn.classList.add('acier')
                            }else if(pokeType1 === 'Insecte' && pokeType2==='Psy'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${insecteBGC},${psyBGC})`)
                                pokeCardCtn.classList.add('insecte')
                                pokeCardCtn.classList.add('psy')
                            }else if(pokeType1 === 'Insecte' && pokeType2==='Plante'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${insecteBGC},${planteBGC})`)
                                pokeCardCtn.classList.add('insecte')
                                pokeCardCtn.classList.add('plante')
                            }else if(pokeType1 === 'Insecte' && pokeType2==='Poison'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${insecteBGC},${poisonBGC})`)
                                pokeCardCtn.classList.add('insecte')
                                pokeCardCtn.classList.add('poison')
                            }else if(pokeType1 === 'Insecte' && pokeType2==='Roche'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${insecteBGC},${rocheBGC})`)
                                pokeCardCtn.classList.add('insecte')
                                pokeCardCtn.classList.add('roche')
                            }else if(pokeType1 === 'Insecte' && pokeType2==='Fée'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${insecteBGC},${feeBGC})`)
                                pokeCardCtn.classList.add('insecte')
                                pokeCardCtn.classList.add('fee')
                            }else if(pokeType1 === 'Insecte' && pokeType2==='Dragon'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${insecteBGC},${dragonBGC})`)
                                pokeCardCtn.classList.add('insecte')
                                pokeCardCtn.classList.add('dragon')
                            }else if(pokeType1 === 'Insecte' && pokeType2==='Électrik'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${insecteBGC},${electrikBGC})`)
                                pokeCardCtn.classList.add('insecte')
                                pokeCardCtn.classList.add('electrik')
                            }else if(pokeType1 === 'Insecte' && pokeType2==='Vol'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${insecteBGC},${volBGC})`)
                                pokeCardCtn.classList.add('insecte')
                                pokeCardCtn.classList.add('vol')
                            }
                            else if(pokeType1 === 'Combat' && pokeType2==='Eau'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${combatBGC},${eauBGC})`)
                                pokeCardCtn.classList.add('combat')
                                pokeCardCtn.classList.add('eau')
                            }else if(pokeType1 === 'Combat' && pokeType2==='Sol'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${combatBGC},${solBGC})`)
                                pokeCardCtn.classList.add('combat')
                                pokeCardCtn.classList.add('sol')
                            }else if(pokeType1 === 'Combat' && pokeType2==='Spectre'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${combatBGC},${spectreBGC})`)
                                pokeCardCtn.classList.add('combat')
                                pokeCardCtn.classList.add('spectre')
                            }else if(pokeType1 === 'Combat' && pokeType2==='Ténèbres'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${combatBGC},${tenebreBGC})`)
                                pokeCardCtn.classList.add('combat')
                                pokeCardCtn.classList.add('tenebre')
                            }else if(pokeType1 === 'Combat' && pokeType2==='Feu'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${combatBGC},${feuBGC})`)
                                pokeCardCtn.classList.add('combat')
                                pokeCardCtn.classList.add('feu')
                            }else if(pokeType1 === 'Combat' && pokeType2==='Glace'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${combatBGC},${glaceBGC})`)
                                pokeCardCtn.classList.add('combat')
                                pokeCardCtn.classList.add('glace')
                            }else if(pokeType1 === 'Combat' && pokeType2==='Acier'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${combatBGC},${acierBGC})`)
                                pokeCardCtn.classList.add('combat')
                                pokeCardCtn.classList.add('acier')
                            }else if(pokeType1 === 'Combat' && pokeType2==='Psy'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${combatBGC},${psyBGC})`)
                                pokeCardCtn.classList.add('combat')
                                pokeCardCtn.classList.add('psy')
                            }else if(pokeType1 === 'Combat' && pokeType2==='Plante'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${combatBGC},${planteBGC})`)
                                pokeCardCtn.classList.add('combat')
                                pokeCardCtn.classList.add('plante')
                            }else if(pokeType1 === 'Combat' && pokeType2==='Poison'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${combatBGC},${poisonBGC})`)
                                pokeCardCtn.classList.add('combat')
                                pokeCardCtn.classList.add('poison')
                            }else if(pokeType1 === 'Combat' && pokeType2==='Roche'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${combatBGC},${rocheBGC})`)
                                pokeCardCtn.classList.add('combat')
                                pokeCardCtn.classList.add('roche')
                            }else if(pokeType1 === 'Combat' && pokeType2==='Fée'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${combatBGC},${feeBGC})`)
                                pokeCardCtn.classList.add('combat')
                                pokeCardCtn.classList.add('fee')
                            }else if(pokeType1 === 'Combat' && pokeType2==='Dragon'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${combatBGC},${dragonBGC})`)
                                pokeCardCtn.classList.add('combat')
                                pokeCardCtn.classList.add('dragon')
                            }else if(pokeType1 === 'Combat' && pokeType2==='Électrik'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${combatBGC},${electrikBGC})`)
                                pokeCardCtn.classList.add('combat')
                                pokeCardCtn.classList.add('electrik')
                            }else if(pokeType1 === 'Combat' && pokeType2==='Vol'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${combatBGC},${volBGC})`)
                                pokeCardCtn.classList.add('combat')
                                pokeCardCtn.classList.add('vol')
                            }else if(pokeType1 === 'Combat' && pokeType2==='Insecte'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${combatBGC},${insecteBGC})`)
                                pokeCardCtn.classList.add('combat')
                                pokeCardCtn.classList.add('insecte')
                            }
                            else if(pokeType1 === 'Sol' && pokeType2==='Eau'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${solBGC},${eauBGC})`)
                                pokeCardCtn.classList.add('sol')
                                pokeCardCtn.classList.add('eau')
                            }else if(pokeType1 === 'Sol' && pokeType2==='Combat'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${solBGC},${combatBGC})`)
                                pokeCardCtn.classList.add('sol')
                                pokeCardCtn.classList.add('combat')
                            }else if(pokeType1 === 'Sol' && pokeType2==='Spectre'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${solBGC},${spectreBGC})`)
                                pokeCardCtn.classList.add('sol')
                                pokeCardCtn.classList.add('spectre')
                            }else if(pokeType1 === 'Sol' && pokeType2==='Ténèbres'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${solBGC},${tenebreBGC})`)
                                pokeCardCtn.classList.add('sol')
                                pokeCardCtn.classList.add('tenebre')
                            }else if(pokeType1 === 'Sol' && pokeType2==='Feu'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${solBGC},${feuBGC})`)
                                pokeCardCtn.classList.add('sol')
                                pokeCardCtn.classList.add('feu')
                            }else if(pokeType1 === 'Sol' && pokeType2==='Glace'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${solBGC},${glaceBGC})`)
                                pokeCardCtn.classList.add('sol')
                                pokeCardCtn.classList.add('glace')
                            }else if(pokeType1 === 'Sol' && pokeType2==='Acier'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${solBGC},${acierBGC})`)
                                pokeCardCtn.classList.add('sol')
                                pokeCardCtn.classList.add('acier')
                            }else if(pokeType1 === 'Sol' && pokeType2==='Psy'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${solBGC},${psyBGC})`)
                                pokeCardCtn.classList.add('sol')
                                pokeCardCtn.classList.add('psy')
                            }else if(pokeType1 === 'Sol' && pokeType2==='Plante'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${solBGC},${planteBGC})`)
                                pokeCardCtn.classList.add('sol')
                                pokeCardCtn.classList.add('plante')
                            }else if(pokeType1 === 'Sol' && pokeType2==='Poison'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${solBGC},${poisonBGC})`)
                                pokeCardCtn.classList.add('sol')
                                pokeCardCtn.classList.add('poison')
                            }else if(pokeType1 === 'Sol' && pokeType2==='Roche'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${solBGC},${rocheBGC})`)
                                pokeCardCtn.classList.add('sol')
                                pokeCardCtn.classList.add('roche')
                            }else if(pokeType1 === 'Sol' && pokeType2==='Fée'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${solBGC},${feeBGC})`)
                                pokeCardCtn.classList.add('sol')
                                pokeCardCtn.classList.add('fee')
                            }else if(pokeType1 === 'Sol' && pokeType2==='Dragon'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${solBGC},${dragonBGC})`)
                                pokeCardCtn.classList.add('sol')
                                pokeCardCtn.classList.add('dragon')
                            }else if(pokeType1 === 'Sol' && pokeType2==='Électrik'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${solBGC},${electrikBGC})`)
                                pokeCardCtn.classList.add('sol')
                                pokeCardCtn.classList.add('electrik')
                            }else if(pokeType1 === 'Sol' && pokeType2==='Vol'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${solBGC},${volBGC})`)
                                pokeCardCtn.classList.add('sol')
                                pokeCardCtn.classList.add('eau')
                            }else if(pokeType1 === 'Sol' && pokeType2==='Insecte'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${solBGC},${insecteBGC})`)
                                pokeCardCtn.classList.add('sol')
                                pokeCardCtn.classList.add('insecte')
                            }
                            else if(pokeType1 === 'Eau' && pokeType2==='Sol'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${eauBGC},${solBGC})`)
                                pokeCardCtn.classList.add('eau')
                                pokeCardCtn.classList.add('sol')
                            }else if(pokeType1 === 'Eau' && pokeType2==='Combat'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${eauBGC},${combatBGC})`)
                                pokeCardCtn.classList.add('eau')
                                pokeCardCtn.classList.add('combat')
                            }else if(pokeType1 === 'Eau' && pokeType2==='Spectre'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${eauBGC},${spectreBGC})`)
                                pokeCardCtn.classList.add('eau')
                                pokeCardCtn.classList.add('spectre')
                            }else if(pokeType1 === 'Eau' && pokeType2==='Ténèbres'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${eauBGC},${tenebreBGC})`)
                            }else if(pokeType1 === 'Eau' && pokeType2==='Feu'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${eauBGC},${feuBGC})`)
                                pokeCardCtn.classList.add('eau')
                                pokeCardCtn.classList.add('feu')
                            }else if(pokeType1 === 'Eau' && pokeType2==='Glace'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${eauBGC},${glaceBGC})`)
                                pokeCardCtn.classList.add('eau')
                                pokeCardCtn.classList.add('glace')
                            }else if(pokeType1 === 'Eau' && pokeType2==='Acier'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${eauBGC},${acierBGC})`)
                                pokeCardCtn.classList.add('eau')
                                pokeCardCtn.classList.add('acier')
                            }else if(pokeType1 === 'Eau' && pokeType2==='Psy'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${eauBGC},${psyBGC})`)
                                pokeCardCtn.classList.add('eau')
                                pokeCardCtn.classList.add('psy')
                            }else if(pokeType1 === 'Eau' && pokeType2==='Plante'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${eauBGC},${planteBGC})`)
                                pokeCardCtn.classList.add('eau')
                                pokeCardCtn.classList.add('plante')
                            }else if(pokeType1 === 'Eau' && pokeType2==='Poison'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${eauBGC},${poisonBGC})`)
                                pokeCardCtn.classList.add('eau')
                                pokeCardCtn.classList.add('poison')
                            }else if(pokeType1 === 'Eau' && pokeType2==='Roche'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${eauBGC},${rocheBGC})`)
                                pokeCardCtn.classList.add('eau')
                                pokeCardCtn.classList.add('roche')
                            }else if(pokeType1 === 'Eau' && pokeType2==='Fée'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${eauBGC},${feeBGC})`)
                                pokeCardCtn.classList.add('eau')
                                pokeCardCtn.classList.add('fee')
                            }else if(pokeType1 === 'Eau' && pokeType2==='Dragon'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${eauBGC},${dragonBGC})`)
                                pokeCardCtn.classList.add('eau')
                                pokeCardCtn.classList.add('dragon')
                            }else if(pokeType1 === 'Eau' && pokeType2==='Électrik'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${eauBGC},${electrikBGC})`)
                                pokeCardCtn.classList.add('eau')
                                pokeCardCtn.classList.add('electrik')
                            }else if(pokeType1 === 'Eau' && pokeType2==='Vol'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${eauBGC},${volBGC})`)
                                pokeCardCtn.classList.add('eau')
                                pokeCardCtn.classList.add('vol')
                            }else if(pokeType1 === 'Eau' && pokeType2==='Insecte'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${eauBGC},${insecteBGC})`)
                                pokeCardCtn.classList.add('eau')
                                pokeCardCtn.classList.add('insecte')
                            }
                            else if(pokeType1 === 'Acier' && pokeType2==='Sol'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${acierBGC},${solBGC})`)
                                pokeCardCtn.classList.add('acier')
                                pokeCardCtn.classList.add('sol')
                            }else if(pokeType1 === 'Acier' && pokeType2==='Combat'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${acierBGC},${combatBGC})`)
                                pokeCardCtn.classList.add('acier')
                                pokeCardCtn.classList.add('combat')
                            }else if(pokeType1 === 'Acier' && pokeType2==='Spectre'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${acierBGC},${spectreBGC})`)
                                pokeCardCtn.classList.add('acier')
                                pokeCardCtn.classList.add('spectre')
                            }else if(pokeType1 === 'Acier' && pokeType2==='Ténèbres'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${acierBGC},${tenebreBGC})`)
                                pokeCardCtn.classList.add('acier')
                                pokeCardCtn.classList.add('tenebre')
                            }else if(pokeType1 === 'Acier' && pokeType2==='Feu'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${acierBGC},${feuBGC})`)
                                pokeCardCtn.classList.add('acier')
                                pokeCardCtn.classList.add('feu')
                            }else if(pokeType1 === 'Acier' && pokeType2==='Glace'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${acierBGC},${glaceBGC})`)
                                pokeCardCtn.classList.add('acier')
                                pokeCardCtn.classList.add('glace')
                            }else if(pokeType1 === 'Acier' && pokeType2==='Eau'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${acierBGC},${eauBGC})`)
                                pokeCardCtn.classList.add('acier')
                                pokeCardCtn.classList.add('eau')
                            }else if(pokeType1 === 'Acier' && pokeType2==='Psy'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${acierBGC},${psyBGC})`)
                                pokeCardCtn.classList.add('acier')
                                pokeCardCtn.classList.add('psy')
                            }else if(pokeType1 === 'Acier' && pokeType2==='Plante'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${acierBGC},${planteBGC})`)
                                pokeCardCtn.classList.add('acier')
                                pokeCardCtn.classList.add('plante')
                            }else if(pokeType1 === 'Acier' && pokeType2==='Poison'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${acierBGC},${poisonBGC})`)
                                pokeCardCtn.classList.add('acier')
                                pokeCardCtn.classList.add('poison')
                            }else if(pokeType1 === 'Acier' && pokeType2==='Roche'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${acierBGC},${rocheBGC})`)
                                pokeCardCtn.classList.add('acier')
                                pokeCardCtn.classList.add('roche')
                            }else if(pokeType1 === 'Acier' && pokeType2==='Fée'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${acierBGC},${feeBGC})`)
                                pokeCardCtn.classList.add('acier')
                                pokeCardCtn.classList.add('fee')
                            }else if(pokeType1 === 'Acier' && pokeType2==='Dragon'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${acierBGC},${dragonBGC})`)
                                pokeCardCtn.classList.add('acier')
                                pokeCardCtn.classList.add('dragon')
                            }else if(pokeType1 === 'Acier' && pokeType2==='Électrik'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${acierBGC},${electrikBGC})`)
                                pokeCardCtn.classList.add('acier')
                                pokeCardCtn.classList.add('electrik')
                            }else if(pokeType1 === 'Acier' && pokeType2==='Vol'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${acierBGC},${volBGC})`)
                                pokeCardCtn.classList.add('acier')
                                pokeCardCtn.classList.add('vol')
                            }else if(pokeType1 === 'Acier' && pokeType2==='Insecte'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${acierBGC},${insecteBGC})`)
                                pokeCardCtn.classList.add('acier')
                                pokeCardCtn.classList.add('insecte')
                            }
                            else if(pokeType1 === 'Plante' && pokeType2==='Sol'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${planteBGC},${solBGC})`)
                                pokeCardCtn.classList.add('plante')
                                pokeCardCtn.classList.add('sol')
                            }else if(pokeType1 === 'Plante' && pokeType2==='Combat'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${planteBGC},${combatBGC})`)
                                pokeCardCtn.classList.add('plante')
                                pokeCardCtn.classList.add('combat')
                            }else if(pokeType1 === 'Plante' && pokeType2==='Spectre'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${planteBGC},${spectreBGC})`)
                                pokeCardCtn.classList.add('plante')
                                pokeCardCtn.classList.add('spectre')
                            }else if(pokeType1 === 'Plante' && pokeType2==='Ténèbres'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${planteBGC},${tenebreBGC})`)
                                pokeCardCtn.classList.add('plante')
                                pokeCardCtn.classList.add('tenebre')
                            }else if(pokeType1 === 'Plante' && pokeType2==='Feu'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${planteBGC},${feuBGC})`)
                                pokeCardCtn.classList.add('plante')
                                pokeCardCtn.classList.add('feu')
                            }else if(pokeType1 === 'Plante' && pokeType2==='Glace'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${planteBGC},${glaceBGC})`)
                                pokeCardCtn.classList.add('plante')
                                pokeCardCtn.classList.add('glace')
                            }else if(pokeType1 === 'Plante' && pokeType2==='Eau'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${planteBGC},${eauBGC})`)
                                pokeCardCtn.classList.add('plante')
                                pokeCardCtn.classList.add('eau')
                            }else if(pokeType1 === 'Plante' && pokeType2==='Psy'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${planteBGC},${psyBGC})`)
                                pokeCardCtn.classList.add('plante')
                                pokeCardCtn.classList.add('psy')
                            }else if(pokeType1 === 'Plante' && pokeType2==='Acier'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${planteBGC},${acierBGC})`)
                                pokeCardCtn.classList.add('plante')
                                pokeCardCtn.classList.add('acier')
                            }else if(pokeType1 === 'Plante' && pokeType2==='Poison'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${planteBGC},${poisonBGC})`)
                                pokeCardCtn.classList.add('plante')
                                pokeCardCtn.classList.add('poison')
                            }else if(pokeType1 === 'Plante' && pokeType2==='Roche'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${planteBGC},${rocheBGC})`)
                                pokeCardCtn.classList.add('plante')
                                pokeCardCtn.classList.add('roche')
                            }else if(pokeType1 === 'Plante' && pokeType2==='Fée'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${planteBGC},${feeBGC})`)
                                pokeCardCtn.classList.add('plante')
                                pokeCardCtn.classList.add('fee')
                            }else if(pokeType1 === 'Plante' && pokeType2==='Dragon'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${planteBGC},${dragonBGC})`)
                                pokeCardCtn.classList.add('plante')
                                pokeCardCtn.classList.add('dragon')
                            }else if(pokeType1 === 'Plante' && pokeType2==='Électrik'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${planteBGC},${electrikBGC})`)
                                pokeCardCtn.classList.add('plante')
                                pokeCardCtn.classList.add('electrik')
                            }else if(pokeType1 === 'Plante' && pokeType2==='Vol'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${planteBGC},${volBGC})`)
                                pokeCardCtn.classList.add('plante')
                                pokeCardCtn.classList.add('vol')
                            }else if(pokeType1 === 'Plante' && pokeType2==='Insecte'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${planteBGC},${insecteBGC})`)
                                pokeCardCtn.classList.add('plante')
                                pokeCardCtn.classList.add('insecte')
                            }
                            else if(pokeType1 === 'Psy' && pokeType2==='Sol'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${psyBGC},${solBGC})`)
                                pokeCardCtn.classList.add('psy')
                                pokeCardCtn.classList.add('sol')
                            }else if(pokeType1 === 'Psy' && pokeType2==='Combat'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${psyBGC},${combatBGC})`)
                                pokeCardCtn.classList.add('psy')
                                pokeCardCtn.classList.add('combat')
                            }else if(pokeType1 === 'Psy' && pokeType2==='Spectre'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${psyBGC},${spectreBGC})`)
                                pokeCardCtn.classList.add('psy')
                                pokeCardCtn.classList.add('spectre')
                            }else if(pokeType1 === 'Psy' && pokeType2==='Ténèbres'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${psyBGC},${tenebreBGC})`)
                                pokeCardCtn.classList.add('psy')
                                pokeCardCtn.classList.add('tenebre')
                            }else if(pokeType1 === 'Psy' && pokeType2==='Feu'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${psyBGC},${feuBGC})`)
                                pokeCardCtn.classList.add('psy')
                                pokeCardCtn.classList.add('feu')
                            }else if(pokeType1 === 'Psy' && pokeType2==='Glace'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${psyBGC},${glaceBGC})`)
                                pokeCardCtn.classList.add('psy')
                                pokeCardCtn.classList.add('glace')
                            }else if(pokeType1 === 'Psy' && pokeType2==='Eau'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${psyBGC},${eauBGC})`)
                                pokeCardCtn.classList.add('psy')
                                pokeCardCtn.classList.add('eau')
                            }else if(pokeType1 === 'Psy' && pokeType2==='Plante'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${psyBGC},${planteBGC})`)
                                pokeCardCtn.classList.add('psy')
                                pokeCardCtn.classList.add('plante')
                            }else if(pokeType1 === 'Psy' && pokeType2==='Acier'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${psyBGC},${acierBGC})`)
                                pokeCardCtn.classList.add('psy')
                                pokeCardCtn.classList.add('acier')
                            }else if(pokeType1 === 'Psy' && pokeType2==='Poison'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${psyBGC},${poisonBGC})`)
                                pokeCardCtn.classList.add('psy')
                                pokeCardCtn.classList.add('poison')
                            }else if(pokeType1 === 'Psy' && pokeType2==='Roche'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${psyBGC},${rocheBGC})`)
                                pokeCardCtn.classList.add('psy')
                                pokeCardCtn.classList.add('roche')
                            }else if(pokeType1 === 'Psy' && pokeType2==='Fée'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${psyBGC},${feeBGC})`)
                                pokeCardCtn.classList.add('psy')
                                pokeCardCtn.classList.add('fee')
                            }else if(pokeType1 === 'Psy' && pokeType2==='Dragon'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${psyBGC},${dragonBGC})`)
                                pokeCardCtn.classList.add('psy')
                                pokeCardCtn.classList.add('dragon')
                            }else if(pokeType1 === 'Psy' && pokeType2==='Électrik'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${psyBGC},${electrikBGC})`)
                                pokeCardCtn.classList.add('psy')
                                pokeCardCtn.classList.add('electrik')
                            }else if(pokeType1 === 'Psy' && pokeType2==='Vol'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${psyBGC},${volBGC})`)
                                pokeCardCtn.classList.add('psy')
                                pokeCardCtn.classList.add('vol')
                            }else if(pokeType1 === 'Psy' && pokeType2==='Insecte'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${psyBGC},${insecteBGC})`)
                                pokeCardCtn.classList.add('psy')
                                pokeCardCtn.classList.add('insecte')
                            }
                            else if(pokeType1 === 'Roche' && pokeType2==='Sol'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${rocheBGC},${solBGC})`)
                                pokeCardCtn.classList.add('roche')
                                pokeCardCtn.classList.add('sol')
                            }else if(pokeType1 === 'Roche' && pokeType2==='Combat'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${rocheBGC},${combatBGC})`)
                                pokeCardCtn.classList.add('roche')
                                pokeCardCtn.classList.add('combat')
                            }else if(pokeType1 === 'Roche' && pokeType2==='Spectre'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${rocheBGC},${spectreBGC})`)
                                pokeCardCtn.classList.add('roche')
                                pokeCardCtn.classList.add('spectre')
                            }else if(pokeType1 === 'Roche' && pokeType2==='Ténèbres'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${rocheBGC},${tenebreBGC})`)
                                pokeCardCtn.classList.add('roche')
                                pokeCardCtn.classList.add('tenebre')
                            }else if(pokeType1 === 'Roche' && pokeType2==='Feu'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${rocheBGC},${feuBGC})`)
                                pokeCardCtn.classList.add('roche')
                                pokeCardCtn.classList.add('feu')
                            }else if(pokeType1 === 'Roche' && pokeType2==='Glace'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${rocheBGC},${glaceBGC})`)
                                pokeCardCtn.classList.add('roche')
                                pokeCardCtn.classList.add('glace')
                            }else if(pokeType1 === 'Roche' && pokeType2==='Eau'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${rocheBGC},${eauBGC})`)
                                pokeCardCtn.classList.add('roche')
                                pokeCardCtn.classList.add('eau')
                            }else if(pokeType1 === 'Roche' && pokeType2==='Plante'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${rocheBGC},${planteBGC})`)
                                pokeCardCtn.classList.add('roche')
                                pokeCardCtn.classList.add('plante')
                            }else if(pokeType1 === 'Roche' && pokeType2==='Acier'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${rocheBGC},${acierBGC})`)
                                pokeCardCtn.classList.add('roche')
                                pokeCardCtn.classList.add('acier')
                            }else if(pokeType1 === 'Roche' && pokeType2==='Poison'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${rocheBGC},${poisonBGC})`)
                                pokeCardCtn.classList.add('roche')
                                pokeCardCtn.classList.add('poison')
                            }else if(pokeType1 === 'Roche' && pokeType2==='Psy'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${rocheBGC},${psyBGC})`)
                                pokeCardCtn.classList.add('roche')
                                pokeCardCtn.classList.add('psy')
                            }else if(pokeType1 === 'Roche' && pokeType2==='Fée'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${rocheBGC},${feeBGC})`)
                                pokeCardCtn.classList.add('roche')
                                pokeCardCtn.classList.add('fee')
                            }else if(pokeType1 === 'Roche' && pokeType2==='Dragon'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${rocheBGC},${dragonBGC})`)
                                pokeCardCtn.classList.add('roche')
                                pokeCardCtn.classList.add('dragon')
                            }else if(pokeType1 === 'Roche' && pokeType2==='Électrik'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${rocheBGC},${electrikBGC})`)
                                pokeCardCtn.classList.add('roche')
                                pokeCardCtn.classList.add('electrik')
                            }else if(pokeType1 === 'Roche' && pokeType2==='Vol'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${rocheBGC},${volBGC})`)
                                pokeCardCtn.classList.add('roche')
                                pokeCardCtn.classList.add('vol')
                            }else if(pokeType1 === 'Roche' && pokeType2==='Insecte'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${rocheBGC},${insecteBGC})`)
                                pokeCardCtn.classList.add('roche')
                                pokeCardCtn.classList.add('insecte')
                            }
                            else if(pokeType1 === 'Glace' && pokeType2==='Ténèbres'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${glaceBGC},${tenebreBGC})`)
                                pokeCardCtn.classList.add('glace')
                                pokeCardCtn.classList.add('tenebre')
                            }else if(pokeType1 === 'Feu' && pokeType2==='Ténèbres'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${feuBGC},${tenebreBGC})`)
                                pokeCardCtn.classList.add('feu')
                                pokeCardCtn.classList.add('tenebre')
                            }else if(pokeType1 === 'Feu' && pokeType2==='Psy'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${feuBGC},${psyBGC})`)
                                pokeCardCtn.classList.add('feu')
                                pokeCardCtn.classList.add('psy')
                            }else if(pokeType1 === 'Feu' && pokeType2==='Dragon'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${feuBGC},${dragonBGC})`)
                                pokeCardCtn.classList.add('feu')
                                pokeCardCtn.classList.add('dragon')
                            }
                            
                            else if(pokeType1 === 'Spectre' && pokeType2==='Ténèbres'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${spectreBGC},${tenebreBGC})`)
                                pokeCardCtn.classList.add('spectre')
                                pokeCardCtn.classList.add('tenebre')
                            }else if(pokeType1 === 'Spectre' && pokeType2==='Glace'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${spectreBGC},${glaceBGC})`)
                                pokeCardCtn.classList.add('spectre')
                                pokeCardCtn.classList.add('glace')
                            }else if(pokeType1 === 'Spectre' && pokeType2==='Électrik'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${spectreBGC},${electrikBGC})`)
                                pokeCardCtn.classList.add('spectre')
                                pokeCardCtn.classList.add('electrik')
                            }else if(pokeType1 === 'Spectre' && pokeType2==='Dragon'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${spectreBGC},${dragonBGC})`)
                                pokeCardCtn.classList.add('spectre')
                                pokeCardCtn.classList.add('dragon')
                            }else if(pokeType1 === 'Spectre' && pokeType2==='Eau'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${spectreBGC},${eauBGC})`)
                                pokeCardCtn.classList.add('spectre')
                                pokeCardCtn.classList.add('eau')
                            }else if(pokeType1 === 'Spectre' && pokeType2==='Feu'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${spectreBGC},${feuBGC})`)
                                pokeCardCtn.classList.add('spectre')
                                pokeCardCtn.classList.add('feu')
                            }else if(pokeType1 === 'Spectre' && pokeType2==='Fée'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${spectreBGC},${feeBGC})`)
                                pokeCardCtn.classList.add('spectre')
                                pokeCardCtn.classList.add('fee')
                            }else if(pokeType1 === 'Spectre' && pokeType2==='Plante'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${spectreBGC},${planteBGC})`)
                                pokeCardCtn.classList.add('spectre')
                                pokeCardCtn.classList.add('plante')
                            }else if(pokeType1 === 'Spectre' && pokeType2==='Psy'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${spectreBGC},${psyBGC})`)
                                pokeCardCtn.classList.add('spectre')
                                pokeCardCtn.classList.add('psy')
                            }
                            else if(pokeType1 === 'Dragon' && pokeType2==='Ténèbres'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${dragonBGC},${tenebreBGC})`)
                                pokeCardCtn.classList.add('dragon')
                                pokeCardCtn.classList.add('tenebre')
                            }
                            else if(pokeType1 === 'Électrik' && pokeType2==='Fée'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${electrikBGC},${feeBGC})`)
                                pokeCardCtn.classList.add('electrik')
                                pokeCardCtn.classList.add('fee')
                            }else if(pokeType1 === 'Électrik' && pokeType2==='Ténèbres'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${electrikBGC},${tenebreBGC})`)
                                pokeCardCtn.classList.add('electrik')
                                pokeCardCtn.classList.add('tenebre')
                            }else if(pokeType1 === 'Électrik' && pokeType2==='Glace'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${electrikBGC},${glaceBGC})`)
                                pokeCardCtn.classList.add('electrik')
                                pokeCardCtn.classList.add('glace')
                            }else if(pokeType1 === 'Électrik' && pokeType2==='Dragon'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${electrikBGC},${dragonBGC})`)
                                pokeCardCtn.classList.add('electrik')
                                pokeCardCtn.classList.add('dragon')
                            }
                            else if(pokeType1 === 'Ténèbres' && pokeType2==='Fée'){
                                pokeCardCtn.setAttribute('style',`background: linear-gradient(${tenebreBGC},${feeBGC})`)
                                pokeCardCtn.classList.add('tenebre')
                                pokeCardCtn.classList.add('fee')
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
               
                    
                pokeCardCtn.addEventListener('click', ()=>{
                    const pokeTransfer = pokemon.id
                    localStorage.setItem('pokemon', pokeTransfer)
                    document.location.href='pokemon.html';
                })           
                
    });

}

getPokemons().then(pokemons => showPokemons(pokemons));

pokeSelect.addEventListener('change',(e)=>{
    let pokeCards = document.querySelectorAll('.card')
    let pokeTri = document.querySelectorAll(`.${pokeSelect.value}`)
              
    pokeCards.forEach(pokeCard=>{
        pokeCard.classList.add('displayNone')
    })
    pokeTri.forEach(poke=>{
        poke.classList.remove('displayNone')
    })
    
    })
    