//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence

//Title Case a Sentence

function titleCase(str) {
  let output = str
    .toLowerCase()
    .split(" ")
    .map((word, i) => word[0].toUpperCase() + word.substr(1));
  return output.join(" ");
}

let test = titleCase("I'm a little tea pot");
console.log(test);
