console.log("Welcome to my JS testing page")

let matrix = [[1,2,3],[4,5,6],[7,8,9]]
function transposeMatrix(matrix) {
  // Write your code here.
  let output;
  output = matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
  // console.log(output);
  return output;
}
// sum of numbers 1 to n
function countingFromOneToN(num){
  let result = 0;
  for (let i = 1; i <= num; i ++){
    result += i; }  
  return result
}// end countingFromOneToN

// let response = prompt("enter an integer number"); //get input from user


// ---------------------------------- JQUERY --------------------------------
// $( document ).ready( readyNow );

function readyNow(){
  console.log( 'Welcome to JQ');
}

// ------------------------------------------------------------
function sumDigits(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    // if 3
    if (i % 3 === 0){
      // console.log(i);
      sum += i;
    }
    // if 5
    else if(i % 5 === 0){ // NEEDED ELSE IF 
      sum += i;
    };
    // if (i % 3 === 0&& i % 5 === 0){                //bug proof of concept!
    //   console.log(i + " is divisible by both");
    // }
    
    // console.log("The sum is currently",sum,"i was",i); //used to debug
  }
  // console.log("conclusion sum is:",sum);
  return sum;
}
// console.log(sumDigits(15));
