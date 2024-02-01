const Product = require('./models/product')
const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/farmStand').then(()=>{
    console.log("Mongo Succesfuly connected")
})
.catch(e=>{
    console.log(e)
});



const seedProducts = [
    {
        name: 'Banana',
        price: 2.99,
        category: 'Fruit'
    }, 
    {
        name: 'Lettuce',
        price: 1.5,
        category: 'Veggie' 
    }, 
    {
        name: 'Apple',
        price: 0.5,
        category: 'Fruit'
    }, 
    {
        name: 'Cheesito',
        price: 3.99,
        category: 'Dairy'
    }, 
    {
        name: 'Celery',
        price: 0.75,
        category: 'Veggie'
    }, 
]
Product.insertMany(seedProducts).then(data =>{
    console.log(data)
}).catch(e =>{
    console.log(e)
})
