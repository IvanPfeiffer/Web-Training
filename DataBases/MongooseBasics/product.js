const mongoose = require('mongoose');


//This was retrieved from the docs. 

mongoose.connect('mongodb://127.0.0.1:27017/shopApp').then(()=>{
    console.log("Succesfuly connected")
})
.catch(e=>{
    console.log(e)
});

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive'] //this is the error message. 
    },
    onSale: {
        type: Boolean,
        default: false //This will add it to every Product if it is not specified. 
    }, 
    categories: {
        type: [String],
        default: ['Cycling']
    },
    qty: {
        online: {
            type: Number,
            default: 0
        }, 
        inStore: {
            type: Number,
            default: 0
        }
    }, 
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
}
);


productSchema.methods.toggleOnSale = function(){
    this.onSale = !this.onSale
    this.save()
}

const Product = mongoose.model('Product', productSchema);

productSchema.statics.fireSell = function(){
    this.updateMany({},{onSale: true, price: 0});
}

productSchema.methods.greet = function(){
    console.log('This is a method on the schema')
}

const findProduct = async () =>{
    const foundProduct = await Product.findOne({name: 'Mountain Bike'})
    console.log(foundProduct)
};

findProduct()


// This will return an error because it does not have a name!
// const bike = new Product({
//     price: 59.99
// });

// bike.save().then(data =>{
//     console.log("The new product is", data)
// }).catch(e =>{
//     console.log(e)
// })

const bike = new Product({
    name: 'Mountain Bike',
    price: 78.99, 
    color: 'red',
    categories: ['Cycling', 'Safety']
});


// This will not add red because it is not in the schema. 
bike.save().then(data =>{
    console.log("The new product is", data)
}).catch(e =>{
    console.log(e)
})

const tirePump = new Product({
    name: 'Tire Pump',
    price: 19.99,

})

tirePump.save().then(data =>{
    console.log("The new product is", data)
}).catch(e =>{
    console.log(e)
})

// This will fail because of the negative value of price. 
// Product.findOneAndUpdate({name: 'Tire Pump'}, {price: -11.99}, {new: true, runValidators: true}).then(data =>{
//     console.log(data)
// })