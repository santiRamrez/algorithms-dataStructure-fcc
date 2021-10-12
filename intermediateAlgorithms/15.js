// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it

// Drop it

function dropElements(arr, func) {
  let newArr = [...arr];
  arr.forEach((number, i) => {
    if (func(number)) {
      newArr.splice(0, i + 1);
    } else {
      newArr = [];
    }
  });
  return newArr;
}

let test = dropElements([0, 1, 0, 1], function (n) {
  return n === 1;
});

console.log(test);
