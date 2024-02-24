const input = document.querySelector("input");
const h1 = document.querySelector("h1");
// input.addEventListener("change", function(e){
//     console.log("AJHDHDJDS") //This will be activated when you leave the input and the value changes
// })

input.addEventListener("input", function(e){
        h1.innerText = input.value 
        console.log("Input Event") //This will be activated when you leave the input and the value changes
    })