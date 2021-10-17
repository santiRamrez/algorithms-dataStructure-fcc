// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it

// Drop it

function dropElements(arr, func) {
  let output = [...arr];
  for (let i = 0; i <= arr.length; i++) {
    if (func(arr[i])) {
      return output.slice(i);
    }
    if (i === arr.length && !func(arr[i])) {
      return [];
    }
  }
}

let test = dropElements([0, 1, 0, 1], function (n) {
  return n === 2;
});

console.log(test);
