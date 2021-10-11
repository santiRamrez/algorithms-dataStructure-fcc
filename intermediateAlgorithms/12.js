// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers

// Sum All Odd Fibonacci Numbers

function sumFibs(num) {
  let sequence = [];
  for (let i = 1; i <= num; i++) {
    if (i <= 2) {
      sequence.push(1);
    } else {
      let fibNum = sequence[i - 2] + sequence[i - 3];
      sequence.push(fibNum);
    }
  }
  let filter = sequence.filter((val) => val % 2 !== 0 && val <= num);
  return filter.reduce((prev, current) => prev + current);
}

let test = sumFibs(75025);
console.log(test);
