//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range

//Sum All Numbers in a Range

function sumAll(arr) {
  let sort = arr.sort((a, b) => a - b);
  let newArr = [];
  for (let i = sort[0]; i <= sort[1]; i++) {
    newArr.push(i);
  }
  return newArr.reduce((prev, curr) => prev + curr);
}

let test = sumAll([10, 5]);
console.log(test);
