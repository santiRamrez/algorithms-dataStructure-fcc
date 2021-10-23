// set -> [[0.25, 0.25, 0.25], [0.1, 0.1, 0.1]...]
let stack = [];
function sumAll(set) {
  let count = 0;
  for (let i = 0; i < set.length; i++) {
    let val = set[i].reduce((prev, curr) => prev + curr, 0);
    count = count + val;
  }
  return count;
}

let test = sumAll(stack);
console.log(test);
