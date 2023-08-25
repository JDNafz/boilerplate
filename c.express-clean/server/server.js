const express = require('express');
// const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
// app.use(bodyParser.urlencoded({extended:true}))
app.use(express.urlencoded({ extended: true }));
// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));



let dataStructure = [];

//POST Routes go here
app.post('/route', (req,res) => {
  let reqBody = req.body;
  dataStructure.push(reqBody);

  res.sendStatus(201); // send back "Submitted"
});


// GET  Routes go here
app.get('/guess', (req, res) => {
  res.send(dataStructure);
});



app.listen(PORT, () => {
  console.log ('Beep Boop I\'m on', PORT)
})
 