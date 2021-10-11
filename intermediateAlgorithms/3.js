//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy

//Seek and Destroy

function destroyer(arr) {
  let args = [...arguments];
  let toDestroy = args.filter((param) => param !== args[0]);
  return args[0].filter((val) => !toDestroy.includes(val));
}

let test = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(test);
