// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou

// Wherefore art thou

// function whatIsInAName(collection, source) {
//   var arr = [];
//   // Only change code below this line
//   let sourceKeys = Object.keys(source);
//   arr = collection.filter((obj, i) => {
//     for (let j = 0; j < sourceKeys.length; j++) {
//       if (
//         obj.hasOwnProperty(sourceKeys[j]) ||
//         obj[sourceKeys[j]] == source[sourceKeys[j]]
//       ) {
//         return true;
//       }
//     }
//     return false;
//   });
//   // Only change code above this line
//   return arr;
// }
function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  let sourceKeys = Object.keys(source);
  arr = collection.filter((obj, i) => {
    //When filtering put into each condition what you do not want, the inner for loop should return false
    for (let key of sourceKeys) {
      if (!obj.hasOwnProperty(key) || source[key] !== obj[key]) {
        return false;
      }
    }
    return true;
  });
  // Only change code above this line
  return arr;
}

let test = whatIsInAName(
  [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, bat: 2 }
);
// let test = whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 });

console.log(test);
