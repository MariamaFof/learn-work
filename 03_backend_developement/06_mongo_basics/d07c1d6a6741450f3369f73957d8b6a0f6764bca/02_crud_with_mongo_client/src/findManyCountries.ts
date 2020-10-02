import * as mongo from "mongodb";
import { type } from "os";

type Country = [{
    
name: "France",
capital: "Paris",
continent: "Europe",
}
];
export function findManyCountries(db: mongo.Db): Promise<Country[]> {
  return db
  .collection("worldAtlas")
  .find({continent: "Europe"})
  .toArray()
}

