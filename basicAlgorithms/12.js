//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-algorithm-scripting

//Slice and Splice

function frankenSplice(arr1, arr2, n) {
  let newArr = [...arr2];
  newArr.splice(n, 0, ...arr1);
  return newArr;
}

let test = frankenSplice([1, 2, 3], [4, 5, 6], 1);
console.log(test);
