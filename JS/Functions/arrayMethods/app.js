const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function print(element) {
    console.log(element)
}
numbers.forEach(print)

numbers.forEach(function(el){
    console.log(el)
})

const movies =[
    {
        title: "Amadeus",
        score: 99,
        year: 1984
    },
    {
        title: "Stand By Me",
        score: 85,
        year: 2013
    }, 
    {
        title: "Parasite",
        score: 95,
        year: 2022
    },
    {
        title: "Alien",
        score: 90,
        year: 1979
    }
];

movies.forEach(function(element){
    console.log(`${element.title} - ${element.score}/100`)
})
console.log("USING ARROW FUNCTION")
//Using arrow function
movies.forEach(element => console.log(`${element.title} - ${element.score}/100`)
)

// Array of scores and titles
const mapOfMovies = movies.map(function(movie) {
    return `${movie.title} - ${movie.score}/100`
})
console.log(mapOfMovies)

//Arrow Functions
const add = (x,y) => {
    return x + y
}

console.log(add(2,2))

//Explicit return.
const rollDie = () =>{
    return Math.floor(Math.random()*6) + 1
}

//Implicit Return with parenthesis. Only works with one expressions. 
const rollDie2 = () =>(
    Math.floor(Math.random()*6) + 1
)

console.log(rollDie(), "this is explicit return")
console.log(rollDie2(), "this is implicit return")

console.log("Filter Method");


numbers.filter(n => {
    return n % 2 === 0
});

const goodMovies = movies.filter(movie =>{
    return movie.score > 90
});

console.log(goodMovies)

// Some and Every

const exams = [80,98,92,78,70,90,89,84,81,77];

exams.every(score => score <= 75);
//will return false because of the 70

exams.some(score => score >= 75);
//will return true. 

movies.some(movie => movie.year >= 2015);

//Reduce method 
const prices = [9.99,1.5,19.99,49.99,30.5];

const sum = prices.reduce((acum, value)=>{
    return acum + value
});

console.log(sum)

const minValue = prices.reduce((minVal, currentValue)=>{
    if(minVal < currentValue){
        return minVal
    } return currentValue
})

console.log(minValue);