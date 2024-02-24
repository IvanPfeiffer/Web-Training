const form = document.getElementById("shelterForm");
const input = document.querySelector("#catName")
const list = document.querySelector("#cats")
form.addEventListener("submit",function(e){
    e.preventDefault(); //This will prevent from going to another page. 
    console.log(input.value);
    const catName = input.value
    const newLI = document.createElement("li");
    newLI.innerText = catName;
    list.append(newLI)
    input.value = "";
})
