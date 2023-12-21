// how to create a Json from a string or a Json to a string
const data = '{"ticker": {"base": "BTC", "target": "USD", "price":11203.9559}}'

const parsedData = JSON.parse(data)

const dog = {breed: "lab", color: "black", isAlive: true, owner: undefined};

const stringData = JSON.stringify(dog)

//Old way to make requests

// const req = new XMLHttpRequest();

// req.onload = function(){
//     console.log("Its loaded");
//     const data = JSON.parse(this.responseText);
//     console.log(data.name, data.height)
// };

// req.onerror = function(){
//     console.log("Error!")
//     console.log(this)
// };

// req.open("GET", "https://swapi.dev/api/people/1");
// req.send();


// Newer way (FETCH)
// fetch("https://swapi.dev/api/people/1")
// .then(res  =>{
//     console.log("Resolved", res)
//     res.json().then(data => {
//         console.log(data)
//     })
// })
// .catch(e => {
//     console.log("Error", e)
// })

const loadSW = async ()=>{
    try {
        const res = await fetch("https://swapi.dev/api/people/1");
        const data = await res.json()
        console.log(data)
        const res12 = await fetch("https://swapi.dev/api/people/124");
        const data12 = await res12.json()
        console.log(data12)
     } catch(e) {
        console.log("Error", e)
     }
    }


loadSW()


