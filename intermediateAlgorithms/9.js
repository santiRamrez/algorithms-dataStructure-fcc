// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters

// Missing letters

function fearNotLetter(str) {
  let myStr = str.toLowerCase();
  let startPoint = myStr.charCodeAt(0);
  let endPoint = myStr.charCodeAt(myStr.length - 1);
  let correctSequence = {};
  for (let i = startPoint; i <= endPoint; i++) {
    correctSequence[i] = String.fromCharCode(i);
  }
  for (let j = 0; j <= myStr.length; j++) {
    if (myStr[j] !== correctSequence[startPoint + j])
      return correctSequence[startPoint + j];
  }
}

let test = fearNotLetter("abce");
console.log(test);
