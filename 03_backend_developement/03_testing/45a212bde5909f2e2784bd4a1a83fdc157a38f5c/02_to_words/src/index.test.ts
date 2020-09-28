import{toWords} from "./index"
test("toWold",() =>{
   expect.assertions(1);
   const sentence:string[] = toWords("two words!")
  expect(sentence).toEqual(["two", "words"]);
    }); 
    test("toWold",() =>{
      expect.assertions(1);
      const sentence= toWords("does it-words?")
     expect(sentence).toEqual(["does", "it", "words"]);
       }); 
       test("toWold",() =>{
        expect.assertions(1);
        const sentence= toWords("does it-words?")
       expect(sentence).toEqual(["does", "it", "words"]);
         }); 
