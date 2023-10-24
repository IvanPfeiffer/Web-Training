function rollDie(numSides = 6)  {
    return Math.floor(Math.random()*numSides) + 1
}

nums = [13,4,5,4,1,2,1,5,7,1,214,4548,0.1];

Math.max(...nums); //this will evaluate each item inside the array. 

const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"];

const allPets = [...cats, ...dogs];


//spread objects 
const feline = {legs: 4, family: "Felidae"};
const canine = {isFurry: true, family: "Caninae"};


const animals = {...feline, ...canine} //When they have things in common the second will win. 

const feline2  = {...feline, color: "black"}

const arrayObject = {...[1,2,3,4]};
console.log(arrayObject);

const dataFromForm = {
    email: "123@gmail.com",
    password: "123email",
    username: "123user"
};

const userProfile = {...dataFromForm, id: 2344, isAdmin: false};

// rest arguments

// function sum() {
//     return arguments.reduce((total, value)=> total + value)
// }

function sum(...nums){
    return nums.reduce((total, value)=> total + value)
} // will collect all the arguments.

//Destructuring
const scores = [100, 98, 95, 76, 43, 12, 7];

const [winner, second] = scores;
console.log(winner); //New variable. 

const [gold, ...everyoneElse] = scores;

const user = {
    email: "hola@gmail.com",
    password: "123ffgg",
    firstName: "huesitos",
    lastName: "camara",
    born: 1888,
    died: 1950,
    bio: "no Gracias",
    city: "NY",
    state: "NY"
};
//THe order does not matter. 
const {email, city, born, firstName} = user;

function fullName(user){
    const {firstName, lastName} = user;
    return `${firstName} ${lastName}`
};
