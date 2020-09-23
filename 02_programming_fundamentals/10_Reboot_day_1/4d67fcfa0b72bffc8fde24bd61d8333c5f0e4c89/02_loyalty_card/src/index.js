import readline from "readline";
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
}); 

let R;
function printMenu(actionCust) {
  const printCust= (action, i) => console.log(`${i + 1} - ${action}`); {
    actionCust.forEach(printCust);
  };
  
}
const cardFidelitycustomer = (reader) =>{  
  const task  = [

  ];
 const addTask= ;
 const listTaks=;

   const R = reader;
  console.log("Welcome********************************************************");
  printMenu(["Add new customer","Access customer data","Quit"]);
  R.question("🤖 Choose an action\n>",(printList)=>{
    switch(printList){
      case "1":
        console.log("customer added");
        cardFidelitycustomer(R);
        break;
      case "2":
        console.log("customer information");
        cardFidelitycustomer(R);
        break;
      default:
        console.log("Unknown command");
        cardFidelitycustomer(R);

    }

  });

};
cardFidelitycustomer(reader);