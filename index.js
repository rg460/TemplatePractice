const express = require('express');
const res = require('express/lib/response');
const app = express();
const path = require('path');

const redditData = require('./data.json');


app.set('view engine', 'ejs');
app.get('/',(req,res)=>{
   res.render('home')
})
app.get('/basketball',(req,res)=>{
    const players = [
    'Nikola Jokic',
    'LeBron James',
    'Joel Embiid',
    'Stephen Curry'
];
res.render('basketball',{ players })
})
app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { num })
})
app.get('/r/:subreddit',(req,res)=>{
    const  {subreddit} = req.params;
    const data = redditData[subreddit];
    res.render('subreddit', { ...data });
   
})
app.set('views', path.join(__dirname, '/views'))
app.listen(3000,() =>{
    console.log('listening on port 3000');
})