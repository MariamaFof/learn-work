import * as mongo from "mongodb";

type Country = {
name: "Allemangne",
capital: "Berlin",
continent: "Europe",
}
export function insertOneCountry(db: mongo.Db): Promise<Country> {
  const country = {
    name: "Allemangne",
    capital: "Berlin",
    continent: "Europe",
    }
return db.collection("worldAtlas")
.insertOne(country).then((result) => {
  return result.ops[0]
  })
}