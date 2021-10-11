// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace

// Search and Replace

function myReplace(str, before, after) {
  let arr = str.split(" ");
  let output = arr.map((word) => {
    if (word.toLowerCase() == before.toLowerCase()) {
      if (word[0] === word[0].toUpperCase()) {
        return after[0].toUpperCase() + after.slice(1);
      } else {
        return after.toLowerCase();
      }
    }
    return word;
  });
  return output.join(" ");
}

let test = myReplace(
  "A quick brown fox Jumped over the lazy dog",
  "jumped",
  "leaped"
);
console.log(test);
