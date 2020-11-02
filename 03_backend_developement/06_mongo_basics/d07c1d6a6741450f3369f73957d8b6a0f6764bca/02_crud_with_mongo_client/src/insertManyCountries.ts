import * as mongo from "mongodb";


type Country = {
  name: "",
  capital: "",
  continent: "",
  }
export function insertManyCountries(db: mongo.Db): Promise<Country[]> {
  const countries = [
    {
    name: "France",
    capital: "Paris",
    continent: "Europe",
    },
    {
    name: "Mali",
    capital: "Bamako",
    continent: "Afrique",
    },
    {
      name: "Guinée",
      capital: "Conakry",
      continent: "Afrique",
      }
  ];
  return db.collection("worldAtlas")
  .insertMany(countries)
  .then((writeOpResult) => {
    return writeOpResult.ops 
  })
}
