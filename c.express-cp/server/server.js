const express = require('express');
// const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
// app.use(bodyParser.urlencoded({extended:true}))
app.use(express.urlencoded({ extended: true }));
// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));


//make this into a route (module)?

let randomNumber = -1;
getRandomNumber();
// console.log("randomNumber is: ",randomNumber) 

function getRandomNumber(){
  randomNumber = Math.floor(Math.random() * 25)+1 ;
}


let storingGuesses = [];

//POST Routes go here
app.post('/guess', (req,res) => {
  let allGuesses = req.body;
  console.log(allGuesses);   // [ { angelica: '574' }, { jd: '222' }, { najma: '111' } ]
  let angelicasGuess = allGuesses[0];
  console.log("angelica's guess: ",angelicasGuess);
  res.sendStatus(400);
  


  storingGuesses.push(allGuesses);

  // compareGuess(allGuesses);

  res.sendStatus(201); // send back "Submitted"
});

function compareGuess(allGuesses){
  //compare content
  // console.log(allGuesses); // { angelica: '6', jd: '33', najma: '112' }
  for (let guess of allGuesses){
    console.log("an item in the loop", guess)

    if (guess === randomNumber){
      // correctGuessesArray.push(person who guessed)


    }
  }

} // end compareGuess();








// GET  Routes go here
app.get('/guess', (req, res) => {
  res.send(inventory);
});







app.listen(PORT, () => {
  console.log ('Beep Boop I\'m on', PORT)
})
 