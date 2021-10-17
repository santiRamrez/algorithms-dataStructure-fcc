// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional

// Arguments Optional

function addTogether() {
  let args = [...arguments];
  let number = args.every((arg) => typeof arg === "number");
  if (number && args.length > 1) {
    return args.reduce((prev, curr) => prev + curr);
  } else if (number && args.length == 1) {
    let func = (a) => (typeof a === "number" ? a + args[0] : undefined);
    return func;
  } else {
    return undefined;
  }
}

let test = addTogether(2)(3);
console.log(test);
