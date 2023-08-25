$(document).ready(onReady);

function onReady() {
  console.log("JQ running OnReady")
  $('#submit-btn').on('click', submitData); 

} //end handleReady

function submitData(){
  const postObj = {
  reqValues : [
    {one: $('#input-one').val()},
    {two: $('#input-two').val()},
    {three: $('#najma-guess').val()}
  ]
  }
  postInput ( postObj ) ;
}//end submitGuesses 



//CLIENT POST 
function postInput(postObj){

    $.ajax({   
    type: 'POST',  
    url: '/route',
    data: postObj     //send the item
  }).then( (res) => { // if good response ie 200,201:
    console.log("IT WORK THEY 201")
    $('#input-one').val("");           //empty inputs
    $('#input-two').val("");           //empty inputs
    $('#input-three').val("");           //empty inputs
    // $('#inDescription').val("");    //empty inputs
    // getCurrentInventory();          // GET STATE
    // $('#inItem').focus();           //curser back to input
  }).catch((res) => { // if bad response
    console.log("CATCH: data issue")
  });//end Catch

}//end postTheGuess

//CLIENT GET