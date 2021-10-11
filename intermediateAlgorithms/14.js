// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple

// Smallest Common Multiple

function smallestCommons(arr) {
  //Example input -> [1, 5]
  //range [1, 2, 3, 4, 5]
  //Find the least common multiple of all those numbers of the range
  let input = arr.sort((a, b) => a - b);
  let range = [];
  for (let i = input[0]; i <= input[1]; i++) {
    range.push(i);
  }
  //Check for a prime Number
  function isPrime(number) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) return false;
    }
    return number > 1;
  }
  let output = [];
}

let test = smallestCommons([10, 5]);
console.log(test);
