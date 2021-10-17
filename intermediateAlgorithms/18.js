// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true

// Everything Be True

function truthCheck(collection, pre) {
  let check = (obj) => (obj[pre] ? true : false);
  return collection.every(check);
}

let test = truthCheck(
  [
    { name: "Pete", onBoat: true },
    { name: "Repeat", onBoat: true },
    { name: "FastForward", onBoat: null },
  ],
  "onBoat"
);

console.log(test);
