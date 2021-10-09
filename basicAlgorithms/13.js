//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer

//Falsy Bouncer

function bouncer(arr) {
  return arr.filter((val) => val);
}

let test = bouncer([7, "ate", "", false, 9]);
console.log(test);
