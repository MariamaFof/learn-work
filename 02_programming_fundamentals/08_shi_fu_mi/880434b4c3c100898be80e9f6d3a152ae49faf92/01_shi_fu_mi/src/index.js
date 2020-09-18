const readline = require("readline");
const clear = () => console.log("\x1B[2J\x1B[0f");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const moves = {
  Rock : [
      
    "    ________        ",
    "---'   _ ,  |       ",
    "      (__(__)       ",
    "      (_____)       ",
    "      (____)        ",
    "---.__(___)         ",
  ], 
  
  Paper: [
    "      _______       ",
    "----'    ____)____  ",
    "            _______)",
    "            _______)",
    "           _______) ",
    "----.__________)    ",
  ],
  Scissors: [

    
    "    ____           ",
    "---'    |________  ",
    "     (__)________) ",
    "        _________) ",
    "      (____)       ",
    "---.__(___)        ",
  ],
};
 
clear();
console.log("Welcome to the ShiFuMi!");
Object.keys(moves).forEach((moveName, index) => {  
  console.log(`${index + 1} - ${moveName}`);
});
const reverseLine = (line) => {
  const changedLine = line 
    .split("")
    .map(char =>{
      if (char === ")") {
        return "(";
      } else if (char === "("){
        return ")";
      }  
       
      return char; 
    })
    .join("");
  return changedLine.split("").reverse().join("");

};

reader.question("select a move\n>" , (playerMove) => {
  const index = parseInt(playerMove - 1);
  const move = Object.keys(moves)[index];
  console.log("player move");
  const playerSymbol = moves[move];

  console.log(playerSymbol.join("\n"));

  const aiIndex = Math.floor(Math.random()* 3);
  const aiMove = Object.keys(moves)[aiIndex];
  const aiSymbol = moves[aiMove].map(reverseLine);
  
  console.log(aiSymbol.join("\n"));
  reader.close();
});