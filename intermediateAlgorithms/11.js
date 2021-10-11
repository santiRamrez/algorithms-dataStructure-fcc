// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities

// Convert HTML Entities

function convertHTML(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "&":
        newStr += "&amp;";
        break;
      case "<":
        newStr += "&lt;";
        break;
      case ">":
        newStr += "&gt;";
        break;
      case '"':
        newStr += "&quot;";
        break;
      case "'":
        newStr += "&apos;";
        break;
      default:
        newStr += str[i];
    }
  }
  return newStr;
}

let test = convertHTML("Dolce & Gabbana");
console.log(test);
