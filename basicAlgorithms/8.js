//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string

//Truncate a String
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num).concat("...") : str;
}

let test = truncateString("A-tisket a-tasket A green and yellow basket", 15);
console.log(test);
