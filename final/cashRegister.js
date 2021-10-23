// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

// Cash Register

function checkCashRegister(price, cash, cid) {
  const Diff = cash - price;
  const values = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    HUNDRED: 100,
  };
  //It contains the detail of how many bank notes and coins we have
  let cashInDrive = cid.map((spot) => {
    let arr = [...spot];
    let name = /ONE HUNDRED/.test(spot[0]) ? "HUNDRED" : spot[0];
    let total = Math.round(spot[1] / values[name]);
    arr.push(total);
    return arr;
  });

  let options = cid.reverse();

  let totalAvailable = cashInDrive.reduce((acc, curr) => acc + curr[1], 0);
  totalAvailable = Number(totalAvailable.toFixed(2));

  let notEnough = {
    status: "INSUFFICIENT_FUNDS",
    change: [],
  };

  if (Diff > totalAvailable) {
    return notEnough;
  }
  //Output
  let change = {};
  if (Diff === totalAvailable) {
    change.status = "CLOSED";
  }
  if (Diff < totalAvailable) {
    change.status = "OPEN";
  }
  //Here I'm going to put the stacks of coins or bank notes within an array
  let stack = [];
  // set -> [[0.25, 0.25, 0.25], [0.1, 0.1, 0.1]...] In this case set parameter is going to be the stack variable
  function sumAll(set) {
    let count = 0;
    for (let i = 0; i < set.length; i++) {
      let val = set[i].reduce((prev, curr) => prev + curr, 0);
      count = count + val;
    }
    return count;
  }

  let changeOptions = options.map((money) => {
    if (money[1] == 0) return money;
    let current = /ONE HUNDRED/.test(money[0]) ? "HUNDRED" : money[0]; //String
    let divisor = values[current]; // Divisor as number
    let max = money[1] / divisor; // Quantity of coins or bank notes we got in cash-in-driver
    max = Number(max.toFixed(2));

    let arr = []; //Tis is going to be pushed to the stack array
    let subtotal;
    let count = Diff - sumAll(stack);
    count = Number(count.toFixed(2));
    if (count === 0 || divisor > count) return "";

    //Return string and subtotal
    for (let j = 1; j <= max; j++) {
      subtotal = divisor * j;
      subtotal = Number(subtotal.toFixed(2));
      if (subtotal <= count) {
        arr.push(divisor);
        count = Diff - sumAll(stack);
        count = Number(count.toFixed(2));
      }
      if (subtotal > count) {
        subtotal = subtotal - divisor;
        subtotal = Number(subtotal.toFixed(2));
        break;
      }
    }
    //Check stack for sum of all
    stack.push(arr);

    return [current, subtotal];
  });

  let newOptions = changeOptions.filter((arr) => arr);
  if (change.status === "OPEN") change.change = newOptions;
  if (change.status === "CLOSED") change.change = newOptions.reverse();

  let sumStack = stack.reduce((prev, curr) => prev + curr, 0);
  if (sumStack < Diff) return notEnough;

  return change;
}

let test = checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

console.log(test);
