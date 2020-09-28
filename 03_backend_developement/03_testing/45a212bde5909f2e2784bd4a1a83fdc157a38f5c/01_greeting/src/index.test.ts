import{greet} from  "./index"

test ("greetingName: should greet Francis",() =>{
    expect.assertions(1);
  const result = greet("Francis"); 
    expect(result).toBe("Hello FRANCIS!")
});

test ("greet:should greet the world",() =>{
    expect.assertions(1);
   const result = greet("Hello world"); 
    expect(result).toBe("Hello HELLO WORLD!")
});
test ("greet:should greet the world",() =>{
    expect.assertions(1);
   const result = greet(); 
    expect(result).toBe("Hello WORLD!")
});
