const express = require("express");
const app = express();

// app.use((req, res)=>{
//     console.log("We got a new request")
//     // res.send("This is a response")
//     // res.send({color: "red", size: "small"})
//     // res.send("<h1>This is my webpage </h1>")
// })

// "Home"
app.get("/",(req, res)=>{
    res.send("Home updating in save with nodemon")
})

//Variable request
app.get('/r/:subreddit',(req, res)=>{
    const { subreddit } = req.params; //object with search
    res.send(`<h1>Browsing the ${subreddit} </h1>`)
})

app.get('/r/:subreddit/:postID', (req, res)=>{
    const { subreddit, postID } = req.params; //object with search
    console.log(req.params)
    res.send(`<h1>Viewing the postID ${postID} on the ${subreddit}</h1>`)
});



//Cats

app.post("/cats", (req, res)=>{
    res.send('POST request to cats')
})
app.get("/cats", (req, res)=>{
    console.log("Cat Request!")
    res.send("Meow!")
});

//Dogs
app.get("/dogs",(req, res)=>{
    res.send("Woof!")
    
});

app.get('/search', (req, res)=>{
    console.log(req.query)
    const { q } = req.query;

    res.send(`<h1> The search was ${q}</h1>`);
})

app.get("*",(req, res)=>{
    res.send('I dont have any informartion on this request')
}); //This is the response for any unkwnown routes



app.listen(3000, ()=>{
    console.log('Port 3000 is listening')
});

