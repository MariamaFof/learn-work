function range(numberOne, numberTwo) {
  const tableau=[];
  if (numberOne <= numberTwo){
    for(let i =numberOne; i <= numberTwo; i++) {
      tableau.push(i);
    }
  }
  else {
    for(let i = numberOne; i >= numberTwo; i--) {
      tableau.push(i);
    }
  }
  return tableau;
}
// Do not remove last lines, it is for tests
module.exports = range;