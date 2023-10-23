function testingFunction(array) {
  console.log("Script is working", array);

  const start = array[0].slice(0, 2);
  const end = array[0].slice(2);
  const result = [start, end];

  console.log("result:", result);
}

testingFunction(["e2e4", "e7e5", "g1f3", "b8c6"]);

function makeAllMoves() {
  const updateBoard = () => {
    if (moves !== null) {
      let newBoard = board;
      for (let move of moves) {
        const start = move.slice(0, 2);
        const end = move.slice(2);
        newBoard = makeSimpleMove(start, end, newBoard);
      }
      return newBoard;
    }
  };
}

// Run this file in node (straight in the terminal)?
//            node a.html,css,js/script.js

// Run this file in browser?
// MAC:       open a.html,css,js/script.js
// Windows:   start a.html,css,js/script.js

// right click inspect, go to the "Console tab to view the console.log statement"
