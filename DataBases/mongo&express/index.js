const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')

const Product = require('./models/product')


mongoose.connect('mongodb://127.0.0.1:27017/farmStand').then(()=>{
    console.log("Mongo Succesfuly connected")
})
.catch(e=>{
    console.log(e)
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'));

const categories = ['Fruit', 'Veggie', 'Dairy']

app.get('/products', async (req, res)=>{
    const { category } = req.query;
    if(category){
        const products = await Product.find({category})
        res.render('products/index', {products, category, categories})
    } else {
        const products = await Product.find({})
        res.render('products/index', {products, category: 'All', categories})
    }
    
    // console.log(products)
    
})

app.get('/products/new', (req, res)=>{
    console.log(categories)
    res.render('products/new', {categories})
} );

app.post('/products', async (req, res)=>{
    const newProduct = new Product(req.body)
    await newProduct.save()
    res.redirect('/products')

})

app.get('/products/:id/edit', async (req, res)=>{
    const { id } = req.params;
    const product = await Product.findById(id)
    res.render('products/edit', {product, categories})
} );

app.put('/products/:id', async(req, res)=>{
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true, new: true});
    res.redirect(`/products/${product._id}`);
});

app.get('/products/:id', async (req, res)=>{
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/details', {product})
})

app.delete('/products/:id', async(req, res)=>{
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    res.redirect('/products')
})



app.listen('3000', ()=>{
    console.log('Listening on port 3000')
})

