// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator

// Telephone Number Validator
// && /[^A-Z]/g.test(str)
function telephoneCheck(str) {
  let regex = /\d/g;
  let numbers = str.match(regex);
  let output = true;
  //Valid Numbers
  if (numbers.length !== 11 && numbers.length !== 10) output = false;
  if (numbers.length >= 11 && numbers[0] != 1) output = false;
  //Valid No letters
  if (/[A-Z]/g.test(str)) output = false;
  //Valid Parenthesis
  if (/[\(\)]/g.test(str)) {
    if (/[\(]\d+[\)]/.test(str) === false) output = false;
  }
  //Valid dashes
  let regexDash = /[-]/g;
  let qtyDashes = str.match(regexDash);
  if (regexDash.test(str) && qtyDashes.length >= 3) output = false;
  if (/^[-]/.test(str)) output = false;

  let regexNoValidCharacters = /(\?)/g;
  if (regexNoValidCharacters.test(str)) output = false;

  //Valid everything within parenthesis
  let regexIntoParenth = /\(\d{10}\)/;
  if (regexIntoParenth.test(str)) output = false;

  return output;
}

let test = telephoneCheck("55 55-55-555-5");
console.log(test);
