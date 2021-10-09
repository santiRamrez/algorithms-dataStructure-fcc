//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending

//Confirm the Ending
function confirmEnding(str, target) {
  let targetLength = target.length;
  let strLetters = str.slice(str.length - targetLength, str.length);
  return strLetters === target ? true : false;
}

let test = confirmEnding("Bastian", "tian");
console.log(test);
