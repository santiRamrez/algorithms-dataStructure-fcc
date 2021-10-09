// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey

//Chunky Monkey

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  arr.forEach((val, i) => {
    if (i % size == 0) {
      let subArr = arr.slice(i, i + size);
      newArr.push(subArr);
      console.log(i);
    }
  });
  return newArr;
}

let test = chunkArrayInGroups(["a", "b", "c", "d"], 2);
console.log(test);
