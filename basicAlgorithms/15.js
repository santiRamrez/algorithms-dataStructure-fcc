// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations

function mutation(arr) {
  let target = arr[1].toLowerCase().split("");
  let lookForHere = arr[0].toLowerCase().split("");
  let filter = target.filter((letter, i) => {
    for (let a of lookForHere) {
      if (a == letter) return true;
    }
  });
  return filter.length === target.length ? true : false;
}

let test = mutation(["hello", "hey"]);
console.log(test);
