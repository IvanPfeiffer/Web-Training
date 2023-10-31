// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${}.png

const container = document.querySelector("#container");
const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"


for(let i = 1; i < 151; i++){
    const pokemon = document.createElement("div");
    pokemon.classList.add("pokemon")
    const label = document.createElement("span");
    label.innerText = `#${i}`
    const newImage = document.createElement("img");
    newImage.src = `${baseURL}${i}.png`
    pokemon.appendChild(newImage)
    pokemon.appendChild(label)
    container.appendChild(pokemon)
}