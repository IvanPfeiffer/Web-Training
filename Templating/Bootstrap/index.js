const express = require("express");
const app = express();
const path = require("path")

const data = require('./data.json');

app.use(express.static(path.join(__dirname,'public'))); //This will call the files under assets

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/views'))



app.get("/", (req, res)=>{
    res.render('home')
});

app.get('/r/:subreddit', (req, res)=>{
    const {subreddit} = req .params;
    const data_reddit = data[subreddit]
    if(data_reddit){
        res.render('subreddit', {...data_reddit}); //Spread to gain access to every property of the JSON object.
    } else {
        res.render('notfound', {subreddit})
    }
    
})

app.get('/rand', (req, res)=>{
    const random = Math.floor(Math.random()*100)+1
    res.render('random', {rand: random}) 
})
app.get('/cats', (req, res)=>{
    const cats = ['blue', 'rocket','Monty', 'Manchas'];

    res.render('cats', {cats}); //Passing to render page

})

app.listen(3000,()=>{
    console.log("Listening on Port 3000")
});


