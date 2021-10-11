// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union

// Sorted Union

function uniteUnique(arr) {
  let args = [...arguments];
  let mainArr = [];
  let output = [];
  args.forEach((arr) => {
    arr.forEach((number) => mainArr.push(number));
  });
  mainArr.forEach((number) => {
    if (!output.includes(number)) output.push(number);
  });
  return output;
}

let test = uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
console.log(test);
