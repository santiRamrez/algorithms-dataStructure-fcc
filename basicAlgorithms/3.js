//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number

//Factorialize a Number

function factorialize(num) {
  if (num <= 1) return 1;
  return num * factorialize(num - 1);
}

let test = factorialize(5);
console.log(test);
