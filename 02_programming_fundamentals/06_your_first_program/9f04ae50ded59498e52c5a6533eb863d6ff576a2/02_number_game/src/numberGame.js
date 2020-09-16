function numberGame(reader, min = 1, max = 100) {
  // code here
  const numberToFind = (min = 1, max = 100) => 
    Math.round(Math.random() * (max - min) + min);
  
  const defaultNumber = 24;
  
  const numberToGuess = numberToFind(min, max);
  console.log(numberToGuess);
  const identityForm = (reader) => {
    reader.question("Should handle 'too low' numbers",(user) => {
    } );   
    if ( numberToGuess < defaultNumber){
      console.log("This was not a number");
    }
    else if (numberToGuess > defaultNumber){ 
      console.log( "The number is between 1 and 100");
    }
    else {
      return numberGame;
    }
    
  }; 
};
module.exports = numberGame;
