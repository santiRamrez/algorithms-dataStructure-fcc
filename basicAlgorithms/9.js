//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers

//Finders Keepers

function findElement(arr, func) {
  return arr.filter((num, i) => func(num))[0];
}

let test = findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0);
console.log(test);
