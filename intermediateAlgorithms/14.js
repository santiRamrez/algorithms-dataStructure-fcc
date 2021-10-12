// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple

// Smallest Common Multiple

function smallestCommons(arr) {
  //Example input -> [1, 5]
  //range [1, 2, 3, 4, 5]
  //Find the least common multiple of all those numbers of the range
  let small = Math.min(...arr);
  let big = Math.max(...arr);
  let scm = big;
  let range = [];
  for (let i = small; i <= big; i++) {
    range.push(i);
  }
  let upperBound = range.reduce((prev, curr) => prev * curr);
  for (let i = big; i <= upperBound; i += big) {
    let isScm = true;
    for (let j = small; j <= big; j++) {
      if (scm % j !== 0) {
        isScm = false;
        break;
      }
    }
    if (isScm) {
      return scm;
    } else {
      scm++;
    }
  }
}

let test = smallestCommons([23, 18]);
console.log(test);
