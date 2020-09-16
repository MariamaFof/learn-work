const identityForm = (reader) => {
  reader.question("what first name", (firstName) =>{ 
    reader.question ("what last name>", (lastName) =>{
      reader.question ("what age", (age) =>{ 
        console.log(`Your name is ${firstName} ${lastName} and you are ${age}.`);
        reader.close;
      });
    });
  });

  //console.log(UserId);
};

// Leave line below for tests to work
module.exports = identityForm;
