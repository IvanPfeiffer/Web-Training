document.querySelector("button").addEventListener("click", function(event){
    console.log(event)
})

const input = document.querySelector("input")

input.addEventListener("keydown", function(event){
    console.log("key Down")
    console.log(event)
})
// input.addEventListener("keyup", function(){
//     console.log("key up")
// })
