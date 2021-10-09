//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string

//Reverse a String

function reverseString(str) {
  return str.split("").reverse().join("");
}

let test = reverseString("hello");
console.log(test);
