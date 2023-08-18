

function stringChange(string) {
    //GOAL:
    // "Hello World!" -> "ello world"
    // "Ha!" -> "a"
    // "no" -> "no"
    let startPosition = 0;
    let endPosition = string.length;
    if (string.length <= 2){
        // console.log("return:", string);
        return string;
    }
    endPosition -= 1;
    startPosition +=1
    let newString = string.slice(startPosition,endPosition);
    // console.log(newString);
    return newString

    //Move these down to test it
    console.log(stringChange("Hello World!"));
    console.log(stringChange("Ha"));
} //end stringChange function

















