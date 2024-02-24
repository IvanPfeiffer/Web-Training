const express = require('express');
const app = express();
const path = require("path")
const {v4: uuidv4} = require('uuid');
const methodOverride = require('method-override')



app.use(express.urlencoded({extended:true})); //This will make sure the req.body does return an object.
app.use(express.json({extended:true}));
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let comments = [
    {
        id: uuidv4(),
        username: 'Todd',
        comment: 'lol that is so funny'
    },
    {   
        id:uuidv4(),
        username: 'Skyler',
        comment: 'lol that is so funny HAHA'
    },
    {
        id:uuidv4(),
        username: 'osoperezoso',
        comment: 'lol that is so funny JAJA'
    },
    {
        id:uuidv4(),
        username: 'Todd el de mario',
        comment: 'lol that is so funny hehe'
    }

];

app.get('/comments', (req, res)=>{
    res.render('comments/index', {comments})
})

app.get('/comments/new', (req, res)=>{
    res.render('comments/new')
})
app.post('/comments', (req, res)=>{
    console.log(req.body)
    const {username, comment} = req.body;
    comments.push({username, comment, id: uuidv4()});
    res.redirect('comments') //After the post, the page with comments will load.
});

app.get('/comments/:id', (req, res)=>{
    const {id} = req.params
    const comment = comments.find(c => c.id === id)
    res.render('comments/show', {comment})
})

app.get('/comments/:id/edit', (req, res)=>{
    const {id} = req.params
    const commentToEdit = comments.find(c => c.id === id)
    res.render('comments/edit', { commentToEdit })
})

//FOr the patch form we need method override since Patch is not supported by HTML forms.
app.patch('/comments/:id', (req, res)=>{
    const {id} = req.params;
    const comment = comments.find(c => c.id === id)
    const newText = req.body.comment;
    comment.comment = newText
    res.redirect('/comments')
})

app.delete('/comments/:id', (req, res)=>{
    const {id} = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments')
})


app.get('/tacos', (req, res)=>{
    res.send("GET /tacos response");
});

app.post('/tacos', (req, res)=>{
    const {meat, qty} = req.body;
    res.send(`Your order is: ${qty} ${meat} tacos!`);
})

app.listen('3000', ()=>{
    console.log('Listening on port 3000')
});