const express = require('express');

const app = express(); //how to refer to calling the express() function
const PORT = 5000; // Where we're chatting

app.use(express.urlencoded({ extended: true }));
app.use(express.static('server/public')); //static default to load 'public'

app.get('/artist', (req, res) => {
    res.send(artistListArray);
});

app.post('/place', (req,res) => {
    res.sendStatus(201); // send back "Submitted"
});


app.listen(PORT, () => {
    console.log('BEEP BOOP SERVER RUNNING...', PORT)
});