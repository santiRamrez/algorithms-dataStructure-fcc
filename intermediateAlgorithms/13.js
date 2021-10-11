// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes

// Sum All Primes

function sumPrimes(num) {
  function isPrime(num) {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }
  let current = 1;
  let sum = 0;
  while (current <= num) {
    if (isPrime(current)) {
      sum += current;
    }
    current++;
  }
  return sum;
}

let test = sumPrimes(10);
console.log(test);
