console.log("Welcome to my JS testing page")

let matrix = [[1,2,3],[4,5,6],[7,8,9]]

function transposeMatrix(matrix) {
  // Write your code here.
  let output;
  output = matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
  // console.log(output);
  return output;
}
transposeMatrix(matrix);



let myInt = 6;
let myString = '6';
let combo = myInt + Number(myString);
console.log(typeof combo);


// sum of numbers 1 to n
function countingFromOneToN(num){
  let result = 0;
  for (let i = 1; i <= num; i ++){
    result += i; 
    // console.log(result);
  }
  return result

}// end countingFromOneToN

let answer = countingFromOneToN(5);
// console.log(answer);