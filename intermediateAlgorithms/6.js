// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin

// Pig Latin

function translatePigLatin(str) {
  let regex = /^[^aeiou]+/g; //Within the square brackets the regex consider each character individually
  if (regex.test(str)) {
    let consonants = str.match(regex);
    return str.replace(consonants, "") + consonants + "ay";
  } else {
    return str + "way";
  }
}

let test = translatePigLatin("schwartz");
console.log(test);
