const mongoose = require('mongoose');


//This was retrieved from the docs. 

mongoose.connect('mongodb://127.0.0.1:27017/shopApp').then(()=>{
    console.log("Succesfuly connected")
})
.catch(e=>{
    console.log(e)
});


const personSchema = new mongoose.Schema({
    first: String,
    last: String
});

personSchema.virtual('fullName').get(function(){
    return `${this.first} ${this.last}`
})


 personSchema.pre('save', async function(){
    console.log('About to Save')
 })
 personSchema.post('save', async function(){
    console.log('Just Saved')
 })
const Person = mongoose.model('Person', personSchema);

