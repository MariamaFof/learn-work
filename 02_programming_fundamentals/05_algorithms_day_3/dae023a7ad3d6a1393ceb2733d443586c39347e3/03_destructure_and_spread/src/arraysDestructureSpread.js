function arrayCrusher(firstArray, secondArray) {
  const valueArray =  [...firstArray, ...secondArray];
  return  valueArray;
}


function recursiveBouncer(list) {
  if (list.length ===0){
    return;
  // code here
  }
  const [head, ...tail]= list;
  console.log ();
  recursiveBouncer(tail);
}
console.log(name);
module.exports = {
  arrayCrusher,
  recursiveBouncer,
};