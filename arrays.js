function addElementToEndOfArray (array, element){
  element.push(array);
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array = ["element", ...];
}