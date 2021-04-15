const fet = require('node-fetch')
const {colores}=require('./colors')

async function getdata() {
    const response = await fet(`https://pokeapi.co/api/v2/pokemon?limit=10`)
    let result = await response.json()
    return result
}

(async function () {
    try {
        let poke = await getdata()
        poke.results.map(x => {
            console.log(x.name,x.url)
        })
    } catch (error) {
        console.log(`error ${error}`)
    }
})()

colores.forEach(x=>{
    console.log(x)
})