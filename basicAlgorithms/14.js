//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong

//Where do I Belong

function getIndexToIns(arr, num) {
  let newArr = [num, ...arr];
  let sorted = newArr.sort((a, b) => a - b);
  return sorted.indexOf(num);
}

let test = getIndexToIns([20, 3, 5], 19);
console.log(test);
