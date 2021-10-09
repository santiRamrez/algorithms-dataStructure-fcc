//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/boo-who

//Boo who

function booWho(bool) {
  return typeof bool === "boolean" ? true : false;
}

let test = booWho(null);
console.log(test);
