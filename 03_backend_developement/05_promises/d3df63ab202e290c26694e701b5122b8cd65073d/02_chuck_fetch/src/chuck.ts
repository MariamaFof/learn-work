import fetch, { Response } from "node-fetch";

function getCategories(): Promise<string[]> {
  return fetch("https://api.chucknorris.io/jokes/categories").then((response) => response.json());
}
function getChuckNorrisJoke(category: string): Promise<string[]> {
  return fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then((response: Response) => response.json())
    .then((jokeData) => {
      return jokeData.value;
    });
}
export { getCategories, getChuckNorrisJoke };
