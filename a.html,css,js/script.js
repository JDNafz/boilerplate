



// fn ( int )
function reduceToOneDigit(int){
  // string = '38'
  const string = int.toString();
  // if string = 1:
  if (string.length === 1){
    //   return Number(string)
    return Number(int);
  }
  // else String is of length 2 or greater
  let remainingDigits = "";
  if (string.length > 2){
    //   theRest = String.slice(2)
    remainingDigits = string.slice(2)
  }
  //   get frist digit 3 String.slice(0,1) 
  const firstDigit = string.slice(0,1);
  //   get seoncd digit 8 String.slice(1,2)
  const secondDigit = string.slice(1,2);
  
  //   result = first + last 
  const tempTotal = Number(firstDigit) + Number(secondDigit)
  // console.log("TEMP TOTAL expect 11:", tempTotal)
  
  const output = tempTotal.toString() + remainingDigits

  return reduceToOneDigit(output);
  //   output = result + the rest
  //    fn name ( Number(out))
  
}


// console.log("expecting 2: ", reduceToOneDigit(989) ); // 2 expected





// fibinachi number sequesnce is created 1:1 and adding the previous numbers together
// 1,    1,   2, 3,  5,  8,  13,    21,      
// index 5
// // n = 9
// //  
// n = 4
// 1st 2nd 3rd 4th 5th ... n th


// find the end fibinachi number

// as long as nth number is bigger keep going
// example test case 1 = n answer 1

// fuction grow until n >= nth
// const number = 13;
// let newNumber = 0;
// function fibonacciSequence (number){ 

// // if n = nth return 1
// if (number == "1") {
//   return(1)};

// if (number > 1) {
//  number ++ = newNumber1
// };

// newNumber2 = newNumber + number;

// }

// fibonacciSequence(13);

// fn flatten []

// let arrays = [1, [2, 3], [4, [5]], 6]

// function toFlattenArrays(arrays){
//   let storageArray =[];
//   for (let array of arrays){
//     if (array === Number){
//       array.push(storageArray)
//     }
//   }
//   return [];
// }