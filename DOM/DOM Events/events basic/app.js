

const btn = document.querySelector("#v2");

btn.onclick = function() {
    console.log("you clicked me!")
}


// function changeColor(){
//     btn.classList.add("colorChange")
// }
// btn.ondblclick = changeColor;

function scream(){
    console.log("Bu!")
};

btn.onmouseenter = scream;

const btn3= document.querySelector("#v3");

btn3.addEventListener("mousedown", ()=>{
    btn3.classList.add("green")
})

btn3.addEventListener("mouseup", ()=>{
    btn3.classList.remove("green")
})