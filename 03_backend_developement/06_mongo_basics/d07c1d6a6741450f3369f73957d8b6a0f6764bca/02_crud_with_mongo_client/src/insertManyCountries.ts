import * as mongo from "mongodb";


type Country = {
  name: "France",
  capital: "Paris",
  continent: "Europe",
  }
export function insertManyCountries(db: mongo.Db): Promise<Country[]> {
  const countries = [
    {
    name: "Frce",
    capital: "Pars",
    continent: "Europe",
    },
    {
    name: "Foie",
    capital: "Prts",
    continent: "Europe",
    },
    {
      name: "Foi",
      capital: "Prtmmms",
      continent: "Europe",
      }
  ];
  return db.collection("worldAtlas")
  .insertMany(countries)
  .then((writeOpResult) => {
    return writeOpResult.ops 
  })
}
