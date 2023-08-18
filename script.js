

function stringChange(string) {
    let startPosition = 0;
    let endPosition = string.length;
    // if length <= 2 
        //DONT DO IT
    //else
    // for
    endPosition -= 1;
    startPosition +=1
    let newString = string.slice(startPosition,endPosition);
    console.log(newString);
}

stringChange("Hello World!");
// "Hello World!" -> "ello world"
// "Ha!" -> "a"
// "no" -> "no"

