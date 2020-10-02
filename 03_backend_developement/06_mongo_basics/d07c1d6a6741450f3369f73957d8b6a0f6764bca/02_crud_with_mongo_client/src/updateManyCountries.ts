import * as mongo from "mongodb";
type Country = {
  name: "France",
  capital: "Paris",
  continent: "Europe",
  }
export function updateManyCountries(db: mongo.Db): Promise<Country[]> {
  return db.collection("worldAtlas")
    .updateMany({ continent: "Europe"}, { $set: { continent: "EU"}})
    .then(() => {
       return db.collection("worldAtlas")
       .find({continent: "EU"})
    .toArray()
  })
}
