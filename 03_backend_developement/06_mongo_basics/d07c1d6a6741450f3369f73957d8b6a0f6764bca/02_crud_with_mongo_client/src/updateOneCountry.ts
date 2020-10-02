import * as mongo from "mongodb";
type Country = {
  name: "France",
  capital: "Paris",
  continent: "Europe",
  }
export function updateOneCountry(db: mongo.Db): Promise<Country> {
  return db.collection("worldAtlas")
  .updateOne({ name: "Australia"}, { $set: { capital:"Canberra" }})
  .then((result) => {return db.collection("worldAtlas").findOne ({ name: "Australia"})
})
}
