// selecting
//document.getElementById(id) this will return the element as a DOM object.
// document.getElementByTagName()

const allImages = document.getElementsByTagName("img");

for(let img of allImages){
    console.log(img.src)
}

// const squareImages = document.getElementsByClassName("square");

// for(let img of squareImages){
//     img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg"
// }


//querySelector will find the first match
// querySelectorAll will return an HTML collection. 
const firstPar = document.querySelector("p");

//const.getAttribute() will get the value of the called attribute.

const allLinks = document.querySelectorAll("a");

for(let link of allLinks){
    link.style.color = "rgb(0,108,134)"
    link.style.textDecorationColor = "magenta"
}

//window.getComputedStyle(element) will get the objecty with the styles.

//class lists
const h2 = document.querySelector("h2");

h2.classList.add("purple")
h2.classList.add("border")
