const mongoose = require('mongoose');


//This was retrieved from the docs. 

mongoose.connect('mongodb://127.0.0.1:27017/moviesDB').then(()=>{
    console.log("Succesfuly connected")
})
.catch(e=>{
    console.log(e)
});

//This is the guide to create the objects
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

//This will create a collection named "movies". The model should be uppercase and singular. 
const Movie = mongoose.model('Movie', movieSchema) //This will return a class. 

// const amadeus = new Movie({title: "Amadeus", year: 1986, score: 7, rating: "R"});
//There is no need to run save, this will inmediatly add it to the collection. 
// Movie.insertMany([
//     {title: "Star Wars IV", year: 1977, score: 8 ,rating: "R"},
//     {title: 'LOTR', year: 2000, score: 10 ,rating: 'R'},
//     {title: "LEGO", year:2015, score: 9 ,rating: "E"},
//     {title: 'Batman 2', year: 2008, score: 10 ,rating: "R"},
//     {title: "Mario", year: 2023, score: 10 ,rating:"E"},
// ]).then((data)=>{
//     console.log(data)
// })

// Movie.updateMany({title: 'Amadeus'}, {year: 1984}).then(res => console.log(res))
// Movie.findOneAndUpdate({title: 'Batman 2'}, {score: 9.5}, {new: true}).then(res => console.log(res))
// Movie.deleteOne({title: 'Mario'}).then(res => console.log(res))
// Movie.findOneAndDelete({title: 'LEGO'}).then(del => console.log(del)) This will return the deleted object. 




