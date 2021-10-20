// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter

// Roman Numeral Converter

function convertToRoman(num) {
  // I -> 1; X -> 10; C -> 100; M -> 1000;
  // v -> 5; l -> 50; D -> 500;
  let digits = num.toString().split("");
  let output = "";
  //helpers
  let toThousands = (digit) => {
    let input = Number(digit);
    switch (input) {
      case 1:
        return "M";
      case 2:
        return "MM";
      case 3:
        return "MMM";
      case 0:
        return "";
      default:
        return "nada papá";
    }
  };
  let toHundreds = (digit) => {
    let input = Number(digit);
    switch (input) {
      case 1:
        return "C";
      case 2:
        return "CC";
      case 3:
        return "CCC";
      case 4:
        return "CD";
      case 5:
        return "D";
      case 6:
        return "DC";
      case 7:
        return "DCC";
      case 8:
        return "DCCC";
      case 9:
        return "CM";
      case 0:
        return "";
      default:
        return "nada papá";
    }
  };
  let toTens = (digit) => {
    let input = Number(digit);
    switch (input) {
      case 1:
        return "X";
      case 2:
        return "XX";
      case 3:
        return "XXX";
      case 4:
        return "XL";
      case 5:
        return "L";
      case 6:
        return "LX";
      case 7:
        return "LXX";
      case 8:
        return "LXXX";
      case 9:
        return "XC";
      case 0:
        return "";
      default:
        return "nada papá";
    }
  };
  let toUnits = (digit) => {
    let input = Number(digit);
    switch (input) {
      case 1:
        return "I";
      case 2:
        return "II";
      case 3:
        return "III";
      case 4:
        return "IV";
      case 5:
        return "V";
      case 6:
        return "VI";
      case 7:
        return "VII";
      case 8:
        return "VIII";
      case 9:
        return "IX";
      case 0:
        return "";
      default:
        return "nada papá";
    }
  };

  for (let i = digits.length; i >= 1; i--) {
    //Check thousands
    if (i === 4) {
      output = toThousands(digits[digits.length - 4]);
    }
    //Check hundreds
    if (i === 3) {
      output += toHundreds(digits[digits.length - 3]);
    }
    //Check tens
    if (i === 2) {
      output += toTens(digits[digits.length - 2]);
    }
    //Check units
    if (i === 1) {
      output += toUnits(digits[digits.length - 1]);
      return output;
    }
  }
}

let test = convertToRoman(3);
console.log(test);
