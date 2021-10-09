//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string

// Find the Longest Word in a String

function findLongestWordLength(str) {
  let arr = str.split(" ");
  let reduce = arr.reduce((prev, current, i) => {
    return prev.length < current.length ? current : prev;
  }, "a");
  return reduce.length;
}

let test = findLongestWordLength(
  "The quick brown fox jumped over the lazy dog"
);
console.log(test);
