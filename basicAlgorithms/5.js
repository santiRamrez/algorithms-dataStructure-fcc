//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays

//Return Largest Numbers in Arrays

// function largestOfFour(arr) {
//   let output = [];
//   arr.forEach((subArr, i) => {
//     let largest = subArr.reduce((prev, current) =>
//       prev < current ? current : prev
//     );
//     output.push(largest);
//   });
//   return output;
// }

function largestOfFour(arr) {
  return arr.map((subArr) => {
    return subArr.reduce((prev, current) => (prev < current ? current : prev));
  });
}

let test = largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

console.log(test);
