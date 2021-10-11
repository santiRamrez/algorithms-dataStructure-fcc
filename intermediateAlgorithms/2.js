// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays

//Diff Two Arrays

function diffArray(arr1, arr2) {
  let mainArr = [...arr1, ...arr2];
  return mainArr.filter((num) => !arr1.includes(num) || !arr2.includes(num));
}

let test = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(test);
