import * as mongo from "mongodb";
import { type } from "os";

type Country ={
  name: "France",
  capital: "Paris",
  continent: "Europe",
}
export function findOneCountry(db: mongo.Db): Promise<Country> {
 
  return db.collection("worldAtlas").findOne({ name : "Iceland"})
}
