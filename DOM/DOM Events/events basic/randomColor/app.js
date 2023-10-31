const title = document.querySelector("#colorName");
const button = document.querySelector("#changeButton");
const body = document.querySelector("#body");

function randomColor() {
    const r = Math.floor(Math.random()*255)+1
    const g = Math.floor(Math.random()*255)+1
    const b = Math.floor(Math.random()*255)+1
    const color = `rgb(${r}, ${g}, ${b})`;
    const inverseColor = `rgb(${255-r}, ${255-g}, ${255-b})`;


    const colorArray = [color, inverseColor]
    return colorArray; 
};

button.addEventListener("click", ()=>{
    const color = randomColor();
    title.innerText = color[0];
    title.style.color = color[1];
    body.style.backgroundColor = color[0];
})