// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing

// DNA Pairing

function pairElement(str) {
  //Pairs should be AT | TA |CG | GC
  let output = [];
  let search = (nucleo) => {
    switch (nucleo) {
      case "A":
        output.push(["A", "T"]);
        break;
      case "T":
        output.push(["T", "A"]);
        break;
      case "C":
        output.push(["C", "G"]);
        break;
      case "G":
        output.push(["G", "C"]);
        break;
    }
  };
  for (let letter of str) {
    search(letter);
  }
  return output;
}

let test = pairElement("ATCGA");
console.log(test);
