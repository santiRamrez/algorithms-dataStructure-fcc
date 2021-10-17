// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker

// Palindrome Checker

// function palindrome(str) {
//   let forward = str.toLowerCase().replace(/\s|\W/, "");
//   let backward = "";
//   for (let i = forward.length - 1; i >= 0; i--) {
//     backward += forward[i];
//   }
//   return forward === backward ? true : false;
// }
function palindrome(str) {
  let forward = str.toLowerCase().replace(/\W|_/g, "");
  let backward = "";
  for (let i = forward.length - 1; i >= 0; i--) {
    backward += forward[i];
  }
  return forward === backward ? true : false;
}

let test = palindrome("A man, a plan, a canal. Panama");
console.log(test);
