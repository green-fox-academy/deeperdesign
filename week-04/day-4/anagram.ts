'use-strict';

export function anaGram(a: string, b: string):boolean {

  //Function to filter out spaces
  function removeSpaces(element, index, array) { 
    return (element != ' '); 
  }

  //Get variable a and b and convert it to lower case, then split its characters into an array, then sort them
  let inputA = a.toLocaleLowerCase().split('').filter(removeSpaces).sort();
  let inputB = b.toLocaleLowerCase().split('').filter(removeSpaces).sort();

  if(inputA.toString() === inputB.toString()){
    return true;
  }
  else {
    return false;
  }
}