function numberGame(reader, min = 1, max = 100) {
  // code here
  const numberToFind = (min = 1, max = 100) => 
    Math.round(Math.random() * (max - min) + min);
  const identityForm = (reader) => {
    reader.question("Should handle 'too low' numbers",(user) => {
  if(isNaN(answer)){
 console.log("This was not a number");
      }
 reader.close();
      }
    }) ;
 };
module.exports = numberGame;