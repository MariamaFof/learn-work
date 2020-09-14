// ## Decreasing Iteration on arrays using while
//
// -  Using `length`, write on `stdout` each values of the `litteralDigits` array, descending.

const litteralDigits = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
let stout = litteralDigits.length;

//while (stout > 0 ){
//stout = stout - 1;
//console.log(litteralDigits[stout]);
//}

for(let i = litteralDigits.length -1; i >= 0 ; i -- ){

  console.log(litteralDigits[i]);
}