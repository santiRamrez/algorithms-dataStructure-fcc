//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string

//Repeat a String Repeat a String

// function repeatStringNumTimes(str, num) {
//   let output = [];
//   if (num <= 0) return "";
//   for (let i = 0; i < num; i++) {
//     output.push(str);
//   }
//   return output.join("");
// }
function repeatStringNumTimes(str, num) {
  if (num <= 0) return "";
  let arr = [...Array(num)];
  let newArr = arr.map((val) => (val = str));
  return newArr.join("");
}

let test = repeatStringNumTimes("abc", 3);
console.log(test);
