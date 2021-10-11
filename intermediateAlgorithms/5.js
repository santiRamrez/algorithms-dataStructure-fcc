// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case

// Spinal Tap Case

function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  let regex = /\s|_/g;
  return str.replace(regex, "-").toLowerCase();
}

let test = spinalCase("thisIsSpinalTap");
console.log(test);
