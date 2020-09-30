import { rl } from "./reader";
function ask(question: string, reader = rl): Promise<string> {
  return new Promise((resolve, reject) => {
    reader.question(question, (input: string) => {
      if (input !== "") {
        resolve(input);
      } else {
        reject("input not valide");
        reject(input);
      }
    });
  });
}
// Leave line below for tests to work properly
export default ask;
