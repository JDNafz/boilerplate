console.log("Welcome to my JS testing page")

let matrix = [[1,2,3],[4,5,6],[7,8,9]]

function transposeMatrix(matrix) {
  // Write your code here.
  let output;
  output = matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
  console.log(output);
  return output;
}


transposeMatrix(matrix);

const myVar = "Cheese";
console.log(myVar);

const myObj = {};
myObj.banana = "best food ever"
console.log(myObj.banana);

// ******************************
// above this line is the old content.

//commit 1