// axios.get("https://swapi.dev/api/people/1")
// .then(res =>{
//     console.log("Response", res)
// })
// .catch(e=>{
//     console.log("Error", e)
// });

const getSWPerson = async (id)=>{
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}`);
        console.log(res.data)
    } catch(e) {
       console.log("Error", e)
    };
    };


getSWPerson(5)
getSWPerson(10)

// Headers
const jokes = document.querySelector("#jokes")
const getDadJoke = async()=>{
    const headers = {headers: {Accept: 'application/json'}}
    const res = await axios.get("https://icanhazdadjoke.com/", headers);
    const newLI =  document.createElement("li");
    newLI.append(res.data.joke);
    jokes.append(newLI);

};

const addButton = document.querySelector("#add");
const removeButton = document.querySelector("#del")

addButton.addEventListener("click", ()=>{
    getDadJoke()
});

removeButton.addEventListener("click", ()=>{
    jokes.remove()
})


