/* global db */

const Country =
{
    name: "France",
    capital: "Paris",
    continent: "Europe",
  }
db.worldAtlas.insertOne(Country)
// write your MongoDB shell command here
