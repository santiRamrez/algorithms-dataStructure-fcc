// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher

// Caesars Cipher

function rot13(str) {
  let input = str.split(" ");
  let Abc = [];
  // ["A", "B", "C", "D", "E", "F", ..."Z", A", "B", "C", "D", ..., "Z" ];
  for (let i = 65; i <= 90; i++) {
    let letter = String.fromCharCode(i);
    Abc.push(letter);
    if (i === 90) Abc.push(...Abc);
  }

  let output = input.map((word, i) => {
    let change = word.split("").map((letter) => {
      if (/\W/.test(letter)) return letter;
      for (let j = 0; j < Abc.length; j++) {
        if (letter === Abc[j]) return Abc[j + 13];
      }
    });
    return change.join("");
  });

  return output.join(" ");
}

let test = rot13("SERR CVMMN!");
console.log(test);
