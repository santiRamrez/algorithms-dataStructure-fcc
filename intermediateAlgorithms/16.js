// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller

// Steamroller

function steamrollArray(arr) {
  let flat = [].concat(...arr);
  let check = typeof flat[flat.length - 1] == "object";
  while (check) {
    check = typeof flat[flat.length - 1] == "object";
    flat = [].concat(...flat);
  }
  return flat;
}

let test = steamrollArray([1, {}, [3, [[4]]]]);
console.log(test);
